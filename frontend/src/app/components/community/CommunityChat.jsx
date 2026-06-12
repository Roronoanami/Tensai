






// version5  best  

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import {
//   Send,
//   Smile,
//   Paperclip,
//   Image as ImageIcon,
//   FileText,
//   Video,
//   ArrowLeft,
// } from "lucide-react";

// export default function CommunityChat({
//   community,
//   messages,
//   message,
//   setMessage,
//   onBack,
//   mobileMode = false,
//   selectedUser,
// }) {
//   const [showAttach, setShowAttach] = useState(false);

//   return (
//     <div className="flex h-full flex-col bg-white dark:bg-black text-black dark:text-white">

//       {/* ================= HEADER ================= */}
//       <div className="h-16 flex items-center gap-3 px-4 border-b border-gray-200 dark:border-gray-800">

//         {mobileMode && (
//           <button onClick={onBack} className="p-2">
//             <ArrowLeft size={20} />
//           </button>
//         )}

//         <Image
//           src={community.ownerImage}
//           alt="community"
//           width={42}
//           height={42}
//           className="rounded-full object-cover"
//         />

//         <div className="min-w-0">
//           <h2 className="font-semibold truncate">
//             {community.name}
//           </h2>
//           <p className="text-xs text-gray-500">
//             {selectedUser ? `Chat with ${selectedUser.name}` : `${community.members} members`}
//           </p>
//         </div>
//       </div>

//       {/* ================= MESSAGES ================= */}
//       <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-24">

//         {messages.map((msg) => (
//           <div
//             key={msg.id}
//             className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}
//           >

//             {!msg.isOwn && (
//               <Image
//                 src={msg.image}
//                 alt="user"
//                 width={36}
//                 height={36}
//                 className="rounded-full"
//               />
//             )}

//             <div
//               className={`px-4 py-2 rounded-2xl max-w-[75%] ${
//                 msg.isOwn
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-100 dark:bg-gray-900"
//               }`}
//             >
//               <p className="text-sm break-words">{msg.text}</p>
//             </div>

//           </div>
//         ))}
//       </div>

//       {/* ================= INPUT ================= */}
//       <div className="border-t border-gray-200 dark:border-gray-800 p-3">

//         <div className="flex items-center gap-2">

//           <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
//             <Smile size={20} />
//           </button>

//           <div className="relative">
//             <button
//               onClick={() => setShowAttach(!showAttach)}
//               className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
//             >
//               <Paperclip size={20} />
//             </button>

//             {showAttach && (
//               <div className="absolute bottom-12 left-0 w-40 bg-white dark:bg-gray-900 border rounded-lg shadow-lg">

//                 <button className="flex w-full gap-2 px-3 py-2">
//                   <ImageIcon size={18} /> Photo
//                 </button>

//                 <button className="flex w-full gap-2 px-3 py-2">
//                   <FileText size={18} /> File
//                 </button>

//                 <button className="flex w-full gap-2 px-3 py-2">
//                   <Video size={18} /> Video
//                 </button>

//               </div>
//             )}
//           </div>

//           <input
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Type a message..."
//             className="flex-1 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-900 outline-none"
//           />

//           <button className="p-2 bg-black text-white dark:bg-white dark:text-black rounded-lg">
//             <Send size={18} />
//           </button>

//         </div>
//       </div>

//     </div>
//   );
// }


// .. nw   version 
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Send,
  Smile,
  Paperclip,
  Image as ImageIcon,
  FileText,
  Video,
  ArrowLeft,
} from "lucide-react";

export default function CommunityChat({
  community,
  messages,
  message,
  setMessage,
  onBack,
  mobileMode,
}) {
  const [showAttach, setShowAttach] = useState(false);

  return (
    // <div className="flex h-full w-full flex-col bg-white dark:bg-black text-black dark:text-white">
<div className="flex h-full w-full flex-col bg-white dark:bg-black text-black dark:text-white pb-20 md:pb-0">
      {/* ================= HEADER ================= */}
      <div className="h-16 flex items-center gap-3 px-4 border-b border-gray-200 dark:border-gray-800">

        {/* BACK (mobile only) */}
        {mobileMode && (
          <button onClick={onBack} className="p-2">
            <ArrowLeft size={20} />
          </button>
        )}

        {/* ALWAYS COMMUNITY OWNER IMAGE */}
        <Image
          src={community.ownerImage}
          alt="community"
          width={42}
          height={42}
          className="rounded-full object-cover"
        />

        <div className="min-w-0">
          <h2 className="font-semibold truncate">
            Community
          </h2>

          <p className="text-xs text-gray-500">
            {community.members} members
          </p>
        </div>
      </div>

      {/* ================= MESSAGES ================= */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 ">

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}
          >

            {!msg.isOwn && (
              <Image
                src={msg.image}
                alt="user"
                width={36}
                height={36}
                className="rounded-full mr-2"
              />
            )}

            <div
              className={`px-4 py-2 rounded-2xl max-w-[75%] ${
                msg.isOwn
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-900"
              }`}
            >
              <p className="text-sm break-words">{msg.text}</p>
            </div>

            {msg.isOwn && (
              <Image
                src={msg.image}
                alt="user"
                width={36}
                height={36}
                className="rounded-full ml-2"
              />
            )}
          </div>
        ))}

      </div>

      {/* ================= INPUT ================= */}
      <div className="border-t border-gray-200 dark:border-gray-800 p-3">

        <div className="flex items-center gap-2">

          {/* EMOJI */}
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
            <Smile size={20} />
          </button>

          {/* ATTACHMENT */}
         

          {/* INPUT */}
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-900 outline-none"
          />
           <div className="relative">

            <button
              onClick={() => setShowAttach(!showAttach)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Paperclip size={20} />
            </button>

            {showAttach && (
              <div className="absolute bottom-12 left-0 w-40 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">

                <button className="flex w-full gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <ImageIcon size={18} /> Photo
                </button>

                <button className="flex w-full gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <FileText size={18} /> File
                </button>

                <button className="flex w-full gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <Video size={18} /> Video
                </button>

              </div>
            )}

          </div>

          {/* SEND */}
          <button className="p-2 bg-black text-white dark:bg-white dark:text-black rounded-lg">
            <Send size={18} />
          </button>

        </div>
      </div>

    </div>
  );
}