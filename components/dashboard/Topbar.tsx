"use client";

import { Search, Bell, ChevronDown } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-950 px-8">

      {/* Left */}

      <div>

        <h1 className="text-3xl font-bold text-white">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Welcome back, Vijay 👋
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        {/* Search */}

        <div className="relative hidden lg:block">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            type="text"
            placeholder="Search AI tools..."
            className="w-80 rounded-xl border border-slate-800 bg-slate-900 py-3 pl-11 pr-5 text-white outline-none transition-all duration-300 focus:border-cyan-500"
          />

        </div>

        {/* Notification */}

        <button className="relative rounded-xl border border-slate-800 bg-slate-900 p-3 transition hover:border-cyan-500 hover:bg-slate-800">

          <Bell
            size={20}
            className="text-slate-300"
          />

          <span className="absolute right-2 top-2 flex h-3 w-3">

            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>

            <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>

          </span>

        </button>

        {/* User */}

        <button className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 transition hover:border-cyan-500">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-lg font-bold text-white">
            V
          </div>

          <div className="hidden text-left md:block">

            <h3 className="font-semibold text-white">
              Vijay
            </h3>

            <p className="text-xs text-slate-400">
              Free Plan
            </p>

          </div>

          <ChevronDown
            size={18}
            className="text-slate-400"
          />

        </button>

      </div>

    </header>
  );
}