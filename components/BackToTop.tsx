"use client";

import { useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [showButton] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showButton) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
    >
      <ArrowUp size={24} />
    </button>
  );
}