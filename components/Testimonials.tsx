import { Quote, Star } from "lucide-react";

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

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
            Testimonials
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white md:text-6xl">
            Loved by
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}Creators Worldwide
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Thousands of creators, developers and businesses trust Pentagen AI every day.
          </p>

        </div>

        {/* Stats */}

        <div className="mt-12 flex flex-wrap items-center justify-center gap-10 text-center">

          <div>
            <h3 className="text-3xl font-bold text-cyan-400">10K+</h3>
            <p className="text-slate-400">Happy Customers</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-cyan-400">4.9/5</h3>
            <p className="text-slate-400">Average Rating</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-cyan-400">99%</h3>
            <p className="text-slate-400">Positive Reviews</p>
          </div>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]"
            >

              <div className="flex items-center justify-between">

                <div className="flex gap-1">

                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}

                </div>

                <Quote className="h-8 w-8 text-cyan-400" />

              </div>

              <p className="mt-8 leading-8 text-slate-300">
                "{item.review}"
              </p>

              <div className="mt-10 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-xl font-bold text-white">
                  {item.name.charAt(0)}
                </div>

                <div>

                  <h3 className="text-lg font-bold text-white">
                    {item.name}
                  </h3>

                  <p className="text-slate-400">
                    {item.role}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}