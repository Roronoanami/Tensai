"use client";

import Image from "next/image";

export default function SearchActivityCard({ activity, onSelect }) {
  const image = activity.imageUrl || "/assets/default.jpg";

  return (
    <button
      onClick={() => onSelect(activity)}
      className="w-full flex items-start gap-4 p-3 rounded-xl
                 hover:bg-gray-100 dark:hover:bg-gray-900
                 transition text-left"
    >
      {/* Image */}
      <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800 flex-shrink-0">
        <Image
          src={image}
          alt={activity.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">

        {/* Title */}
        <h3 className="font-semibold text-base truncate">
          {activity.title}
        </h3>

        {/* Username */}
        <p className="text-sm text-gray-500 mt-1">
          @{activity.username}
        </p>

        {/* Tech Stack */}
        {activity.techStack && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
            {activity.techStack}
          </p>
        )}

        {/* Type Badge */}
        <div className="mt-3">
          <span
            className={`px-2 py-1 text-xs rounded-full ${
              activity.type === "project"
                ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                : "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
            }`}
          >
            {activity.type.toUpperCase()}
          </span>
        </div>

      </div>
    </button>
  );
}