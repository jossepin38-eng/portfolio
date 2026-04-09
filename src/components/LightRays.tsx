import { useRef, useEffect } from "react";
import { Renderer, Program, Triangle, Mesh } from "ogl";

const LightRays = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const renderer = new Renderer({
      dpr: Math.min(window.devicePixelRatio, 2),
      alpha: true,
    });

    const gl = renderer.gl;
    ref.current.appendChild(gl.canvas);

    const geometry = new Triangle(gl);

    const program = new Program(gl, {
      vertex: `
        attribute vec2 position;
        varying vec2 vUv;
        void main() {
          vUv = position * 0.5 + 0.5;
          gl_Position = vec4(position, 0.0, 1.0);
        }
      `,
      fragment: `
        precision highp float;

        uniform float iTime;
        uniform vec2 iResolution;

        varying vec2 vUv;

        float rayStrength(vec2 raySource, vec2 rayDir, vec2 coord) {
          vec2 toCoord = coord - raySource;
          float dist = length(toCoord);
          vec2 dir = normalize(toCoord);

          float angle = dot(dir, rayDir);

          float spread = pow(max(angle, 0.0), 8.0);

          float wave =
            0.5 + 0.5 * sin(angle * 30.0 + iTime * 1.5);

          float lengthFade = clamp(1.0 - dist / 1500.0, 0.0, 1.0);

          return spread * wave * lengthFade;
        }

        void main() {
          vec2 coord = vUv * iResolution;

          // TOP CENTER 시작점
          vec2 raySource = vec2(iResolution.x * 0.5, 0.0);

          // 아래 방향
          vec2 rayDir = normalize(vec2(0.0, 1.0));

          float r1 = rayStrength(raySource, rayDir, coord);
          float r2 = rayStrength(raySource, rayDir, coord * 0.9);

          float rays = r1 * 0.6 + r2 * 0.4;

          // 중앙 마스크
          float mask = smoothstep(0.6, 0.2, abs(vUv.x - 0.5));

          float intensity = rays * mask;

          vec3 color = vec3(1.0);

          gl_FragColor = vec4(color, intensity * 1.5);
        }
      `,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: [1, 1] },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    const resize = () => {
      if (!ref.current) return;

      const w = ref.current.clientWidth;
      const h = ref.current.clientHeight;

      renderer.setSize(w, h);
      program.uniforms.iResolution.value = [w, h];
    };

    window.addEventListener("resize", resize);
    resize();

    let id: number;

    const loop = (t: number) => {
      program.uniforms.iTime.value = t * 0.001;
      renderer.render({ scene: mesh });
      id = requestAnimationFrame(loop);
    };

    loop(0);

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <div ref={ref} className="absolute inset-0 pointer-events-none" />;
};

export default LightRays;
