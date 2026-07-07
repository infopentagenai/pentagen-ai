"use client";

import {
  MessageSquare,
  Image,
  Video,
  Mic,
} from "lucide-react";

const actions = [
  {
    title: "New Chat",
    icon: MessageSquare,
  },
  {
    title: "Generate Image",
    icon: Image,
  },
  {
    title: "Create Video",
    icon: Video,
  },
  {
    title: "Voice Generator",
    icon: Mic,
  },
];

export default function QuickActions() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-xl font-bold text-white">
        Quick Actions
      </h2>

      <div className="mt-6 grid grid-cols-2 gap-5">

        {actions.map((action) => {

          const Icon = action.icon;

          return (

            <button
              key={action.title}
              className="rounded-xl border border-slate-800 bg-slate-800 p-6 transition hover:border-cyan-500 hover:bg-slate-700"
            >

              <Icon
                size={28}
                className="mx-auto text-cyan-400"
              />

              <p className="mt-4 text-white">
                {action.title}
              </p>

            </button>

          );

        })}

      </div>

    </div>
  );
}