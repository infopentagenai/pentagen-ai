"use client";

import { Bot } from "lucide-react";

export default function TypingLoader() {
  return (
    <div className="flex w-full justify-start">

      <div className="flex max-w-3xl gap-4">

        {/* AI Avatar */}

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-800">

          <Bot
            size={18}
            className="text-cyan-400"
          />

        </div>

        {/* Typing Bubble */}

        <div className="rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4">

          <div className="flex items-center gap-2">

            <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.3s]"></span>

            <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.15s]"></span>

            <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-cyan-400"></span>

          </div>

        </div>

      </div>

    </div>
  );
}