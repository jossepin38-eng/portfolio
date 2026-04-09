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

precision highp float;

uniform float uTime;
varying vec2 vUv;

float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.545);
}

void main() {
    vec2 uv = vUv;

    vec2 center = vec2(0.5, 0.0);
    vec2 dir = uv - center;

    float angle = atan(dir.x, dir.y);
    float dist = length(dir);

    float rays = sin(angle * 20.0 + uTime * 0.8) * 0.5 + 0.5;

    float glow = smoothstep(0.8, 0.0, dist);

    float noise = random(uv + uTime * 0.1) * 0.1;

    float intensity = rays * glow + noise;

    vec3 color = vec3(1.0);

    gl_FragColor = vec4(color, intensity * 0.6);
}

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
      className="absolute top-0 left-0 w-full h-[600px] z-0 pointer-events-none overflow-hidden"
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
