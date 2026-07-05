export default function Stats() {
  const stats = [
    {
      number: "50+",
      label: "AI Tools",
    },
    {
      number: "100K+",
      label: "Users",
    },
    {
      number: "99.9%",
      label: "Uptime",
    },
    {
      number: "24/7",
      label: "Support",
    },
  ];

  return (
    <section className="bg-[#020617] py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:border-blue-500 hover:scale-105"
            >
              <h2 className="text-4xl font-bold text-blue-500">
                {item.number}
              </h2>

              <p className="mt-3 text-gray-400">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}