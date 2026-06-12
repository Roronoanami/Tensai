

// version1    
// "use client";

// import Image from "next/image";
// import { Phone, Video, Send } from "lucide-react";

// function ChatWindow({ selectedChat }) {
//   if (!selectedChat) {
//     return (
//       <div className="flex items-center justify-center h-full text-gray-500">
//         Select a chat to start messaging
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col h-full w-full">

//       {/* HEADER */}
//       <div className="flex items-center justify-between p-3 border-b dark:border-gray-800">
//         <div className="flex items-center gap-3">
//           <Image
//             src={selectedChat.image}
//             alt="user"
//             width={40}
//             height={40}
//             className="rounded-full"
//           />
//           <p className="font-semibold">{selectedChat.name}</p>
//         </div>

//         <div className="flex items-center gap-3">
//           <Phone className="cursor-pointer" />
//           <Video className="cursor-pointer" />
//         </div>
//       </div>

//       {/* MESSAGES */}
//       <div className="flex-1 p-4 overflow-y-auto space-y-3">
//         <div className="bg-gray-200 dark:bg-gray-800 p-2 rounded-lg w-fit">
//           Hey 👋
//         </div>

//         <div className="bg-blue-500 text-white p-2 rounded-lg w-fit ml-auto">
//           Hello!
//         </div>
//       </div>

//       {/* INPUT */}
//       <div className="p-3 border-t dark:border-gray-800 flex gap-2">
//         <input
//           placeholder="Type a message..."
//           className="flex-1 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 outline-none"
//         />
//         <button className="bg-blue-500 text-white px-3 rounded-lg">
//           <Send size={18} />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ChatWindow;









   
// "use client";

// import Image from "next/image";
// import { Smile, Imagedown, Mic,Phone, Video, Send, ImageDown } from "lucide-react";

// function ChatWindow({ selectedChat }) {
//   if (!selectedChat) {
//     return (
//       <div className="flex items-center justify-center h-full text-gray-500">
//         Select a chat to start messaging
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col h-full w-full">

//       {/* HEADER */}
//       <div className="flex items-center justify-between p-3 border-b dark:border-gray-800">
//         <div className="flex items-center gap-3">
//           <Image
//             src={selectedChat.image}
//             alt="user"
//             width={40}
//             height={40}
//             className="rounded-full"
//           />
//           <p className="font-semibold">{selectedChat.name}</p>
//         </div>

//         <div className="flex items-center gap-3">
//           <Phone className="cursor-pointer" />
//           <Video className="cursor-pointer" />
//         </div>
//       </div>

//       {/* MESSAGES */}
//       <div className="flex-1 p-4 overflow-y-auto space-y-3">
//         <div className="bg-gray-200 dark:bg-gray-800 p-2 rounded-lg w-fit">
//           Hey 👋
//         </div>

//         <div className="bg-blue-500 text-white p-2 rounded-lg w-fit ml-auto">
//           Hello!
//         </div>
//       </div>

//       <div className="p-3 border-t dark:border-gray-800 flex items-center gap-2">

//   {/* LEFT SIDE ICON (Emoji) */}
//   <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
//     <Smile size={20} />
//   </button>

//   {/* INPUT FIELD */}
//   <input
//     placeholder="Type a message..."
//     className="flex-1 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 outline-none"
//   />

//   {/* RIGHT SIDE ICONS */}
//   <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
//     <ImageDown size={20} />
//   </button>

//   <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
//     <Mic size={20} />
//   </button>

//   {/* SEND BUTTON */}
//   <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
//     <Send size={18} />
//   </button>

// </div>
//     </div>
//   );
// }

// export default ChatWindow;




// "use client";

// import Image from "next/image";
// import { Smile, Mic, Phone, Video, Send, ImageDown } from "lucide-react";

// function ChatWindow({ selectedChat , onBack}) {
//   if (!selectedChat) {
//     return (
//       <div className="flex items-center justify-center h-full text-gray-500">
//         Select a chat to start messaging
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col h-full w-full">

//       {/* HEADER */}

// {/* HEADER */}
// <div className="flex items-center justify-between p-3 h-[64px] border-b dark:border-gray-800">

//   <div className="flex items-center gap-3">

//     {/* BACK BUTTON (mobile only) */}
//     <button
//       onClick={onBack}
//       className="md:hidden text-gray-500 text-xl"
//     >
//       ←
//     </button>

//     <Image
//       src={selectedChat?.image || "/assets/default.jpg"}
//       alt="user"
//       width={40}
//       height={40}
//       className="rounded-full"
//     />

//     <p className="font-semibold">
//       {selectedChat?.name || "Unknown"}
//     </p>

//   </div>

//   <div className="flex items-center gap-3">
//     <Phone className="cursor-pointer" />
//     <Video className="cursor-pointer" />
//   </div>

// </div>

//       {/* MESSAGES */}
//       <div className="flex-1 p-4 overflow-y-auto space-y-3">
//         <div className="bg-gray-200 dark:bg-gray-800 p-2 rounded-lg w-fit">
//           Hey 👋
//         </div>

//         <div className="bg-blue-500 text-white p-2 rounded-lg w-fit ml-auto">
//           Hello!
//         </div>
//       </div>

//       {/* INPUT */}
//       <div className="p-3 border-t dark:border-gray-800 flex items-center gap-2">

//         {/* LEFT SIDE ICON (Emoji) */}
//         <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
//           <Smile size={20} />
//         </button>

//         {/* INPUT FIELD */}
//         <input
//           placeholder="Type a message..."
//           className="flex-1 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 outline-none"
//         />

//         {/* RIGHT SIDE ICONS */}
//         <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
//           <ImageDown size={20} />
//         </button>

//         <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
//           <Mic size={20} />
//         </button>

//         {/* SEND BUTTON */}
//         <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
//           <Send size={18} />
//         </button>

//       </div>
//     </div>
//   );
// }

// export default ChatWindow;


"use client";

import Image from "next/image";
import { Smile, Mic, Phone, Video, Send, ImageDown } from "lucide-react";

function ChatWindow({ selectedChat, onBack }) {
  if (!selectedChat) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500">
        Select a chat to start messaging
      </div>
    );
  }

  return (
   <div className="flex flex-col h-full w-full pb-14 md:pb-0">

      {/* HEADER (FIXED SINGLE VERSION) */}
      <div className="flex items-center justify-between p-3 h-[64px] border-b dark:border-gray-800">

        <div className="flex items-center gap-3">

          {/* BACK BUTTON (mobile only) */}
          <button
            onClick={onBack}
            className="md:hidden text-gray-500 text-xl"
          >
            ←
          </button>

          <Image
            src={selectedChat?.image || "/assets/default.jpg"}
            alt="user"
            width={40}
            height={40}
            className="rounded-full"
          />

          <p className="font-semibold">
            {selectedChat?.name || "Unknown"}
          </p>

        </div>

        <div className="flex items-center gap-3">
          <Phone className="cursor-pointer" />
          <Video className="cursor-pointer" />
        </div>

      </div>

      {/* MESSAGES */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        <div className="bg-gray-200 dark:bg-gray-800 p-2 rounded-lg w-fit">
          Hey 👋
        </div>

        <div className="bg-blue-500 text-white p-2 rounded-lg w-fit ml-auto">
          Hello!
        </div>
      </div>

      {/* INPUT */}
      <div className="p-3 border-t dark:border-gray-800 flex items-center gap-2">

        <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
          <Smile size={20} />
        </button>

        <input
          placeholder="Type a message..."
          className="flex-1 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 outline-none"
        />

        <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
          <ImageDown size={20} />
        </button>

        <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
          <Mic size={20} />
        </button>

        <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
          <Send size={18} />
        </button>

      </div>
    </div>
  );
}

export default ChatWindow;