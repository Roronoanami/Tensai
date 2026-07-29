


// verion   advance best   

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Info, ArrowLeft, Settings, LogOut, MessageCircle } from "lucide-react";

// export default function CommunityList({
//   community,
//   members,
//   onBack,
//   onOpenChat,
// })

// {
//   return (
//     <div className="flex h-full flex-col bg-white dark:bg-black text-black dark:text-white">

//       {/* HEADER */}
//       <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200 dark:border-gray-800">

//         <div className="flex items-center gap-2">
//           <button
//             onClick={onBack}
//             className="md:hidden rounded-md p-1 hover:bg-gray-100 dark:hover:bg-gray-800"
//           >
//             <ArrowLeft size={20} />
//           </button>

//           <h1 className="text-lg font-semibold">Community</h1>
//         </div>
//         <button><Info /></button>
//         {/* CHAT ICON (ONLY MOBILE) */}
//         <button
//           onClick={onOpenChat}
//           className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
//         >
//           <MessageCircle size={20} />
//         </button>

//       </div>

//       {/* MEMBERS */}
//       <div className="flex-1 overflow-y-auto">
//         {members.map((member) => (
//           <div
//             key={member.id}
//             className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-900"
//           >
//             <Image
//               src={member.image}
//               alt={member.name}
//               width={44}
//               height={44}
//               className="rounded-full object-cover"
//             />
//             <span className="text-sm font-medium">{member.name}</span>
//           </div>
//         ))}
//       </div>

//       {/* BOTTOM */}
//       <div className="border-t border-gray-200 dark:border-gray-800 p-2 pb-20">

//         <Link
//           href="/profile"
//           className="flex items-center gap-3 px-3 py-3 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg"
//         >
//           <Image
//             src={community.ownerImage}
//             width={40}
//             height={40}
//             className="rounded-full"
//             alt="owner"
//           />
//           <span className="text-sm">{community.ownerName}</span>
//         </Link>

//         <button className="flex w-full items-center gap-3 px-3 py-3 hover:bg-gray-100 dark:hover:bg-gray-900">
//           <Settings size={18} />
//           Settings
//         </button>

//         <button className="flex w-full items-center gap-3 px-3 py-3 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-900">
//           <LogOut size={18} />
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// }




// best  advanced versionn


"use client";

import Image from "next/image";
import { Info, Settings, LogOut, MessageCircle } from "lucide-react";

export default function CommunityList({
  community,
  members,
  onOpenChat,
  onOpenInfo,   // ✅ ADD THIS
}) {
  return (
    <div className="flex h-full flex-col bg-white dark:bg-black text-black dark:text-white">

      {/* HEADER */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200 dark:border-gray-800">

        <h1 className="text-lg font-semibold">Community</h1>

        {/* INFO BUTTON - NOW WORKS */}
        <button
          onClick={onOpenInfo}   // ✅ FIX HERE
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Info size={18} />
        </button>

        <button
          onClick={onOpenChat}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <MessageCircle size={20} />
        </button>
      </div>

      {/* MEMBERS */}
      <div className="flex-1 overflow-y-auto">
        {/* {members.map((member) => (
          <div
            key={member.id}
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-900"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={44}
              height={44}
              className="rounded-full"
            />
            <span className="text-sm">{member.name}</span>
          </div>
        ))} */}

        
        {members.map((member) => (
  <div
    key={member.userId}
    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer"
  >
    <Image
      src={
        member.profileImage
        ||
        "/assets/user.png"
      }
      alt={member.username}
      width={44}
      height={44}
      className="rounded-full object-cover"
    />

    <div>
      <p className="text-sm font-medium">
        {
          member.firstName
          ||
          member.username
        }
        {
          member.lastName &&
          ` ${member.lastName}`
        }
      </p>
      <p className="text-xs opacity-60">
        {member.role}
      </p>
    </div>
  </div>
))}
      </div>

      {/* BOTTOM */}
      {/* <div className="border-t p-2">
        <div className="px-3 py-3 flex items-center gap-3">
          <Image
            src={community.ownerImage}
            width={40}
            height={40}
            className="rounded-full"
            alt="owner"
          />
          <span>{community.ownerName}</span>
        </div>

        <button className="flex gap-2 px-3 py-3">
          <Settings size={18} /> Settings
        </button>

        <button className="flex gap-2 px-3 py-3 text-red-500">
          <LogOut size={18} /> Logout
        </button>
      </div> */}


      {/* BOTTOM OWNER */}
<div className="border-t p-2">

{
  members
    .filter(
      (member)=> member.role === "OWNER"
    )
    .map((owner)=>(
      
      <div
        key={owner.userId}
        className="px-3 py-3 flex items-center gap-3"
      >

        <Image
          src={
            owner.profileImage &&
            owner.profileImage.trim() !== ""
            ? owner.profileImage
            : "/assets/user.png"
          }
          width={40}
          height={40}
          className="rounded-full object-cover"
          alt="owner"
        />


        <div>

          <p className="text-sm font-medium">
            {owner.firstName}
            {
              owner.lastName &&
              ` ${owner.lastName}`
            }
          </p>

          <p className="text-xs opacity-60">
            Owner
          </p>

        </div>

      </div>

  ))
}


<button className="flex gap-2 px-3 py-3">
  <Settings size={18} /> Settings
</button>


<button className="flex gap-2 px-3 py-3 text-red-500">
  <LogOut size={18} /> Logout
</button>


</div>
    </div>
  );
}