import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      el.style.transform = `translate3d(${e.clientX - 200}px, ${e.clientY - 200}px, 0)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden h-[400px] w-[400px] rounded-full opacity-40 blur-[100px] will-change-transform md:block"
      style={{
        background:
          "radial-gradient(circle, hsl(var(--neon-blue) / 0.5), hsl(var(--neon-purple) / 0.2) 60%, transparent 70%)",
      }}
      aria-hidden="true"
    />
  );
}
