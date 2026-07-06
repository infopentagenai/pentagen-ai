"use client";

import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950">
      {/* Background Glow */}
      <div className="absolute left-20 top-32 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute right-10 bottom-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]" />

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
              Trusted by <span className="font-semibold text-white">100,000+</span> creators
            </p>
          </div>
        </motion.div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-5">
          {[
            "🤖 AI Chat",
            "🎨 AI Image",
            "🎥 AI Video",
            "🎙 AI Voice",
            "💻 AI Code",
            "📄 AI Writer",
          ].map((tool) => (
            <div
              key={tool}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-cyan-400"
            >
              <h3 className="text-lg font-semibold text-white">{tool}</h3>

              <p className="mt-3 text-sm text-slate-400">
                Professional AI tools for creators and businesses.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}