"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Pentagen AI?",
      answer:
        "Pentagen AI is an all-in-one platform for AI Chat, Image, Video, Voice and Code generation.",
    },
    {
      question: "Is there a free plan?",
      answer:
        "Yes. You can start with the free plan and upgrade whenever you need more features.",
    },
    {
      question: "Which AI tools are included?",
      answer:
        "AI Chat, AI Image Generator, AI Video Generator, AI Voice Generator and AI Code Assistant.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes. You can upgrade, downgrade or cancel your subscription at any time.",
    },
  ];

  return (
    <section
  id="faq"
  className="scroll-mt-24 bg-slate-950 py-28"
>
      <div className="mx-auto max-w-4xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
            FAQ
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white md:text-6xl">
            Frequently Asked
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}Questions
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Everything you need to know before getting started with Pentagen AI.
          </p>

        </div>

        {/* Accordion */}

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => {

            const isOpen = openIndex === index;

            return (

              <div
                key={faq.question}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur transition-all duration-300 hover:border-cyan-400"
              >

                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left"
                >

                  <h3 className="text-lg font-semibold text-white">
                    {faq.question}
                  </h3>

                  {isOpen ? (
                    <ChevronUp className="text-cyan-400" />
                  ) : (
                    <ChevronDown className="text-slate-400" />
                  )}

                </button>

                {isOpen && (

                  <div className="px-6 pb-6">

                    <p className="leading-7 text-slate-400">
                      {faq.answer}
                    </p>

                  </div>

                )}

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}