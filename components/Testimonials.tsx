import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Content Creator",
      review:
        "Pentagen AI has completely changed the way I work. Everything I need is available in one platform.",
    },
    {
      name: "Sarah Johnson",
      role: "Digital Marketer",
      review:
        "The AI Image and Chat tools are incredibly fast. My productivity has doubled.",
    },
    {
      name: "Aman Verma",
      role: "Startup Founder",
      review:
        "Finally an AI platform that feels premium, powerful and simple to use.",
    },
  ];

  return (
    <section className="bg-[#030617] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Testimonials
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Loved by
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}Creators Worldwide
            </span>
          </h2>

          <p className="mt-6 text-slate-400">
            Thousands of users trust Pentagen AI every day.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-cyan-400"
            >
              <Quote className="h-10 w-10 text-cyan-400" />

              <p className="mt-6 leading-8 text-slate-300">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-white">
                  {item.name}
                </h3>

                <p className="text-slate-400">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}