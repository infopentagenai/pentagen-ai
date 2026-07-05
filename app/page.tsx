import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <span className="inline-block px-4 py-2 rounded-full border border-blue-500 text-blue-400 text-sm mb-6">
            🚀 Next Generation AI Platform
          </span>

          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
            Create Anything with{" "}
            <span className="text-blue-500">AI</span>
          </h1>

          <p className="mt-8 text-xl text-gray-400">
            Chat, Generate Images, Create Videos, Clone Voice and
            build content from one powerful AI platform.
          </p>

          <div className="mt-10 flex justify-center gap-5">
            <button className="bg-blue-600 px-8 py-4 rounded-xl hover:bg-blue-700">
              Get Started
            </button>

            <button className="border border-gray-600 px-8 py-4 rounded-xl hover:bg-gray-800">
              Watch Demo
            </button>
          </div>
        </div>
      </main>
    </>
  );
}