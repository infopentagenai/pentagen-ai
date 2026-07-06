"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import FadeIn from "./animations/FadeIn";

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      end: 50,
      suffix: "+",
      label: "AI Tools",
    },
    {
      end: 100,
      suffix: "K+",
      label: "Users",
    },
    {
      end: 99.9,
      suffix: "%",
      decimals: 1,
      label: "Uptime",
    },
    {
      end: 24,
      suffix: "/7",
      label: "Support",
    },
  ];

  return (
    <section className="bg-[#020617] py-20" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((item, index) => (
            <FadeIn key={item.label} delay={index * 0.15}>
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                <h2 className="text-4xl font-bold text-cyan-400">
                  {inView ? (
                    <CountUp
                      end={item.end}
                      duration={2}
                      decimals={item.decimals ?? 0}
                    />
                  ) : (
                    0
                  )}
                  {item.suffix}
                </h2>

                <p className="mt-3 text-slate-400">
                  {item.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}