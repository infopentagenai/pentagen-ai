"use client";

import {
  Bot,
  ImageIcon,
  Video,
  Mic,
} from "lucide-react";

const stats = [
  {
    title: "AI Chats",
    value: "12,548",
    icon: Bot,
    color: "text-cyan-400",
  },
  {
    title: "AI Images",
    value: "3,246",
    icon: ImageIcon,
    color: "text-pink-400",
  },
  {
    title: "AI Videos",
    value: "842",
    icon: Video,
    color: "text-green-400",
  },
  {
    title: "Voice Generated",
    value: "1,102",
    icon: Mic,
    color: "text-yellow-400",
  },
];

export default function StatCard() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      {stats.map((item) => {

        const Icon = item.icon;

        return (

          <div
            key={item.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/10"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-400">
                  {item.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold text-white">
                  {item.value}
                </h2>

              </div>

              <div className="rounded-xl bg-slate-800 p-4">

                <Icon className={item.color} size={28} />

              </div>

            </div>

          </div>

        );

      })}

    </div>
  );
}