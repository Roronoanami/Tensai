

// best adbavnce     version 


// "use client";
// import { sendCommunityMessage } from "@/services/communityChatService";
// import { useState } from "react";
// import Image from "next/image";
// import {
//   Send,
//   Smile,
//   Paperclip,
//   Image as ImageIcon,
//   FileText,
//   Video,
 
// } from "lucide-react";


// export default function CommunityChat({
//   community,
//   communityId,
//   messages,
//   message,
//   setMessage,
//   onBack,
//   mobileMode,
// })
// {
//   const [showAttach, setShowAttach] = useState(false);

//   const currentUserId = localStorage.getItem("userId");


//   const handleSend = () => {

//   if (!message.trim()) return;

//   sendCommunityMessage(
//     communityId,
//     message.trim()
//   );

//   setMessage("");

// };
//   return (
//     // <div className="flex h-full w-full flex-col bg-white dark:bg-black text-black dark:text-white">
// <div className="flex h-full w-full flex-col bg-white dark:bg-black text-black dark:text-white pb-20 md:pb-0">
//       {/* ================= HEADER ================= */}
//       <div className="h-16 flex items-center gap-3 px-4 border-b border-gray-200 dark:border-gray-800">

    


//         <Image
//   src={community.communityImage || "/assets/user.png"}
//   alt={community.communityName}
//   width={42}
//   height={42}
//   className="rounded-full object-cover"
// />

// <div className="min-w-0">
//   <h2 className="font-semibold truncate">
//     {community.communityName}
//   </h2>

//   <p className="text-xs text-gray-500">
//     {community.currentMembers} members
//   </p>
// </div>
//       </div>

//       {/* ================= MESSAGES ================= */}
//       <div className="flex-1 overflow-y-auto p-4 space-y-4 ">

// {messages.map((msg) => {

//   const isOwn = msg.senderId === currentUserId;

//   return (

//     <div
//       key={msg.id}
//       className={`flex ${isOwn ? "justify-end" : "justify-start"}`}
//     >

//       {!isOwn && (
//         <Image
//           src={msg.senderProfileImage || "/assets/user.png"}
//           alt={msg.senderUsername}
//           width={36}
//           height={36}
//           className="rounded-full mr-2"
//         />
//       )}

//       <div
//         className={`px-4 py-2 rounded-2xl max-w-[75%] ${
//           isOwn
//             ? "bg-blue-600 text-white"
//             : "bg-gray-100 dark:bg-gray-900"
//         }`}
//       >

//         {!isOwn && (
//           <p className="text-xs font-semibold mb-1 text-blue-600">
//             {msg.senderUsername}
//           </p>
//         )}

//         <p className="text-sm break-words">
//           {msg.message}
//         </p>

//       </div>

//       {isOwn && (
//         <Image
//           src={msg.senderProfileImage || "/assets/user.png"}
//           alt={msg.senderUsername}
//           width={36}
//           height={36}
//           className="rounded-full ml-2"
//         />
//       )}

//     </div>

//   );

// })}

//       </div>

//       {/* ================= INPUT ================= */}
//       <div className="border-t border-gray-200 dark:border-gray-800 p-3">

//         <div className="flex items-center gap-2">

//           {/* EMOJI */}
//           <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
//             <Smile size={20} />
//           </button>

//           {/* ATTACHMENT */}
         

//           {/* INPUT */}
//           {/* <input
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Type a message..."
//             className="flex-1 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-900 outline-none"
//           /> */}

//           <input
//   value={message}
//   onChange={(e) => setMessage(e.target.value)}
//   onKeyDown={(e) => {
//     if (e.key === "Enter") {
//       handleSend();
//     }
//   }}
//   placeholder="Type a message..."
//   className="flex-1 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-900 outline-none"
// />
//            <div className="relative">

//             <button
//               onClick={() => setShowAttach(!showAttach)}
//               className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
//             >
//               <Paperclip size={20} />
//             </button>

//             {showAttach && (
//               <div className="absolute bottom-12 left-0 w-40 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">

//                 <button className="flex w-full gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
//                   <ImageIcon size={18} /> Photo
//                 </button>

//                 <button className="flex w-full gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
//                   <FileText size={18} /> File
//                 </button>

//                 <button className="flex w-full gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
//                   <Video size={18} /> Video
//                 </button>

//               </div>
//             )}

//           </div>

//           {/* SEND */}
//           {/* <button className="p-2 bg-black text-white dark:bg-white dark:text-black rounded-lg">
//             <Send size={18} />
//           </button> */}

//           <button
//   onClick={handleSend}
//   className="p-2 bg-black text-white dark:bg-white dark:text-black rounded-lg"
// >
//   <Send size={18} />
// </button>

//         </div>
//       </div>

//     </div>
//   );
// }













"use client";

import {
  sendCommunityMessage,

} from "@/services/communityChatService";

import { useState, useEffect } from "react";
import Image from "next/image";

import {
  Send,
  Smile,
  Paperclip,
  Image as ImageIcon,
  FileText,
  Video,
} from "lucide-react";


export default function CommunityChat({
  community,
  communityId,
  messages,
  setMessages,
  message,
  setMessage,
  onBack,
  mobileMode,
}) {

  const currentUserId =
    typeof window !== "undefined"
      ? localStorage.getItem("userId")
      : null;


  const [showAttach, setShowAttach] = useState(false);


  // useEffect(() => {

  //   if (!communityId) return;


  //   connectCommunitySocket(() => {

  //     subscribeCommunity(
  //       communityId,
  //       (newMessage) => {

  //         setMessages(prev => [
  //           ...prev,
  //           newMessage
  //         ]);

  //       }
  //     );

  //   });


  // }, [communityId, setMessages]);

  const handleSend = () => {

  if (!message.trim()) return;

  sendCommunityMessage(
    communityId,
    message.trim()
  );

  setMessage("");

};
  return (
    // <div className="flex h-full w-full flex-col bg-white dark:bg-black text-black dark:text-white">
<div className="flex h-full w-full flex-col bg-white dark:bg-black text-black dark:text-white pb-20 md:pb-0">
      {/* ================= HEADER ================= */}
      <div className="h-16 flex items-center gap-3 px-4 border-b border-gray-200 dark:border-gray-800">

    


        <Image
  src={community.communityImage || "/assets/user.png"}
  alt={community.communityName}
  width={42}
  height={42}
  className="rounded-full object-cover"
/>

<div className="min-w-0">
  <h2 className="font-semibold truncate">
    {community.communityName}
  </h2>

  <p className="text-xs text-gray-500">
    {community.currentMembers} members
  </p>
</div>
      </div>

      {/* ================= MESSAGES ================= */}
      {/* <div className="flex-1 overflow-y-auto p-4 space-y-4 ">

{messages.map((msg) => {

  const isOwn = msg.senderId === currentUserId;

  return (

    <div
      key={msg.id}
      className={`flex ${isOwn ? "justify-end" : "justify-start"}`}
    >

      {!isOwn && (
        <Image
          src={msg.senderProfileImage || "/assets/user.png"}
          alt={msg.senderUsername}
          width={36}
          height={36}
          className="rounded-full mr-2"
        />
      )}

      <div
        className={`px-4 py-2 rounded-2xl max-w-[75%] ${
          isOwn
            ? "bg-blue-600 text-white"
            : "bg-gray-100 dark:bg-gray-900"
        }`}
      >

        {!isOwn && (
          <p className="text-xs font-semibold mb-1 text-blue-600">
            {msg.senderUsername}
          </p>
        )}

        <p className="text-sm break-words">
          {msg.message}
        </p>

      </div>

      {isOwn && (
        <Image
          src={msg.senderProfileImage || "/assets/user.png"}
          alt={msg.senderUsername}
          width={36}
          height={36}
          className="rounded-full ml-2"
        />
      )}

    </div>

  );

})}

      </div> */}


      {/* ================= MESSAGES ================= */}
<div className="flex-1 overflow-y-auto p-4 space-y-3">

{messages.map((msg) => {

  const isOwn = msg.senderId === currentUserId;

  return (

    <div
      key={msg.id}
      className={`flex items-end gap-2 ${
        isOwn ? "justify-end" : "justify-start"
      }`}
    >


      {/* OTHER USER IMAGE */}
      {!isOwn && (
        <Image
          src={msg.senderProfileImage || "/assets/user.png"}
          alt="user"
          width={28}
          height={28}
          className="rounded-full object-cover"
        />
      )}



      {/* MESSAGE BOX */}
      <div
        className={`
          max-w-[65%]
          px-3 py-2
          rounded-xl
          text-sm
          break-words
          ${
            isOwn
            ? "bg-blue-600 text-white rounded-br-sm"
            : "bg-gray-100 dark:bg-gray-900 rounded-bl-sm"
          }
        `}
      >


        {!isOwn && (
          <p className="text-[11px] font-semibold text-blue-600 mb-1">
            {msg.senderUsername}
          </p>
        )}


        <p>
          {msg.message}
        </p>


      </div>



      {/* MY IMAGE */}
      {isOwn && (
        <Image
          src={msg.senderProfileImage || "/assets/user.png"}
          alt="user"
          width={28}
          height={28}
          className="rounded-full object-cover"
        />
      )}


    </div>

  );

})}

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
          {/* <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-900 outline-none"
          /> */}

          <input
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  }}
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
          {/* <button className="p-2 bg-black text-white dark:bg-white dark:text-black rounded-lg">
            <Send size={18} />
          </button> */}

          <button
  onClick={handleSend}
  className="p-2 bg-black text-white dark:bg-white dark:text-black rounded-lg"
>
  <Send size={18} />
</button>

        </div>
      </div>

    </div>
  );
}
