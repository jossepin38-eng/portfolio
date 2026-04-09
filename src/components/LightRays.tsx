import { useRef, useEffect, useState } from 'react';
import { Renderer, Program, Triangle, Mesh } from 'ogl';

const DEFAULT_COLOR = '#ffffff';

const hexToRgb = hex => {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return m ? [parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255] : [1, 1, 1];
};

const getAnchorAndDir = (origin, w, h) => {
  const outside = 0.2;
  switch (origin) {
    case 'top-left': return { anchor: [0, -outside * h], dir: [0, 1] };
    case 'top-right': return { anchor: [w, -outside * h], dir: [0, 1] };
    case 'left': return { anchor: [-outside * w, 0.5 * h], dir: [1, 0] };
    case 'right': return { anchor: [(1 + outside) * w, 0.5 * h], dir: [-1, 0] };
    case 'bottom-left': return { anchor: [0, (1 + outside) * h], dir: [0, -1] };
    case 'bottom-center': return { anchor: [0.5 * w, (1 + outside) * h], dir: [0, -1] };
    case 'bottom-right': return { anchor: [w, (1 + outside) * h], dir: [0, -1] };
    default: return { anchor: [0.5 * w, -outside * h], dir: [0, 1] };
  }
};

const LightRays = ({
  raysOrigin = 'top-center',
  raysColor = DEFAULT_COLOR,
  raysSpeed = 1,
  lightSpread = 1,
  rayLength = 2,
  pulsating = false,
  fadeDistance = 1.0,
  saturation = 1.0,
  followMouse = true,
  mouseInfluence = 0.1,
  noiseAmount = 0.0,
  distortion = 0.0,
  className = ''
}) => {
  const containerRef = useRef(null);
  const canvasParentRef = useRef(null);
  const rendererRef = useRef(null);
  const uniformsRef = useRef(null);
  const animationIdRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const smoothMouseRef = useRef({ x: 0.5, y: 0.5 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !canvasParentRef.current) return;

    const renderer = new Renderer({ dpr: Math.min(window.devicePixelRatio, 2), alpha: true });
    const gl = renderer.gl;
    rendererRef.current = renderer;

    gl.canvas.style.display = 'block';
    gl.canvas.style.width = '100%';
    gl.canvas.style.height = '100%';
    gl.canvas.style.position = 'absolute';
    gl.canvas.style.top = '0';
    gl.canvas.style.left = '0';

    canvasParentRef.current.innerHTML = '';
    canvasParentRef.current.appendChild(gl.canvas);

    const vert = `attribute vec2 position; varying vec2 vUv; void main() { vUv = position * 0.5 + 0.5; gl_Position = vec4(position, 0.0, 1.0); }`;
    const frag = `
      precision highp float;
      uniform float iTime; uniform vec2 iResolution; uniform vec2 rayPos; uniform vec2 rayDir;
      uniform vec3 raysColor; uniform float raysSpeed; uniform float lightSpread;
      uniform float rayLength; uniform float pulsating; uniform float fadeDistance;
      uniform float saturation; uniform vec2 mousePos; uniform float mouseInfluence;
      uniform float noiseAmount; uniform float distortion; varying vec2 vUv;
      float noise(vec2 st) { return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123); }
      float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord, float seedA, float seedB, float speed) {
        vec2 sourceToCoord = coord - raySource;
        vec2 dirNorm = normalize(sourceToCoord);
        float cosAngle = dot(dirNorm, rayRefDirection);
        float distortedAngle = cosAngle + distortion * sin(iTime * 2.0 + length(sourceToCoord) * 0.01) * 0.2;
        float spreadFactor = pow(max(distortedAngle, 0.0), 1.0 / max(lightSpread, 0.001));
        float distance = length(sourceToCoord);
        float maxDistance = iResolution.x * rayLength;
        float lengthFalloff = clamp((maxDistance - distance) / maxDistance, 0.0, 1.0);
        float fadeFalloff = clamp((iResolution.x * fadeDistance - distance) / (iResolution.x * fadeDistance), 0.5, 1.0);
        float pulse = pulsating > 0.5 ? (0.8 + 0.2 * sin(iTime * speed * 3.0)) : 1.0;
        float baseStrength = clamp((0.45 + 0.15 * sin(distortedAngle * seedA + iTime * speed)) + (0.3 + 0.2 * cos(-distortedAngle * seedB + iTime * speed)), 0.0, 1.0);
        return baseStrength * lengthFalloff * fadeFalloff * spreadFactor * pulse;
      }
      void main() {
        vec2 coord = vec2(gl_FragCoord.x, iResolution.y - gl_FragCoord.y);
        vec2 finalRayDir = rayDir;
        if (mouseInfluence > 0.0) {
          vec2 mouseScreenPos = mousePos * iResolution.xy;
          vec2 mouseDirection = normalize(mouseScreenPos - rayPos);
          finalRayDir = normalize(mix(rayDir, mouseDirection, mouseInfluence));
        }
        vec4 rays1 = vec4(1.0) * rayStrength(rayPos, finalRayDir, coord, 36.2214, 21.11349, 1.5 * raysSpeed);
        vec4 rays2 = vec4(1.0) * rayStrength(rayPos, finalRayDir, coord, 22.3991, 18.0234, 1.1 * raysSpeed);
        vec4 finalColor = rays1 * 0.5 + rays2 * 0.4;
        if (noiseAmount > 0.0) { finalColor.rgb *= (1.0 - noiseAmount + noiseAmount * noise(coord * 0.01 + iTime * 0.1)); }
        float brightness = 1.0 - (coord.y / iResolution.y);
        finalColor.rgb *= vec3(0.1 + brightness * 0.8, 0.3 + brightness * 0.6, 0.5 + brightness * 0.5);
        if (saturation != 1.0) {
          float gray = dot(finalColor.rgb, vec3(0.299, 0.587, 0.114));
          finalColor.rgb = mix(vec3(gray), finalColor.rgb, saturation);
        }
        gl_FragColor = vec4(finalColor.rgb * raysColor, finalColor.a);
      }
    `;

    const uniforms = {
      iTime: { value: 0 }, iResolution: { value: [1, 1] }, rayPos: { value: [0, 0] },
      rayDir: { value: [0, 1] }, raysColor: { value: hexToRgb(raysColor) }, raysSpeed: { value: raysSpeed },
      lightSpread: { value: lightSpread }, rayLength: { value: rayLength }, pulsating: { value: pulsating ? 1.0 : 0.0 },
      fadeDistance: { value: fadeDistance }, saturation: { value: saturation }, mousePos: { value: [0.5, 0.5] },
      mouseInfluence: { value: mouseInfluence }, noiseAmount: { value: noiseAmount }, distortion: { value: distortion }
    };
    uniformsRef.current = uniforms;

    const mesh = new Mesh(gl, { geometry: new Triangle(gl), program: new Program(gl, { vertex: vert, fragment: frag, uniforms }) });

    const updateSize = () => {
      if (!canvasParentRef.current) return;
      const { clientWidth: w, clientHeight: h } = canvasParentRef.current;
      renderer.setSize(w, h);
      uniforms.iResolution.value = [w * renderer.dpr, h * renderer.dpr];
      const { anchor, dir } = getAnchorAndDir(raysOrigin, w * renderer.dpr, h * renderer.dpr);
      uniforms.rayPos.value = anchor;
      uniforms.rayDir.value = dir;
    };

    const loop = (t) => {
      animationIdRef.current = requestAnimationFrame(loop);
      uniforms.iTime.value = t * 0.001;
      if (followMouse) {
        smoothMouseRef.current.x += (mouseRef.current.x - smoothMouseRef.current.x) * 0.08;
        smoothMouseRef.current.y += (mouseRef.current.y - smoothMouseRef.current.y) * 0.08;
        uniforms.mousePos.value = [smoothMouseRef.current.x, smoothMouseRef.current.y];
      }
      renderer.render({ scene: mesh });
    };

    window.addEventListener('resize', updateSize);
    updateSize();
    animationIdRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', updateSize);
      cancelAnimationFrame(animationIdRef.current);
      if (gl.canvas.parentNode) gl.canvas.parentNode.removeChild(gl.canvas);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [isVisible, raysOrigin, raysColor, raysSpeed, lightSpread, rayLength, pulsating, fadeDistance, saturation, followMouse, mouseInfluence, noiseAmount, distortion]);

  useEffect(() => {
    const move = (e) => {
      if (!canvasParentRef.current) return;
      const rect = canvasParentRef.current.getBoundingClientRect();
      mouseRef.current = { x: (e.clientX - rect.left) / rect.width, y: (e.clientY - rect.top) / rect.height };
    };
    if (followMouse) window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [followMouse]);

  return (
    <div ref={containerRef} className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`}>
      <div ref={canvasParentRef} className="w-full h-full" />
    </div>
  );
};

export default LightRays;
