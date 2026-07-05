export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Content Creator",
      review:
        "Pentagen AI has completely transformed my workflow. Everything is available in one place.",
    },
    {
      name: "Sarah Johnson",
      role: "Digital Marketer",
      review:
        "The AI image and chat tools are incredibly fast. It saves me hours every week.",
    },
    {
      name: "Aman Verma",
      role: "Startup Founder",
      review:
        "The platform looks premium and performs amazingly. Highly recommended!",
    },
  ];

  return (
    <section className="bg-[#030617] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-5xl font-bold text-white">
          What Our Users Say
        </h2>

        <p className="mt-4 text-center text-gray-400">
          Trusted by creators, developers and businesses worldwide.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              <div className="mb-6 text-4xl">⭐⭐⭐⭐⭐</div>

              <p className="text-gray-300 italic">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white">
                  {item.name}
                </h3>

                <p className="text-gray-400">
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