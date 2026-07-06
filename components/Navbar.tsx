"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
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

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          <a href="#home" className="transition hover:text-cyan-400">
            Home
          </a>

          <a href="#features" className="transition hover:text-cyan-400">
            Features
          </a>

          <a href="#pricing" className="transition hover:text-cyan-400">
            Pricing
          </a>

          <a href="#testimonials" className="transition hover:text-cyan-400">
           Testimonials
          </a>

          <a href="#faq" className="transition hover:text-cyan-400">
            FAQ
          </a>

          <a href="#contact" className="transition hover:text-cyan-400">
            Contact
          </a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-xl border border-slate-700 px-5 py-2 text-slate-300 transition hover:border-cyan-400 hover:text-white">
            Login
          </button>

          <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:scale-105">
            Get Started
          </button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-xl border border-slate-700 p-2 text-white transition hover:border-cyan-400 md:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <nav className="flex flex-col px-6 py-6">

            <a
              href="#home"
              className="py-3 text-slate-300 transition hover:text-cyan-400"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>

            <a
              href="#features"
              className="py-3 text-slate-300 transition hover:text-cyan-400"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </a>

            <a
              href="#pricing"
              className="py-3 text-slate-300 transition hover:text-cyan-400"
              onClick={() => setMenuOpen(false)}
            >
              Pricing
            </a>

            <a
            href="#testimonials"
            className="py-3 text-slate-300 transition hover:text-cyan-400"
            onClick={() => setMenuOpen(false)}
            >
             Testimonials
            </a>

            <a
              href="#faq"
              className="py-3 text-slate-300 transition hover:text-cyan-400"
              onClick={() => setMenuOpen(false)}
            >
              FAQ
            </a>

            <a
              href="#contact"
              className="py-3 text-slate-300 transition hover:text-cyan-400"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>

            <button className="mt-6 rounded-xl border border-slate-700 py-3 text-white">
              Login
            </button>

            <button className="mt-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold text-white">
              Get Started
            </button>

          </nav>
        </div>
      )}
    </header>
  );
}