"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SearchUserCard({ user }) {
  const router = useRouter();

  const profileImage = user.profilePicture || "/assets/default-avatar.png";

  const handleClick = () => {
    router.push(`/profile/${user.id}`);
  };

  return (
    <button
      onClick={handleClick}
      className="w-full flex items-center gap-4 p-3 rounded-xl
                 hover:bg-gray-100 dark:hover:bg-gray-900
                 transition text-left"
    >
      {/* Avatar */}
      <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800 flex-shrink-0">
        <Image
          src={profileImage}
          alt={user.username}
          fill
          className="object-cover"
        />
      </div>

      {/* User Info */}
      <div className="flex-1 min-w-0">

        <h3 className="font-semibold truncate">
          {user.username}
        </h3>

        {user.bio && (
          <p className="text-sm text-gray-500 line-clamp-2">
            {user.bio}
          </p>
        )}

      </div>
    </button>
  );
}