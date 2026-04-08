import React, { useRef, useEffect } from "react";
import {
  Renderer,
  Camera,
  Transform,
  Program,
  Mesh,
  Triangle,
} from "ogl";

// 셰이더 정의
const vertex = /* glsl */ `
    attribute vec2 position;
    attribute vec2 uv;
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`;

const fragment = /* glsl */ `
    precision highp float;
    
    uniform float uTime;
    varying vec2 vUv;
    
    // 단순한 노이즈 함수 대신 삼각함수를 조합하여 부드러운 파동 생성 (가벼움)
    float wave(vec2 p, float time) {
        float x = p.x;
        float y = p.y;
        float val = sin(x * 10.0 + time) * cos(x * 15.0 - time * 0.5) * 0.5 + 0.5;
        // 중심축(x=0.5)으로 갈수록 강해지게
        float centerDist = abs(x - 0.5) * 2.0; 
        val *= smoothstep(1.0, 0.0, centerDist);
        return val;
    }

    void main() {
        vec2 uv = vUv;
        
        // 시간 기반 부드러운 일렁임 (맥박)
        float t = uTime * 0.5;
        
        // 빛의 중심축 생성
        float centerDist = abs(uv.x - 0.5);
        
        // y축을 따라 퍼지는 형태 (위가 좁고 아래가 넓게 퍼지는 원뿔/가우시안 유사 느낌)
        float spread = uv.y * 1.5 + 0.5;
        float beam = smoothstep(spread * 0.5, 0.0, centerDist);
        
        // 여러 겹의 빛 레이어 (단순화된 파동)
        float rays = wave(vec2(uv.x, uv.y), t) * 0.5 
                   + wave(vec2(uv.x * 0.8 + 0.1, uv.y), t * 1.2) * 0.3
                   + wave(vec2(uv.x * 1.2 - 0.1, uv.y), t * 0.8) * 0.2;
                   
        // 최종 형태 조합
        float intensity = beam * rays;
        
        // y축 위에서 아래로 서서히 사라지는 그라데이션 (마스크 효과)
        float falloff = smoothstep(1.0, 0.2, uv.y);
        
        // 위쪽 가장자리 경계를 부드럽게 깎아냄
        float topEdge = smoothstep(0.0, 0.1, uv.y);
        
        // 밝기 증폭 및 맥박(pulse) 애니메이션 결합
        float pulse = sin(uTime * 1.5) * 0.15 + 0.85; // 0.7 ~ 1.0 사이로 진동
        float alpha = intensity * falloff * topEdge * pulse;
        
        // 화이트 톤 기반, 은은한 투명도 조절
        vec3 color = vec3(0.95, 0.98, 1.0); // 아주 미세한 푸른빛이 도는 화이트
        
        gl_FragColor = vec4(color, alpha * 0.6); // 최대 투명도 제한 (너무 과하지 않게)
    }
`;

const LightRays = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // 성능 최적화: 해상도 비율 제한
    const dpr = Math.min(window.devicePixelRatio, 1.5);

    // OGL 초기화: 알파 채널(투명도) 허용
    const renderer = new Renderer({ alpha: true, dpr });
    const gl = renderer.gl;
    container.appendChild(gl.canvas);

    // 캔버스 스타일 (절대 투명)
    gl.canvas.style.position = "absolute";
    gl.canvas.style.top = "0";
    gl.canvas.style.left = "0";
    gl.canvas.style.width = "100%";
    gl.canvas.style.height = "100%";
    gl.canvas.style.pointerEvents = "none";

    const camera = new Camera(gl);
    camera.position.z = 1;

    const scene = new Transform();

    // 뷰포트를 채우는 단순한 삼각형 메쉬 (퍼포먼스 최고)
    const geometry = new Triangle(gl);

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
      },
      transparent: true,
      // Add blending for soft glowing effect
      blendFunc: { src: gl.SRC_ALPHA, dst: gl.ONE },
    });

    const mesh = new Mesh(gl, { geometry, program });
    mesh.setParent(scene);

    let animationId: number;
    let isVisible = false;

    const resize = () => {
      if (!container) return;
      // 부모 컨테이너 크기에 맞춤
      renderer.setSize(
        container.clientWidth,
        container.clientHeight,
      );
    };

    window.addEventListener("resize", resize, false);
    resize();

    // 렌더 루프
    const update = (t: number) => {
      if (!isVisible) return; // 화면 밖이면 연산 완전 중단

      program.uniforms.uTime.value = t * 0.001;
      renderer.render({ scene, camera });
      animationId = requestAnimationFrame(update);
    };

    // IntersectionObserver로 가시성 체크 (성능 최적화의 핵심)
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          if (!isVisible) {
            isVisible = true;
            animationId = requestAnimationFrame(update);
          }
        } else {
          isVisible = false;
          cancelAnimationFrame(animationId);
        }
      },
      {
        threshold: 0, // 단 1픽셀이라도 보이면 켜고, 완전히 사라지면 끔
      },
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      if (container && gl.canvas.parentNode === container) {
        container.removeChild(gl.canvas);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-[600px] z-[1] pointer-events-none overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to bottom, black 60%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 60%, transparent 100%)",
      }}
    />
  );
};

export default LightRays;