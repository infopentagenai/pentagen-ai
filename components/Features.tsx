import { ArrowUpRight } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "AI Chat",
      icon: "💬",
      desc: "Ask questions and get intelligent answers instantly.",
    },
    {
      title: "AI Image",
      icon: "🖼️",
      desc: "Generate beautiful AI images from text prompts.",
    },
    {
      title: "AI Video",
      icon: "🎥",
      desc: "Create cinematic AI videos in just a few clicks.",
    },
    {
      title: "AI Voice",
      icon: "🎙️",
      desc: "Generate and clone realistic AI voices.",
    },
    {
      title: "AI Code",
      icon: "💻",
      desc: "Write, debug and optimize code using AI.",
    },
    {
      title: "AI Writer",
      icon: "✍️",
      desc: "Create blogs, emails and documents in seconds.",
    },
  ];

  return (
    <section
  id="features"
  className="bg-[#050816] py-28 px-6"
>
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <div className="text-center">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
            AI Suite
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white md:text-6xl">
            Everything You Need,
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              One Platform
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Powerful AI tools designed for creators, developers,
            students and businesses.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-4xl">
                  {feature.icon}
                </div>

                <ArrowUpRight className="h-5 w-5 text-slate-500 transition group-hover:text-cyan-400" />
              </div>

              <h3 className="text-2xl font-bold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {feature.desc}
              </p>

              <button className="mt-8 inline-flex items-center font-medium text-cyan-400 transition group-hover:translate-x-1">
                Learn More
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}