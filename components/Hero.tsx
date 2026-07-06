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
        <div className="grid grid-cols-2 gap-5">
          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <div
                key={tool.title}
                className="group rounded-2xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]"
              >
                <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-cyan-500/10 p-3">
              <Icon className="h-7 w-7 text-cyan-400" />
              </div>

               <ArrowUpRight className="h-5 w-5 text-slate-500 transition group-hover:text-cyan-400" />
               </div>
                

                <h3 className="text-lg font-semibold text-white">
                  {tool.title}
                </h3>

                <p className="mt-3 text-sm text-slate-400">
                  {tool.description}
                </p>
                <p className="mt-5 inline-flex items-center text-sm font-medium text-cyan-400">
                Learn More
                <ArrowUpRight className="ml-1 h-4 w-4" />
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}