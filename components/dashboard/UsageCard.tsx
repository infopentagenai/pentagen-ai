"use client";

export default function UsageCard() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-xl font-bold text-white">
        Monthly Usage
      </h2>

      <div className="mt-8">

        <div className="flex justify-between">

          <span className="text-slate-400">
            AI Credits
          </span>

          <span className="font-semibold text-white">
            780 / 1000
          </span>

        </div>

        <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800">

          <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"></div>

        </div>

      </div>

      <div className="mt-8">

        <div className="flex justify-between">

          <span className="text-slate-400">
            Storage
          </span>

          <span className="font-semibold text-white">
            12 GB / 20 GB
          </span>

        </div>

        <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800">

          <div className="h-full w-[60%] rounded-full bg-gradient-to-r from-green-500 to-emerald-500"></div>

        </div>

      </div>

    </div>
  );
}