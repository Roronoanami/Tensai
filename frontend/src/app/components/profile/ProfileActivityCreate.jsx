"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function ProfileActivityCreate({ open, onClose }) {
  const [type, setType] = useState("post");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-3">

      {/* CARD */}
      <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 text-black dark:text-white rounded-xl relative p-5">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <X size={18} />
        </button>

        {/* HEADER */}
        <h2 className="text-xl font-bold mb-4">
          Your Activity
        </h2>

        {/* TYPE SELECT */}
        <div className="flex gap-3 mb-5">
          {["post", "project", "skill"].map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`px-4 py-2 rounded-full text-sm border transition ${
                type === t
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-300 dark:border-gray-700"
              }`}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>

        {/* TITLE */}
        <input
          placeholder="Title"
          className="w-full p-2 mb-3 rounded bg-gray-100 dark:bg-gray-800"
        />

        {/* IMAGE / VIDEO */}
        {(type === "post" || type === "project") && (
          <input
            placeholder="Image / Video URL"
            className="w-full p-2 mb-3 rounded bg-gray-100 dark:bg-gray-800"
          />
        )}

        {/* DESCRIPTION */}
        {(type === "post" || type === "project") && (
          <textarea
            placeholder="Description"
            className="w-full h-24 p-2 mb-3 rounded bg-gray-100 dark:bg-gray-800"
          />
        )}

        {/* LINKS */}
        {type === "project" && (
          <input
            placeholder="GitHub / Live Link"
            className="w-full p-2 mb-3 rounded bg-gray-100 dark:bg-gray-800"
          />
        )}

        {/* SKILL INPUT */}
        {type === "skill" && (
          <input
            placeholder="Skill name (e.g. React, Java)"
            className="w-full p-2 mb-3 rounded bg-gray-100 dark:bg-gray-800"
          />
        )}

        {/* ACTIONS */}
        <div className="flex gap-3 mt-5">

          <button
            onClick={onClose}
            className="flex-1 py-2 rounded-full border text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Cancel
          </button>

          <button className="flex-1 py-2 rounded-full bg-blue-600 text-white text-sm hover:bg-blue-700">
            Publish
          </button>

        </div>

      </div>
    </div>
  );
}