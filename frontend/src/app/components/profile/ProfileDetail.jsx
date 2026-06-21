"use client";

import { useState } from "react";
import {
  X,
  Heart,
  MessageCircle,
  Share2,
  Smile,
  Bookmark,
} from "lucide-react";

export default function ProfileDetailModal({ open, onClose, data }) {
  const [showComments, setShowComments] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  if (!open) return null;

  // ---------------- DEMO DESCRIPTION ----------------
  const description =
    data?.description ||
    `This is a demo post showing how "More" expands only the text, not the image.

It simulates a real social media post where users write long content like project updates, thoughts, or technical explanations.

The UI should remain stable while only the text area expands smoothly.`;

  // ---------------- DEMO COMMENTS ----------------
  const comments = [
    {
      id: 1,
      name: "Aman",
      image: "/assets/user1.jpg",
      text: "This UI is fire 🔥",
    },
    {
      id: 2,
      name: "Neha",
      image: "/assets/user2.jpg",
      text: "Very clean design 💯",
    },
    {
      id: 3,
      name: "Rohit",
      image: "/assets/user3.jpg",
      text: "Looks professional 👌",
    },
  ];

  return (
    <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-3">

      {/* CARD */}
      <div className="w-full max-w-2xl max-h-[95vh] overflow-y-auto bg-white dark:bg-gray-900 text-black dark:text-white rounded-xl relative">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <X size={18} />
        </button>

        {/* ================= TITLE + DESCRIPTION ================= */}
        <div className="p-4">

          <h2 className="text-xl font-bold">
            {data?.title || "Untitled Post"}
          </h2>

          {/* DESCRIPTION (ONLY THIS EXPANDS) */}
          <p
            className={`
              text-sm text-gray-500 mt-3 leading-relaxed
              ${isExpanded ? "" : "line-clamp-2"}
            `}
          >
            {description}
          </p>

          {/* MORE BUTTON */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-blue-600 text-sm hover:underline"
          >
            {isExpanded ? "Show less" : "More"}
          </button>
        </div>

        {/* ================= IMAGE (FIXED SIZE) ================= */}
        <div className="w-full h-56 bg-gray-200 dark:bg-gray-800">
          {data?.image && (
            <img
              src={data.image}
              alt="post"
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* ================= ACTIONS ================= */}
        <div className="p-4 flex items-center justify-between text-gray-600 dark:text-gray-300">

          <div className="flex items-center gap-5">

            <button className="flex items-center gap-2 hover:text-red-500">
              <Heart size={18} /> Like
            </button>

            <button
              onClick={() => setShowComments(!showComments)}
              className="flex items-center gap-2 hover:text-blue-500"
            >
              <MessageCircle size={18} /> Comment
            </button>

            <button className="flex items-center gap-2 hover:text-green-500">
              <Share2 size={18} /> Share
            </button>

          </div>

          <button className="hover:text-yellow-500">
            <Bookmark size={18} />
          </button>
        </div>

        {/* ================= COMMENTS ================= */}
        {showComments && (
          <div className="border-t border-gray-200 dark:border-gray-700 p-4">

            {/* INPUT */}
            <div className="flex items-center gap-2 mb-4">

              <input
                placeholder="Write a comment..."
                className="flex-1 px-3 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-sm outline-none"
              />

              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                <Smile size={18} />
              </button>

            </div>

            {/* COMMENTS LIST */}
            <div className="space-y-4">

              {comments.map((c) => (
                <div key={c.id} className="flex gap-3">

                  <img
                    src={c.image}
                    className="w-9 h-9 rounded-full object-cover"
                  />

                  <div>
                    <p className="text-sm font-semibold">{c.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {c.text}
                    </p>
                  </div>

                </div>
              ))}

            </div>
          </div>
        )}

      </div>
    </div>
  );
}