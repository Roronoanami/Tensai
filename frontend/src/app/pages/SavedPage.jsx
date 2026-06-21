"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Search, X } from "lucide-react";
import ProfileDetail from "../components/profile/ProfileDetail"; // adjust path if needed

const SAVED_DATA = [
  { id: 1, src: "/assets/ankur.jpg", user: "alex.creates", likes: "12.4K", type: "post" },
  { id: 2, src: "/assets/girl.jpg", user: "mia.lens", likes: "8.1K", type: "people" },
  { id: 3, src: "/assets/user1.jpg", user: "the.wanderer", likes: "21K", type: "project" },
  { id: 4, src: "/assets/user2.jpg", user: "urban.shots", likes: "5.6K", type: "post" },
  { id: 5, src: "/assets/user3.jpg", user: "color.theory", likes: "3.9K", type: "people" },
  { id: 6, src: "/assets/user4.jpg", user: "daily.frame", likes: "17K", type: "project" },
];

function Card({ item, onClick }) {
  return (
    <div
      onClick={onClick}
      className="relative aspect-square overflow-hidden bg-gray-200 dark:bg-gray-900 rounded-lg cursor-pointer"
    >
      <Image
        src={item.src}
        alt={item.user}
        fill
        className="object-cover hover:scale-105 transition-transform duration-300"
      />

      {/* HOVER */}
      <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition flex items-center justify-center text-white text-sm font-medium">
        ❤️ {item.likes}
      </div>
    </div>
  );
}

export default function SavedPage() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const inputRef = useRef(null);

  const filtered = SAVED_DATA.filter((item) => {
    const matchText = item.user.toLowerCase().includes(query.toLowerCase());
    const matchTab = tab === "all" ? true : item.type === tab;
    return matchText && matchTab;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-3 pb-24">

      {/* TITLE */}
      <h1 className="text-2xl font-bold mt-4 mb-3">
        Saved
      </h1>

      {/* SEARCH */}
      <div className="relative mb-3">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
          <Search size={18} />
        </div>

        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search saved items..."
          className="w-full pl-10 pr-10 py-2 rounded-xl
                     bg-gray-100 dark:bg-gray-900
                     border border-gray-200 dark:border-gray-800
                     outline-none"
        />

        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* FILTERS */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {["all", "post", "people", "project"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-1.5 rounded-full text-xs border transition
              ${tab === t
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-gray-100 dark:bg-gray-900 border-gray-300 dark:border-gray-800"
              }`}
          >
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {filtered.map((item) => (
          <Card
            key={item.id}
            item={item}
            onClick={() => setSelectedItem(item)}
          />
        ))}
      </div>

      {/* EMPTY */}
      {filtered.length === 0 && (
        <div className="text-center mt-20 text-gray-500">
          No saved items found
        </div>
      )}

      {/* MODAL (THIS WAS MISSING) */}
      <ProfileDetail
        open={!!selectedItem}
        data={selectedItem}
        onClose={() => setSelectedItem(null)}
      />

    </div>
  );
}