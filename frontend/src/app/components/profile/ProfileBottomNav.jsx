"use client";

import { Home, Search, Bookmark } from "lucide-react";
import Link from "next/link";

function Icon({ icon }) {
  return (
    <div className="flex items-center justify-center text-gray-900 dark:text-white">
      {icon}
    </div>
  );
}

export default function ProfileBottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-[9999]
      h-14 flex items-center justify-around
      bg-white border-t border-gray-200
      dark:bg-gray-900 dark:border-gray-800">

      <Link href="/main">
        <Icon icon={<Home size={20} />} />
      </Link>

      <Link href="/search">
        <Icon icon={<Search size={20} />} />
      </Link>

      <Link href="/saved">
        <Icon icon={<Bookmark size={20} />} />
      </Link>

    </nav>
  );
}