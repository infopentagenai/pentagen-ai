import {
  Bot,
  Image,
  Video,
  Mic,
  Code2,
  FileText,
  ArrowRight,
} from "lucide-react";

export default function AITools() {
  const tools = [
    {
      icon: Bot,
      title: "AI Chat",
      description: "Ask questions, brainstorm ideas and solve problems instantly.",
    },
    {
      icon: Image,
      title: "AI Image",
      description: "Generate stunning AI images in seconds.",
    },
    {
      icon: Video,
      title: "AI Video",
      description: "Turn prompts into engaging AI videos.",
    },
    {
      icon: Mic,
      title: "AI Voice",
      description: "Create natural voiceovers and voice clones.",
    },
    {
      icon: Code2,
      title: "AI Code",
      description: "Generate, debug and optimize code faster.",
    },
    {
      icon: FileText,
      title: "AI Writer",
      description: "Write blogs, emails and marketing content effortlessly.",
    },
  ];

  return (
    <section className="bg-slate-950 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            AI Suite
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Everything You Need,
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}One Platform
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Powerful AI tools designed for creators, developers, students and businesses.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <div
                key={tool.title}
                className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {tool.title}
                </h3>

                <p className="mt-4 text-slate-400">
                  {tool.description}
                </p>

                <button className="mt-8 flex items-center gap-2 font-semibold text-cyan-400 transition group-hover:gap-3">
                  Explore
                  <ArrowRight size={18} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}