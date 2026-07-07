"use client";

import { Sparkles } from "lucide-react";

export default function WelcomeBanner() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 p-8">

      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

      <div className="relative">

        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white">
          <Sparkles size={16} />
          Welcome Back
        </div>

        <h1 className="mt-6 text-4xl font-bold text-white">
          Build Faster with AI 🚀
        </h1>

        <p className="mt-4 max-w-2xl text-cyan-100">
          Generate Chat, Images, Videos, Voice and Code from one powerful
          dashboard.
        </p>

        <button className="mt-8 rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:scale-105">
          Explore AI Tools
        </button>

      </div>

    </div>
  );
}