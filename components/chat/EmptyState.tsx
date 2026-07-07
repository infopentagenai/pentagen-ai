"use client";

import { Sparkles } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="max-w-2xl text-center">

      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600">

        <Sparkles
          size={40}
          className="text-white"
        />

      </div>

      <h1 className="mt-8 text-5xl font-bold text-white">
        Welcome to Pentagen AI
      </h1>

      <p className="mt-6 text-lg leading-8 text-slate-400">
        Ask anything. Generate text, code, images,
        videos and much more using powerful AI models.
      </p>

    </div>
  );
}