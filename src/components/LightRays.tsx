import { useRef, useEffect } from "react";
import { Renderer, Program, Triangle, Mesh } from "ogl";

const LightRays = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const renderer = new Renderer({
      dpr: Math.min(window.devicePixelRatio, 2),
      alpha: true,
    });

    const gl = renderer.gl;
    containerRef.current.appendChild(gl.canvas);

    gl.canvas.style.width = "100%";
    gl.canvas.style.height = "100%";

    const geometry = new Triangle(gl);

    const program = new Program(gl, {
      vertex: `
        attribute vec2 position;
        varying vec2 vUv;
        void main() {
          vUv = position * 0.5 + 0.5;
          gl_Position = vec4(position, 0, 1);
        }
      `,
      fragment: `
        precision highp float;

        uniform float iTime;
        uniform vec2 iResolution;

        varying vec2 vUv;

        float rayStrength(vec2 coord, vec2 origin) {
          vec2 dir = coord - origin;
          float angle = atan(dir.x, dir.y);
          float dist = length(dir);

          float rays = pow(
            sin(angle * 6.0 + iTime * 0.4) * 0.5 + 0.5,
            0.25
          );

          float falloff = smoothstep(1.5, 0.0, dist);

          return rays * falloff;
        }

        void main() {
          vec2 uv = vUv;

          // TOP CENTER 기준
          vec2 origin = vec2(0.5, 1.0);

          float strength = rayStrength(uv, origin);

          // 중앙 집중 마스크
          float mask = smoothstep(0.7, 0.2, abs(uv.x - 0.5));

          // 위쪽 강조
          float fadeTop = smoothstep(1.0, 0.6, uv.y);

          float intensity = strength * mask * fadeTop;

          vec3 color = vec3(1.0);

          gl_FragColor = vec4(color, intensity * 1.2);
        }
      `,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: [1, 1] },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    const resize = () => {
      if (!containerRef.current) return;

      const { clientWidth, clientHeight } = containerRef.current;
      renderer.setSize(clientWidth, clientHeight);

      program.uniforms.iResolution.value = [
        clientWidth,
        clientHeight,
      ];
    };

    window.addEventListener("resize", resize);
    resize();

    let animationId: number;

    const update = (t: number) => {
      program.uniforms.iTime.value = t * 0.001;
      renderer.render({ scene: mesh });
      animationId = requestAnimationFrame(update);
    };

    animationId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-[600px] pointer-events-none z-[1]" ref={containerRef} />
  );
};

export default LightRays;
