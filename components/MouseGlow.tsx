"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({
    x: -300,
    y: -300,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl transition-transform duration-150"
      style={{
        transform: `translate(${position.x - 192}px, ${position.y - 192}px)`,
      }}
    />
  );
}