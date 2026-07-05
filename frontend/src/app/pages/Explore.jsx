

// version2 

// "use client";

// import { useState, useRef } from "react";
// import Image from "next/image";
// import { Search, X } from "lucide-react";

// const CARD_DATA = [
//   { id: 1, src: "/assets/ankur.jpg", user: "alex.creates", likes: "12.4K", isVideo: false, tall: true },
//   { id: 2, src: "/assets/girl.jpg", user: "mia.lens", likes: "8.1K", isVideo: false, tall: false },
//   { id: 3, src: "/assets/user1.jpg", user: "the.wanderer", likes: "21K", isVideo: false, tall: false },
//   { id: 4, src: "/assets/user2.jpg", user: "urban.shots", likes: "5.6K", isVideo: true, tall: true },
//   { id: 5, src: "/assets/user3.jpg", user: "color.theory", likes: "3.9K", isVideo: false, tall: false },
//   { id: 6, src: "/assets/user4.jpg", user: "daily.frame", likes: "17K", isVideo: false, tall: false },
// ];
// function Card({ item }) {
//   return (
//     <div className="relative aspect-square overflow-hidden bg-gray-200 dark:bg-gray-900">

//       <Image
//         src={item.src}
//         alt={item.user}
//         fill
//         className="object-cover hover:scale-105 transition-transform duration-300"
//       />

//       {item.isVideo && (
//         <div className="absolute top-1 right-1 bg-black/60 text-white text-[10px] px-1 rounded">
//           ▶
//         </div>
//       )}

//       <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition flex items-center justify-center text-white text-sm font-medium">
//         ❤️ {item.likes}
//       </div>

//     </div>
//   );
// }
// export default function SearchPage() {
//   const [query, setQuery] = useState("");
//   const [focused, setFocused] = useState(false);
//   const inputRef = useRef(null);

//   const filtered = query.trim()
//     ? CARD_DATA.filter((c) =>
//         c.user.toLowerCase().includes(query.toLowerCase())
//       )
//     : CARD_DATA;

//   return (
//     <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-4 pb-20">

//       {/* SEARCH BAR */}
//       <div className="relative mt-4 mb-4">
        
//         {/* ICON */}
//         <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
//           <Search size={18} />
//         </div>

//         <input
//           ref={inputRef}
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           onFocus={() => setFocused(true)}
//           onBlur={() => setFocused(false)}
//           placeholder="Search"
//           className="w-full pl-10 pr-10 py-2 rounded-xl
//                      bg-gray-100 dark:bg-gray-900
//                      border border-gray-200 dark:border-gray-800
//                      outline-none focus:border-black dark:focus:border-white"
//         />

//         {/* CLEAR */}
//         {query && (
//           <button
//             onClick={() => {
//               setQuery("");
//               inputRef.current?.focus();
//             }}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
//           >
//             <X size={16} />
//           </button>
//         )}
//       </div>

//       {/* GRID */}
//       <div className="grid grid-cols-3 gap-[2px] md:gap-[2px]">
//   {filtered.map((item) => (
//     <Card key={item.id} item={item} />
//   ))}
// </div>

//       {/* EMPTY */}
//       {filtered.length === 0 && (
//         <div className="text-center mt-20 text-gray-500">
//           No results found
//         </div>
//       )}
//     </div>
//   );
// }



"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Search, X } from "lucide-react";

const CARD_DATA = [
  { id: 1, src: "/assets/ankur.jpg", user: "alex.creates", likes: "12.4K", type: "post" },
  { id: 2, src: "/assets/girl.jpg", user: "mia.lens", likes: "8.1K", type: "people" },
  { id: 3, src: "/assets/user1.jpg", user: "the.wanderer", likes: "21K", type: "project" },
  { id: 4, src: "/assets/user2.jpg", user: "urban.shots", likes: "5.6K", type: "post" },
  { id: 5, src: "/assets/user3.jpg", user: "color.theory", likes: "3.9K", type: "people" },
  { id: 6, src: "/assets/user4.jpg", user: "daily.frame", likes: "17K", type: "project" },
];

function Card({ item }) {
  return (
    <div className="relative aspect-square overflow-hidden bg-gray-200 dark:bg-gray-900">
      <Image
        src={item.src}
        alt={item.user}
        fill
        className="object-cover hover:scale-105 transition-transform duration-300"
      />

      <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition flex items-center justify-center text-white text-sm font-medium">
        ❤️ {item.likes}
      </div>
    </div>
  );
}

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [tab, setTab] = useState("all");
  const inputRef = useRef(null);

  const filtered = CARD_DATA.filter((item) => {
    const matchText = item.user.toLowerCase().includes(query.toLowerCase());
    const matchTab = tab === "all" ? true : item.type === tab;
    return matchText && matchTab;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-2 pb-24">

      {/* SEARCH BAR */}
      <div className="relative mt-4 mb-3">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
          <Search size={18} />
        </div>

        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Search posts, people, projects..."
          className="w-full pl-10 pr-10 py-2 rounded-xl
                     bg-gray-100 dark:bg-gray-900
                     border border-gray-200 dark:border-gray-800
                     outline-none focus:border-black dark:focus:border-white"
        />

        {query && (
          <button
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* FILTER TABS */}
      <div className="flex gap-2 mb-3 px-1">
        {["people", "posts", "project"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-3 py-1 rounded-full text-xs border transition
              ${tab === t
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-gray-100 dark:bg-gray-900 border-gray-300 dark:border-gray-800"
              }`}
          >
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      {/* GRID (STRICT 3 COLUMN SMALL GAP) */}
      <div className="grid grid-cols-3 gap-[2px]">
        {filtered.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

      {/* EMPTY STATE */}
      {filtered.length === 0 && (
        <div className="text-center mt-20 text-gray-500">
          No results found
        </div>
      )}
    </div>
  );
}