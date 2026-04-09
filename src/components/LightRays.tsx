import { useRef, useEffect } from "react";
import { Renderer, Program, Triangle, Mesh } from "ogl";

const LightRays = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const renderer = new Renderer({ alpha: true });
    const gl = renderer.gl;
    ref.current.appendChild(gl.canvas);

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

        void main() {
          vec2 uv = vUv;
          vec2 p = uv - vec2(0.5, 1.0);

          float angle = atan(p.x, p.y);
          float dist = length(p);

          float rays = pow(sin(angle * 6.0 + iTime * 0.3) * 0.5 + 0.5, 0.3);

          float glow = smoothstep(1.2, 0.0, dist);

          float mask = smoothstep(0.6, 0.2, abs(uv.x - 0.5));

          float intensity = rays * glow * mask;

          vec3 color = vec3(1.0);

          gl_FragColor = vec4(color, intensity * 0.9);
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
      renderer.setSize(ref.current.clientWidth, ref.current.clientHeight);
      program.uniforms.iResolution.value = [
        ref.current.clientWidth,
        ref.current.clientHeight,
      ];
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
