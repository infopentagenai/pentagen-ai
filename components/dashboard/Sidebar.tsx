"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MessageSquare,
  Image,
  Video,
  Mic,
  Code2,
  FileText,
  CreditCard,
  Settings,
  Sparkles,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "AI Chat",
    icon: MessageSquare,
    href: "/chat",
  },
  {
    title: "AI Image",
    icon: Image,
    href: "/image",
  },
  {
    title: "AI Video",
    icon: Video,
    href: "/video",
  },
  {
    title: "AI Voice",
    icon: Mic,
    href: "/voice",
  },
  {
    title: "AI Code",
    icon: Code2,
    href: "/code",
  },
  {
    title: "AI Writer",
    icon: FileText,
    href: "/writer",
  },
  {
    title: "Billing",
    icon: CreditCard,
    href: "/billing",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden h-screen w-72 flex-col border-r border-slate-800 bg-slate-950 lg:flex">

      {/* Logo */}

      <div className="border-b border-slate-800 p-6">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-xl font-bold text-white">
            P
          </div>

          <div>

            <h1 className="text-xl font-bold text-white">
              Pentagen AI
            </h1>

            <p className="text-sm text-slate-400">
              AI Workspace
            </p>

          </div>

        </div>

      </div>

      {/* Menu */}

      <nav className="flex-1 space-y-2 p-5">

        {menuItems.map((item) => {

          const Icon = item.icon;

          const active = pathname === item.href;

          return (

            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-300 ${
                active
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
                  : "text-slate-300 hover:bg-slate-900 hover:text-cyan-400"
              }`}
            >
              <Icon size={20} />

              <span>{item.title}</span>

            </Link>

          );

        })}

      </nav>

      {/* Upgrade Card */}

      <div className="p-5">

        <div className="rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700 p-5">

          <Sparkles className="text-white" size={28} />

          <h2 className="mt-5 text-lg font-bold text-white">
            Upgrade to Pro
          </h2>

          <p className="mt-2 text-sm text-cyan-100">
            Unlock unlimited AI generations,
            premium models and faster responses.
          </p>

          <button className="mt-6 w-full rounded-xl bg-white py-3 font-semibold text-slate-900 transition hover:scale-105">
            Upgrade Now
          </button>

        </div>

      </div>

    </aside>
  );
}