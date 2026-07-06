import {
  Mail,
  Globe,
  Info,
  Shield,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Pentagen AI
              </span>
            </h2>

            <p className="mt-5 max-w-md leading-7 text-slate-400">
              Pentagen AI is your all-in-one AI platform for Chat,
              Images, Videos, Voice, Code and Content Creation.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="rounded-xl border border-slate-800 p-3 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <Globe size={20} />
              </a>

              <a
                href="#"
                className="rounded-xl border border-slate-800 p-3 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <Mail size={20} />
              </a>

              <a
                href="#"
                className="rounded-xl border border-slate-800 p-3 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <Info size={20} />
              </a>

              <a
                href="#"
                className="rounded-xl border border-slate-800 p-3 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <Shield size={20} />
              </a>

            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Product
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#" className="hover:text-cyan-400">
                  AI Chat
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400">
                  AI Image
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400">
                  AI Video
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#" className="hover:text-cyan-400">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Legal
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#" className="hover:text-cyan-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400">
                  Support
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 md:flex-row">

          <p className="text-sm text-slate-500">
            © 2026 Pentagen AI. All rights reserved.
          </p>

          <p className="text-sm text-slate-500">
            Built with ❤️ using Next.js + Tailwind CSS
          </p>

        </div>
      </div>
    </footer>
  );
}