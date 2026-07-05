import {
  ShieldCheck,
  Zap,
  Sparkles,
  Globe,
} from "lucide-react";

export default function WhyChoose() {
  const items = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Generate AI content in seconds with optimized performance.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Platform",
      description: "Your data stays safe with enterprise-grade security.",
    },
    {
      icon: Sparkles,
      title: "Premium AI Models",
      description: "Access powerful AI tools from one dashboard.",
    },
    {
      icon: Globe,
      title: "Available Anywhere",
      description: "Use Pentagen AI on desktop, tablet and mobile.",
    },
  ];

  return (
    <section className="bg-[#030617] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-5xl font-bold text-white">
          Why Choose Pentagen AI?
        </h2>

        <p className="mt-4 text-center text-gray-400">
          Everything you need to create faster with AI.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
              >
                <div className="mb-6 inline-flex rounded-xl bg-blue-600/20 p-4">
                  <Icon className="h-8 w-8 text-blue-500" />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}