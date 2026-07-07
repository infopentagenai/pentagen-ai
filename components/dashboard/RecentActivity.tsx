"use client";

const activities = [
  "Generated AI Image",
  "Created Blog with AI Writer",
  "Voice Cloning Completed",
  "Generated AI Video",
  "Started AI Chat",
];

export default function RecentActivity() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-xl font-bold text-white">
        Recent Activity
      </h2>

      <div className="mt-6 space-y-4">

        {activities.map((item, index) => (

          <div
            key={index}
            className="flex items-center justify-between rounded-xl bg-slate-800 px-4 py-4"
          >

            <span className="text-slate-300">
              {item}
            </span>

            <span className="text-sm text-cyan-400">
              Just Now
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}