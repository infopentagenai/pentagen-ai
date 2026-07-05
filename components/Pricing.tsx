import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      description: "Perfect to get started.",
      features: [
        "10 AI Chats/day",
        "5 AI Images/day",
        "Basic AI Models",
        "Community Support",
      ],
      button: "Start Free",
      popular: false,
    },
    {
      name: "Pro",
      price: "₹999/mo",
      description: "Best for creators & professionals.",
      features: [
        "Unlimited AI Chats",
        "Unlimited AI Images",
        "AI Video Generation",
        "Voice Generator",
        "Priority Support",
      ],
      button: "Get Pro",
      popular: true,
    },
    {
      name: "Business",
      price: "Custom",
      description: "For teams and enterprises.",
      features: [
        "Everything in Pro",
        "Unlimited Team Members",
        "Dedicated API Access",
        "Advanced Security",
        "24/7 Premium Support",
      ],
      button: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section className="bg-[#020617] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-5xl font-bold text-white">
          Simple Pricing
        </h2>

        <p className="mt-4 text-center text-gray-400">
          Choose the perfect plan for your AI journey.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-8 transition duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "border-blue-500 bg-slate-900 shadow-2xl shadow-blue-500/20"
                  : "border-slate-800 bg-slate-900"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                  Most Popular
                </span>
              )}

              <h3 className="text-3xl font-bold text-white">
                {plan.name}
              </h3>

              <p className="mt-2 text-gray-400">
                {plan.description}
              </p>

              <div className="mt-6 text-5xl font-bold text-white">
                {plan.price}
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <Check className="h-5 w-5 text-blue-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-10 w-full rounded-xl py-3 font-semibold transition ${
                  plan.popular
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "border border-slate-700 hover:bg-slate-800"
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}