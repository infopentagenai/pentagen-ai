export default function Hero() {
  return (
    <section className="min-h-screen bg-[#030617] flex flex-col items-center justify-center text-center px-6">

      <span className="border border-blue-500 rounded-full px-6 py-2 text-blue-400 mb-8">
        🚀 Next Generation AI Platform
      </span>

      <h1 className="text-6xl md:text-8xl font-extrabold leading-tight">
        Create Anything with
        <br />
        <span className="text-blue-500">
          AI
        </span>
      </h1>

      <p className="mt-8 max-w-3xl text-gray-400 text-xl">
        Chat, Generate Images, Create Videos, Clone Voice and build content
        from one powerful AI platform.
      </p>

      <div className="flex gap-6 mt-10">

        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg">
          Get Started
        </button>

        <button className="border border-gray-600 hover:border-white px-8 py-4 rounded-xl text-lg">
          Watch Demo
        </button>

      </div>

    </section>
  );
}