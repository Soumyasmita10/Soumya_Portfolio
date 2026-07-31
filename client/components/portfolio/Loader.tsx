import { useEffect, useState } from "react";

export default function Loader() {
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => (p >= 100 ? 100 : p + Math.random() * 18));
    }, 120);
    const timeout = setTimeout(() => setHidden(true), 1400);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-700 ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden={hidden}
    >
      <div className="relative flex h-20 w-20 items-center justify-center">
        <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-transparent border-t-neon-blue border-r-neon-purple" />
        <span className="font-display text-lg font-bold text-gradient">
          SS
        </span>
      </div>
      <div className="mt-6 h-1 w-40 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-neon-blue to-neon-purple transition-all duration-150"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
        Loading portfolio
      </p>
    </div>
  );
}
