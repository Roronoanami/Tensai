"use client";

import Link from "next/link";
import { Home, Search, Send, Bookmark } from "lucide-react";

function Icon({ icon }) {
  return (
    <div className="flex items-center justify-center text-gray-900 dark:text-white">
      {icon}
    </div>
  );
}

export default function CommunityBottomNav({
  onOpenChat,
}) {
  return (
    <nav
      className="
        md:hidden
        fixed bottom-0 left-0 right-0
        z-[9999]
        h-14
        flex items-center justify-around
        bg-white border-t border-gray-200
        dark:bg-gray-900 dark:border-gray-800
      "
    >
      {/* HOME */}
      <Link href="/main">
        <Icon icon={<Home size={20} />} />
      </Link>

      {/* SEARCH */}
      <Link href="/search">
        <Icon icon={<Search size={20} />} />
      </Link>

      {/* CHAT → OPENS COMMUNITY CHAT */}
      <button >
        <Icon icon={<Send size={20} />} />
      </button>

      {/* SAVED (placeholder for now) */}
      <button onClick={() => alert("Saved feature coming soon")}>
        <Icon icon={<Bookmark size={20} />} />
      </button>
    </nav>
  );
}