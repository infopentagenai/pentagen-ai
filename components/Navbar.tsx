export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-500/30">
            P
          </div>

          <div>
            <h1 className="text-xl font-extrabold tracking-wide text-white">
              Pentagen
            </h1>

            <p className="-mt-1 text-xs uppercase tracking-[0.3em] text-blue-400">
              AI PLATFORM
            </p>
          </div>
        </a>

        {/* Menu */}
        <nav className="hidden gap-8 text-sm font-medium text-slate-300 md:flex">
          <a href="#" className="transition hover:text-white">
            Home
          </a>

          <a href="#" className="transition hover:text-cyan-400">
            Features
          </a>

          <a href="#" className="transition hover:text-cyan-400">
            Pricing
          </a>

          <a href="#" className="transition hover:text-cyan-400">
            Contact
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button className="rounded-xl border border-slate-700 px-5 py-2 text-slate-300 transition hover:border-blue-500 hover:text-white">
            Login
          </button>

          <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:scale-105">
            Get Started
          </button>
        </div>

      </div>
    </header>
  );
}