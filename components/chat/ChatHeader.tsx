"use client";

import {
  Bot,
  ChevronDown,
  Settings,
  Moon,
  Plus,
} from "lucide-react";

export default function ChatHeader() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-950 px-8">

      {/* Left */}

      <div className="flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600">

          <Bot className="text-white" size={24} />

        </div>

        <div>

          <h1 className="text-xl font-bold text-white">
            AI Chat
          </h1>

          <p className="text-sm text-slate-400">
            Choose your AI model
          </p>

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        {/* Model Selector */}

        <button className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-white transition hover:border-cyan-500">

          GPT-4

          <ChevronDown size={18} />

        </button>

        {/* New Chat */}

        <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white transition hover:scale-105">

          <Plus size={18} />

          New Chat

        </button>

        {/* Theme */}

        <button className="rounded-xl border border-slate-800 bg-slate-900 p-3 text-slate-300 transition hover:border-cyan-500">

          <Moon size={20} />

        </button>

        {/* Settings */}

        <button className="rounded-xl border border-slate-800 bg-slate-900 p-3 text-slate-300 transition hover:border-cyan-500">

          <Settings size={20} />

        </button>

      </div>

    </header>
  );
}