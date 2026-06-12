

// veriosn    5



// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { ArrowLeft, Settings, LogOut } from "lucide-react";

// export default function CommunityList({
//   community,
//   members,
//   onBack,
// }) {
//   return (
//     <div className="flex h-full flex-col bg-white dark:bg-black text-black dark:text-white">
//       {/* Header */}
//       <div className="h-16 flex items-center gap-3 px-4 border-b border-gray-200 dark:border-gray-800">
//         <button
//           onClick={onBack}
//           className="rounded-md p-1 hover:bg-gray-100 dark:hover:bg-gray-800"
//         >
//           <ArrowLeft size={20} />
//         </button>

//         {/* Always show "Community" */}
//         <h1 className="truncate text-lg font-semibold">
//           Community
//         </h1>
//       </div>

//       {/* Community Members */}
//       <div className="flex-1 overflow-y-auto">
//         {members.map((member) => (
//           <button
//             key={member.id}
//             className="flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-gray-100 dark:hover:bg-gray-900"
//           >
//             <Image
//               src={member.image}
//               alt={member.name}
//               width={44}
//               height={44}
//               className="rounded-full object-cover"
//             />

//             <div className="min-w-0">
//               <p className="truncate text-sm font-medium">
//                 {member.name}
//               </p>
//             </div>
//           </button>
//         ))}
//       </div>

//       {/* Bottom Section */}
//       <div className="border-t border-gray-200 dark:border-gray-800 p-2">
//         {/* Community Owner (backend later) */}
//         <Link
//           href="/profile"
//           className="flex items-center gap-3 rounded-lg px-3 py-3 transition hover:bg-gray-100 dark:hover:bg-gray-900"
//         >
//           <Image
//             src={community.ownerImage}
//             alt={community.ownerName}
//             width={40}
//             height={40}
//             className="rounded-full object-cover"
//           />

//           <span className="text-sm font-medium">
//             {community.ownerName}
//           </span>
//         </Link>

//         {/* Settings */}
//         <button className="flex w-full items-center gap-3 rounded-lg px-3 py-3 transition hover:bg-gray-100 dark:hover:bg-gray-900">
//           <Settings size={20} />
//           <span className="text-sm font-medium">
//             Settings
//           </span>
//         </button>

//         {/* Logout */}
//         <button className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-red-500 transition hover:bg-gray-100 dark:hover:bg-gray-900">
//           <LogOut size={20} />
//           <span className="text-sm font-medium">
//             Logout
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// }




// verion   advance

"use client";

import Image from "next/image";
import Link from "next/link";
import { Info, ArrowLeft, Settings, LogOut, MessageCircle } from "lucide-react";

export default function CommunityList({
  community,
  members,
  onBack,
  onOpenChat,
})

{
  return (
    <div className="flex h-full flex-col bg-white dark:bg-black text-black dark:text-white">

      {/* HEADER */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200 dark:border-gray-800">

        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            className="md:hidden rounded-md p-1 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <ArrowLeft size={20} />
          </button>

          <h1 className="text-lg font-semibold">Community</h1>
        </div>
        <button><Info /></button>
        {/* CHAT ICON (ONLY MOBILE) */}
        <button
          onClick={onOpenChat}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <MessageCircle size={20} />
        </button>

      </div>

      {/* MEMBERS */}
      <div className="flex-1 overflow-y-auto">
        {members.map((member) => (
          <div
            key={member.id}
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-900"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={44}
              height={44}
              className="rounded-full object-cover"
            />
            <span className="text-sm font-medium">{member.name}</span>
          </div>
        ))}
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-200 dark:border-gray-800 p-2 pb-20">

        <Link
          href="/profile"
          className="flex items-center gap-3 px-3 py-3 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg"
        >
          <Image
            src={community.ownerImage}
            width={40}
            height={40}
            className="rounded-full"
            alt="owner"
          />
          <span className="text-sm">{community.ownerName}</span>
        </Link>

        <button className="flex w-full items-center gap-3 px-3 py-3 hover:bg-gray-100 dark:hover:bg-gray-900">
          <Settings size={18} />
          Settings
        </button>

        <button className="flex w-full items-center gap-3 px-3 py-3 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-900">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
}