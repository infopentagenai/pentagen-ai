"use client";

import {
  MessageSquare,
  Image,
  Video,
  Mic,
  FileText,
  Download,
  Eye,
} from "lucide-react";

const history = [
  {
    tool: "AI Chat",
    icon: MessageSquare,
    date: "Today",
    status: "Completed",
  },
  {
    tool: "AI Image",
    icon: Image,
    date: "Today",
    status: "Completed",
  },
  {
    tool: "AI Video",
    icon: Video,
    date: "Yesterday",
    status: "Processing",
  },
  {
    tool: "AI Voice",
    icon: Mic,
    date: "Yesterday",
    status: "Completed",
  },
  {
    tool: "AI Writer",
    icon: FileText,
    date: "2 Days Ago",
    status: "Completed",
  },
];

export default function HistoryTable() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold text-white">
          Recent AI History
        </h2>

        <button className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-600">
          View All
        </button>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-800 text-left">

              <th className="pb-4 text-slate-400">Tool</th>

              <th className="pb-4 text-slate-400">Date</th>

              <th className="pb-4 text-slate-400">Status</th>

              <th className="pb-4 text-right text-slate-400">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {history.map((item) => {

              const Icon = item.icon;

              return (

                <tr
                  key={item.tool}
                  className="border-b border-slate-800 transition hover:bg-slate-800/40"
                >

                  <td className="py-5">

                    <div className="flex items-center gap-3">

                      <div className="rounded-xl bg-slate-800 p-3">

                        <Icon
                          size={18}
                          className="text-cyan-400"
                        />

                      </div>

                      <span className="font-medium text-white">
                        {item.tool}
                      </span>

                    </div>

                  </td>

                  <td className="text-slate-300">
                    {item.date}
                  </td>

                  <td>

                    <span
                      className={`rounded-full px-3 py-1 text-sm font-medium ${
                        item.status === "Completed"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {item.status}
                    </span>

                  </td>

                  <td>

                    <div className="flex justify-end gap-3">

                      <button className="rounded-lg bg-slate-800 p-2 transition hover:bg-slate-700">

                        <Eye
                          size={18}
                          className="text-cyan-400"
                        />

                      </button>

                      <button className="rounded-lg bg-slate-800 p-2 transition hover:bg-slate-700">

                        <Download
                          size={18}
                          className="text-cyan-400"
                        />

                      </button>

                    </div>

                  </td>

                </tr>

              );

            })}

          </tbody>

        </table>

      </div>

    </div>
  );
}