import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section
  id="contact"
  className="relative overflow-hidden bg-slate-950 py-28"
>

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl px-6">

        <div className="rounded-[32px] border border-cyan-500/20 bg-gradient-to-br from-slate-900 to-slate-950 p-12 text-center shadow-[0_0_60px_rgba(34,211,238,0.15)] backdrop-blur-xl">

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
            Start Today
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white md:text-6xl">
            Build the Future with
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Pentagen AI
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Access AI Chat, Image Generation, Video Creation, Voice Cloning,
            Coding Assistant and much more—all from one powerful platform.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <button className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            <button className="rounded-xl border border-slate-700 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:bg-slate-900">
              Book a Demo
            </button>

          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-10">

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                100K+
              </h3>
              <p className="text-slate-400">
                Active Users
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                25+
              </h3>
              <p className="text-slate-400">
                AI Tools
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                99.9%
              </h3>
              <p className="text-slate-400">
                Uptime
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}