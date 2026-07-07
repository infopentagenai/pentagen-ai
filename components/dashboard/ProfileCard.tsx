"use client";

import { Crown } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <div className="flex items-center gap-4">

        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-2xl font-bold text-white">
          V
        </div>

        <div>

          <h2 className="text-xl font-bold text-white">
            Vijay
          </h2>

          <p className="text-slate-400">
            Pentagen AI User
          </p>

        </div>

      </div>

      <div className="mt-8 rounded-xl bg-slate-800 p-4">

        <div className="flex items-center gap-3">

          <Crown className="text-yellow-400" />

          <span className="font-semibold text-white">
            Free Plan
          </span>

        </div>

        <button className="mt-5 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold text-white transition hover:scale-105">
          Upgrade to Pro
        </button>

      </div>

    </div>
  );
}