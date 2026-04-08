/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useCallback } from "react";

const r180 = Math.PI;
const r90 = Math.PI / 2;
const r15 = Math.PI / 12;
const color = "#88888825";
const MIN_BRANCH = 30;

function initCanvas(
  canvas: HTMLCanvasElement,
  width = 400,
  height = 400,
  _dpi?: number,
): { ctx: CanvasRenderingContext2D; dpi: number } {
  const ctx = canvas.getContext("2d")!;
  const dpr = window.devicePixelRatio || 1;
  const bsr: number =
    (ctx as any).webkitBackingStorePixelRatio ||
    (ctx as any).mozBackingStorePixelRatio ||
    (ctx as any).msBackingStorePixelRatio ||
    (ctx as any).oBackingStorePixelRatio ||
    (ctx as any).backingStorePixelRatio ||
    1;
  const dpi = _dpi || dpr / bsr;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.width = dpi * width;
  canvas.height = dpi * height;
  ctx.scale(dpi, dpi);
  return { ctx, dpi };
}

function polar2cart(x = 0, y = 0, r = 0, theta = 0): [number, number] {
  const dx = r * Math.cos(theta);
  const dy = r * Math.sin(theta);
  return [x + dx, y + dy];
}

export default function ArtPlum() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const mask = "radial-gradient(circle, transparent, black)";

  const run = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const { ctx } = initCanvas(canvas, width, height);
    const len = 6;

    let steps: (() => void)[] = [];
    let prevSteps: (() => void)[] = [];

    const step = (
      x: number,
      y: number,
      rad: number,
      counter: { value: number } = { value: 0 },
    ): void => {
      const length = Math.random() * len;
      counter.value += 1;
      const [nx, ny] = polar2cart(x, y, length, rad);
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(nx, ny);
      ctx.stroke();
      const rad1 = rad + Math.random() * r15;
      const rad2 = rad - Math.random() * r15;
      if (nx < -100 || nx > width + 100 || ny < -100 || ny > height + 100)
        return;
      const rate = counter.value <= MIN_BRANCH ? 0.8 : 0.5;
      if (Math.random() < rate) steps.push(() => step(nx, ny, rad1, counter));
      if (Math.random() < rate) steps.push(() => step(nx, ny, rad2, counter));
    };

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 1;
    ctx.strokeStyle = color;

    const randomMiddle = () => Math.random() * 0.6 + 0.2;

    steps = [
      () => step(randomMiddle() * width, -5, r90),
      () => step(randomMiddle() * width, height + 5, -r90),
      () => step(-5, randomMiddle() * height, 0),
      () => step(width + 5, randomMiddle() * height, r180),
    ];
    if (width < 500) steps = steps.slice(0, 2);

    const interval = 1000 / 40;
    let lastTime = performance.now();

    const frame = () => {
      if (performance.now() - lastTime < interval) {
        rafRef.current = requestAnimationFrame(frame);
        return;
      }
      prevSteps = steps;
      steps = [];
      lastTime = performance.now();
      if (!prevSteps.length) return;
      prevSteps.forEach((i) => {
        if (Math.random() < 0.5) steps.push(i);
        else i();
      });
      rafRef.current = requestAnimationFrame(frame);
    };

    rafRef.current = requestAnimationFrame(frame);
  }, []);

  useEffect(() => {
    run();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [run]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        pointerEvents: "none",
        zIndex: -1,
        maskImage: mask,
        WebkitMaskImage: mask,
      }}
    >
      <canvas ref={canvasRef} width={400} height={400} />
    </div>
  );
}
