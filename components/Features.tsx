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
      desc: "Create AI videos in just a few clicks.",
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
  ];

  return (
    <section className="bg-[#050816] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-white">
          Everything You Need
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-16">
          Five powerful AI tools in one platform.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#0B1224] border border-gray-800 rounded-2xl p-8 hover:border-blue-500 transition"
            >
              <div className="text-5xl">{feature.icon}</div>

              <h3 className="text-2xl font-semibold text-white mt-6">
                {feature.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}