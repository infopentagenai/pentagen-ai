import { Check, Sparkles } from "lucide-react";

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
    <section className="bg-[#020617] py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
            Pricing
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white md:text-6xl">
            Simple &
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}Transparent
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Choose the perfect AI plan for individuals,
            creators and growing businesses.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {plans.map((plan) => (

            <div
              key={plan.name}
              className={`group relative rounded-3xl border p-8 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
              ${
                plan.popular
                  ? "border-cyan-400 bg-slate-900 shadow-xl"
                  : "border-slate-800 bg-slate-900/70 hover:border-cyan-400"
              }`}
            >

              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">

                  <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 text-sm font-semibold text-white">

                    <Sparkles className="h-4 w-4" />

                    Most Popular

                  </span>

                </div>
              )}

              <h3 className="text-3xl font-bold text-white">
                {plan.name}
              </h3>

              <p className="mt-3 text-slate-400">
                {plan.description}
              </p>

              <div className="mt-8 text-5xl font-extrabold text-white">
                {plan.price}
              </div>

              <ul className="mt-10 space-y-4">

                {plan.features.map((feature) => (

                  <li
                    key={feature}
                    className="flex items-center gap-3 text-slate-300"
                  >

                    <Check className="h-5 w-5 text-cyan-400" />

                    {feature}

                  </li>

                ))}

              </ul>

              <button
                className={`mt-10 w-full rounded-xl py-4 font-semibold transition-all duration-300
                ${
                  plan.popular
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:scale-105"
                    : "border border-slate-700 text-white hover:border-cyan-400 hover:bg-slate-800"
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