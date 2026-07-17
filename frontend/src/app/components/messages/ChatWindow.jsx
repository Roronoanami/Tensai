

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




// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import {
//   Smile,
//   Mic,
//   Phone,
//   Video,
//   Send,
//   ImageDown,
//   Paperclip,
//   FileText
// } from "lucide-react";

// import {
//   getChatHistory,
//   connectSocket,
//   subscribeRoom,
//   sendMessageSocket,
// } from "@/services/chatService";
// function ChatWindow({ selectedChat, onBack }) {
//   const [showAttachMenu, setShowAttachMenu] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState("");
//   const currentUsername = localStorage.getItem("username");
//   useEffect(() => {

//     if (!selectedChat) return;

//     loadHistory();

//   }, [selectedChat]);

//   useEffect(() => {

//     const token = localStorage.getItem("token");

//     connectSocket(token, () => {

//       if (!selectedChat) return;

//       subscribeRoom(selectedChat.roomId, (newMessage) => {

//         setMessages((prev) => [...prev, newMessage]);

//       });

//     });

//   }, [selectedChat]);

//   const loadHistory = async () => {

//     try {

//       const data = await getChatHistory(
//         selectedChat.roomId
//       );

//       setMessages(data);

//     } catch (err) {

//       console.error(err);

//     }

//   };
//   const handleSend = () => {

//   if (!message.trim()) return;

//   sendMessageSocket(
//     selectedChat.name,
//     message
//   );

//   setMessage("");

// };
//   return (
//    <div className="flex flex-col h-full w-full pb-14 md:pb-0">

//       {/* HEADER (FIXED SINGLE VERSION) */}
//       <div className="flex items-center justify-between p-3 h-[64px] border-b dark:border-gray-800">

//         <div className="flex items-center gap-3">



//           <Image
//             src={selectedChat?.image || "/assets/default.jpg"}
//             alt="user"
//             width={40}
//             height={40}
//             className="rounded-full"
//           />

//           <p className="font-semibold">
//             {selectedChat?.name || "Unknown"}
//           </p>

//         </div>

//         <div className="flex items-center gap-3">
//           <Phone className="cursor-pointer" />
//           <Video className="cursor-pointer" />
//         </div>

//       </div>

//       {/* MESSAGES */}
// <div className="flex-1 p-4 overflow-y-auto space-y-3">

//   {messages.map((msg) => {

//     // const mine =
//     //   msg.senderUsername !== selectedChat.name;

//     const mine =
//   msg.senderUsername === currentUsername;

//     return (

//       <div
//         key={msg.id}
//         className={`flex ${
//           mine ? "justify-end" : "justify-start"
//         }`}
//       >

//         <div
//           className={`max-w-[70%] p-2 rounded-lg ${
//             mine
//               ? "bg-blue-500 text-white"
//               : "bg-gray-200 dark:bg-gray-800"
//           }`}
//         >
//           <p>{msg.content}</p>

//           <p className="text-[10px] opacity-70 mt-1 text-right">
//             {new Date(msg.createdAt).toLocaleTimeString([], {
//               hour: "2-digit",
//               minute: "2-digit",
//             })}
//           </p>

//         </div>

//       </div>

//     );
//   })}

// </div>

//       {/* INPUT */}
//       <div className="p-3 border-t dark:border-gray-800 flex items-center gap-2">

//         <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
//           <Smile size={20} />
//         </button>

//             <input
//   value={message}
//   onChange={(e) => setMessage(e.target.value)}
//   onKeyDown={(e) => {
//     if (e.key === "Enter") {
//       handleSend();
//     }
//   }}
//   placeholder="Type a message..."
//   className="flex-1 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 outline-none"
// />

// <div className="relative">

//   <button
//     onClick={() => setShowAttachMenu(!showAttachMenu)}
//     className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800"
//   >
//     <Paperclip size={20} />
//   </button>


//   {showAttachMenu && (
//     <div
//       className="
//         absolute bottom-12 left-1/2 -translate-x-1/2
//         w-44
//         bg-white dark:bg-gray-900
//         border border-gray-200 dark:border-gray-700
//         rounded-xl
//         shadow-lg
//         p-2
//       "
//     >

//       <button
//         className="
//           flex items-center gap-3
//           w-full p-2
//           rounded-lg
//           hover:bg-gray-100
//           dark:hover:bg-gray-800
//         "
//       >
//         <ImageDown size={20} />
//         <span>Image</span>
//       </button>


//       <button
//         className="
//           flex items-center gap-3
//           w-full p-2
//           rounded-lg
//           hover:bg-gray-100
//           dark:hover:bg-gray-800
//         "
//       >
//         <Video size={20} />
//         <span>Video</span>
//       </button>


//       <button
//         className="
//           flex items-center gap-3
//           w-full p-2
//           rounded-lg
//           hover:bg-gray-100
//           dark:hover:bg-gray-800
//         "
//       >
//         <FileText size={20} />
//         <span>Document</span>
//       </button>


//       <button
//         className="
//           flex items-center gap-3
//           w-full p-2
//           rounded-lg
//           hover:bg-gray-100
//           dark:hover:bg-gray-800
//         "
//       >
//         <Mic size={20} />
//         <span>Audio</span>
//       </button>


//     </div>
//   )}

// </div>

//         <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
//           <Mic size={20} />
//         </button>

//         <button
//   onClick={handleSend}
//   className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
// >
//   <Send size={18} />
// </button>

//       </div>
//     </div>
//   );
// }

// export default ChatWindow;




"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Smile,
  Mic,
  Phone,
  Video,
  Send,
  ImageDown,
  Paperclip,
  FileText
} from "lucide-react";

import {
  getChatHistory,
  connectSocket,
  subscribeRoom,
  sendMessageSocket,
} from "@/services/chatService";


function ChatWindow({ selectedChat }) {

  const [showAttachMenu, setShowAttachMenu] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [currentUsername, setCurrentUsername] = useState("");



  useEffect(() => {

    const username = localStorage.getItem("username");

    setCurrentUsername(username || "");

  }, []);




  useEffect(() => {

    if (!selectedChat) return;


    const loadHistory = async () => {

      try {

        const data = await getChatHistory(
          selectedChat.roomId
        );

        setMessages(data);

      } catch (err) {

        console.error(err);

      }

    };


    loadHistory();


  }, [selectedChat]);





  useEffect(() => {

    if (!selectedChat) return;


    const token = localStorage.getItem("token");


    connectSocket(token, () => {


      subscribeRoom(
        selectedChat.roomId,
        (newMessage) => {

          setMessages((prev) => [
            ...prev,
            newMessage
          ]);

        }
      );


    });


  }, [selectedChat]);





  const handleSend = () => {


    if (!message.trim()) return;


    sendMessageSocket(
      selectedChat.roomId,
      message
    );


    setMessage("");

  };
  return (
   <div className="flex flex-col h-full w-full pb-14 md:pb-0">

      {/* HEADER (FIXED SINGLE VERSION) */}
      <div className="flex items-center justify-between p-3 h-[64px] border-b dark:border-gray-800">

        <div className="flex items-center gap-3">



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

  {messages.map((msg) => {

    // const mine =
    //   msg.senderUsername !== selectedChat.name;

    const mine =
  msg.senderUsername === currentUsername;

    return (

      <div
        key={msg.id}
        className={`flex ${
          mine ? "justify-end" : "justify-start"
        }`}
      >

        <div
          className={`max-w-[70%] p-2 rounded-lg ${
            mine
              ? "bg-blue-500 text-white"
              : "bg-gray-200 dark:bg-gray-800"
          }`}
        >
          <p>{msg.content}</p>

          <p className="text-[10px] opacity-70 mt-1 text-right">
            {new Date(msg.createdAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>

        </div>

      </div>

    );
  })}

</div>

      {/* INPUT */}
      <div className="p-3 border-t dark:border-gray-800 flex items-center gap-2">

        <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
          <Smile size={20} />
        </button>

            <input
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  }}
  placeholder="Type a message..."
  className="flex-1 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 outline-none"
/>

<div className="relative">

  <button
    onClick={() => setShowAttachMenu(!showAttachMenu)}
    className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800"
  >
    <Paperclip size={20} />
  </button>


  {showAttachMenu && (
    <div
      className="
        absolute bottom-12 left-1/2 -translate-x-1/2
        w-44
        bg-white dark:bg-gray-900
        border border-gray-200 dark:border-gray-700
        rounded-xl
        shadow-lg
        p-2
      "
    >

      <button
        className="
          flex items-center gap-3
          w-full p-2
          rounded-lg
          hover:bg-gray-100
          dark:hover:bg-gray-800
        "
      >
        <ImageDown size={20} />
        <span>Image</span>
      </button>


      <button
        className="
          flex items-center gap-3
          w-full p-2
          rounded-lg
          hover:bg-gray-100
          dark:hover:bg-gray-800
        "
      >
        <Video size={20} />
        <span>Video</span>
      </button>


      <button
        className="
          flex items-center gap-3
          w-full p-2
          rounded-lg
          hover:bg-gray-100
          dark:hover:bg-gray-800
        "
      >
        <FileText size={20} />
        <span>Document</span>
      </button>


      <button
        className="
          flex items-center gap-3
          w-full p-2
          rounded-lg
          hover:bg-gray-100
          dark:hover:bg-gray-800
        "
      >
        <Mic size={20} />
        <span>Audio</span>
      </button>


    </div>
  )}

</div>

        <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
          <Mic size={20} />
        </button>

        <button
  onClick={handleSend}
  className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
>
  <Send size={18} />
</button>

      </div>
    </div>
  );
}

export default ChatWindow;