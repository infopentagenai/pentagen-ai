export default function FAQ() {
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
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-5xl font-bold text-white">
          Frequently Asked Questions
        </h2>

        <p className="mt-4 text-center text-gray-400">
          Everything you need to know about Pentagen AI.
        </p>

        <div className="mt-16 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-xl font-semibold text-white">
                {faq.question}
              </h3>

              <p className="mt-3 text-gray-400">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}