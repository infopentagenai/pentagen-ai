"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Code2,
  FileText,
  Image,
  Mic,
  Video,
} from "lucide-react";

const tools = [
  {
    icon: Bot,
    title: "AI Chat",
    description: "Smart conversations powered by AI.",
  },
  {
    icon: Image,
    title: "AI Image",
    description: "Generate stunning AI artwork instantly.",
  },
  {
    icon: Video,
    title: "AI Video",
    description: "Create cinematic AI videos in seconds.",
  },
  {
    icon: Mic,
    title: "AI Voice",
    description: "Clone realistic voices with AI.",
  },
  {
    icon: Code2,
    title: "AI Code",
    description: "Generate production-ready code.",
  },
  {
    icon: FileText,
    title: "AI Writer",
    description: "Write blogs, emails and documents.",
  },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950">
      {/* Background Glow */}
      {/* Background Grid */}
      <div
      className="absolute inset-0 opacity-10"
      style={{
      backgroundImage: `
      linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
      `,
      backgroundSize: "50px 50px",
      }}
      />
      <div className="absolute left-20 top-32 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-28 lg:grid-cols-2">
        {/* Left Side */}
        <motion.div>
          <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
            🚀 Next Generation AI Platform
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">
            One Platform.
            <br />
            Unlimited{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI Possibilities
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            Chat with AI, generate images, create videos, clone voices and write
            code — all from one powerful platform.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105">
              Get Started Free
            </button>

            <button className="rounded-xl border border-slate-700 px-8 py-4 font-semibold text-white transition hover:border-cyan-400">
              Watch Demo
            </button>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <span className="text-yellow-400">★★★★★</span>

            <p className="text-slate-400">
              Trusted by{" "}
              <span className="font-semibold text-white">
                100,000+
              </span>{" "}
              creators
            </p>
          </div>

           <div className="mt-10 grid grid-cols-3 gap-6 border-t border-slate-800 pt-8">
           <div>
           <h3 className="text-3xl font-bold text-cyan-400">100K+</h3>
           <p className="mt-2 text-sm text-slate-400">Active Users</p>
           </div>

           <div>
           <h3 className="text-3xl font-bold text-cyan-400">25+</h3>
           <p className="mt-2 text-sm text-slate-400">AI Tools</p>
           </div>

           <div>
           <h3 className="text-3xl font-bold text-cyan-400">99.9%</h3>
           <p className="mt-2 text-sm text-slate-400">Uptime</p>
           </div>
           </div>

        </motion.div>

        {/* Right Side */}
        <div className="relative">

  <div className="rounded-3xl border border-cyan-500/20 bg-slate-900/80 p-6 backdrop-blur-xl shadow-2xl">

    <div className="flex items-center justify-between border-b border-slate-800 pb-4">
      <div>
        <h3 className="text-xl font-bold text-white">
          AI Assistant
        </h3>

        <p className="text-sm text-slate-400">
          Pentagen AI Workspace
        </p>
      </div>

      <div className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-400">
        ● Live
      </div>
    </div>

    <div className="mt-6 space-y-4">

      <div className="rounded-xl bg-slate-800/60 p-4">
        <p className="text-sm text-slate-400">
          User
        </p>

        <p className="mt-2 text-white">
          Create a modern AI website hero section.
        </p>
      </div>

      <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4">
        <p className="text-sm text-cyan-300">
          Pentagen AI
        </p>

        <p className="mt-2 text-white">
          Hero generated successfully with premium UI.
        </p>
      </div>

    </div>

    <div className="mt-8 grid grid-cols-2 gap-4">

      <div className="rounded-xl bg-slate-800 p-4">
        <h4 className="text-2xl font-bold text-cyan-400">
          100K+
        </h4>

        <p className="text-sm text-slate-400">
          Active Users
        </p>
      </div>

      <div className="rounded-xl bg-slate-800 p-4">
        <h4 className="text-2xl font-bold text-cyan-400">
          25+
        </h4>

        <p className="text-sm text-slate-400">
          AI Tools
        </p>
      </div>

    </div>

  </div>

</div>

<div className="mt-8 rounded-2xl border border-slate-800 bg-slate-800/50 p-5">
  <div className="mb-4 flex items-center justify-between">
    <h4 className="text-sm font-semibold text-white">
      AI Performance
    </h4>

    <span className="text-xs text-cyan-400">
      Live Analytics
    </span>
  </div>

  <div className="space-y-4">

    <div>
      <div className="mb-2 flex justify-between text-xs text-slate-400">
        <span>Image Generation</span>
        <span>92%</span>
      </div>

      <div className="h-2 rounded-full bg-slate-700">
        <div className="h-2 w-[92%] rounded-full bg-cyan-400"></div>
      </div>
    </div>

    <div>
      <div className="mb-2 flex justify-between text-xs text-slate-400">
        <span>AI Chat</span>
        <span>98%</span>
      </div>

      <div className="h-2 rounded-full bg-slate-700">
        <div className="h-2 w-[98%] rounded-full bg-green-400"></div>
      </div>
    </div>

  </div>
</div>

      </div>
    </section>
  );
}