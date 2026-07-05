export default function AITools() {
  const tools = [
    {
      emoji: "🤖",
      title: "AI Chat",
      description: "Chat with an intelligent AI assistant.",
    },
    {
      emoji: "🎨",
      title: "AI Image",
      description: "Generate stunning AI images instantly.",
    },
    {
      emoji: "🎥",
      title: "AI Video",
      description: "Create AI videos from text prompts.",
    },
    {
      emoji: "🎙️",
      title: "AI Voice",
      description: "Clone and generate realistic voices.",
    },
    {
      emoji: "💻",
      title: "AI Code",
      description: "Generate and improve code with AI.",
    },
    {
      emoji: "📄",
      title: "AI Writer",
      description: "Write blogs, emails and marketing content.",
    },
  ];

  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-5xl font-bold text-white">
          AI Tools
        </h2>

        <p className="mt-4 text-center text-gray-400">
          Everything you need in one powerful platform.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <div
              key={tool.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              <div className="text-5xl">{tool.emoji}</div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                {tool.title}
              </h3>

              <p className="mt-4 text-gray-400">
                {tool.description}
              </p>

              <button className="mt-8 rounded-xl bg-blue-600 px-5 py-3 hover:bg-blue-700">
                Coming Soon
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}