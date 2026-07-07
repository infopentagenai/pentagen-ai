"use client";

import {
  Plus,
  Search,
  MessageSquare,
  Trash2,
  Sparkles,
} from "lucide-react";

const chats = [
  "Build Landing Page",
  "Generate Blog Article",
  "Create AI Image Prompt",
  "Business Plan Ideas",
  "React Dashboard UI",
];

export default function ChatSidebar() {
  return (
    <aside className="flex h-screen w-80 flex-col border-r border-slate-800 bg-slate-950">

      {/* Logo */}

      <div className="border-b border-slate-800 p-6">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-xl font-bold text-white">
            P
          </div>

          <div>

            <h1 className="text-xl font-bold text-white">
              Pentagen AI
            </h1>

            <p className="text-sm text-slate-400">
              AI Assistant
            </p>

          </div>

        </div>

      </div>

      {/* New Chat */}

      <div className="p-5">

        <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold text-white transition hover:scale-[1.02]">

          <Plus size={20} />

          New Chat

        </button>

      </div>

      {/* Search */}

      <div className="px-5">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            type="text"
            placeholder="Search chats..."
            className="w-full rounded-xl border border-slate-800 bg-slate-900 py-3 pl-11 pr-4 text-white outline-none focus:border-cyan-500"
          />

        </div>

      </div>

      {/* History */}

      <div className="mt-6 flex-1 overflow-y-auto px-5">

        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
          Recent Chats
        </h2>

        <div className="space-y-2">

          {chats.map((chat) => (

            <button
              key={chat}
              className="flex w-full items-center justify-between rounded-xl bg-slate-900 px-4 py-3 text-left transition hover:bg-slate-800"
            >

              <div className="flex items-center gap-3 overflow-hidden">

                <MessageSquare
                  size={18}
                  className="text-cyan-400"
                />

                <span className="truncate text-sm text-white">
                  {chat}
                </span>

              </div>

              <Trash2
                size={16}
                className="text-slate-500 transition hover:text-red-400"
              />

            </button>

          ))}

        </div>

      </div>

      {/* Footer */}

      <div className="border-t border-slate-800 p-5">

        <div className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 p-4">

          <div className="flex items-center gap-2">

            <Sparkles
              size={20}
              className="text-white"
            />

            <span className="font-semibold text-white">
              Pentagen Pro
            </span>

          </div>

          <p className="mt-3 text-sm text-cyan-100">
            Unlimited AI Chat, Images, Videos & Voice Generation.
          </p>

        </div>

      </div>

    </aside>
  );
}