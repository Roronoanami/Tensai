
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
//   subscribeRoom,
//   sendMessageSocket,
//   isSocketConnected,
// } from "@/services/chatService";
// // function ChatWindow({ selectedChat }) {
// function ChatWindow({
//   selectedChat,
//   refreshChats,
// }) {

//   console.log("ChatWindow rendered");


//   const [showAttachMenu, setShowAttachMenu] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState("");
//   const [currentUsername, setCurrentUsername] = useState("");



//   useEffect(() => {

//     const username = localStorage.getItem("username");

//     setCurrentUsername(username || "");

//   }, []);



// useEffect(() => {

//   if (!selectedChat) return;

//   let subscription;
//   setMessages([]);
//   const subscribe = () => {

//     if (!isSocketConnected()) {
//       setTimeout(subscribe, 100);
//       return;
//     }

//     subscription = subscribeRoom(
//       selectedChat.roomId,
//       (newMessage) => {

//         setMessages((prev) => [
//           ...prev,
//           newMessage
//         ]);

//         if (refreshChats) {
//           refreshChats();
//         }

//       }
//     );

//   };

//   subscribe();

//   return () => {
//     if (subscription) {
//       subscription.unsubscribe();
//     }
//   };

// }, [selectedChat, refreshChats]);
// const handleSend = () => {

//   if (!selectedChat) return;

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
// {/* <div className="flex-1 p-4 overflow-y-auto space-y-3"> */}
// <div className="flex-1 overflow-y-auto p-4 pb-28 md:pb-4 space-y-3">
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
//             {msg.createdAt && new Date(msg.createdAt).toLocaleTimeString([], {
//   hour: "2-digit",
//   minute: "2-digit",
// })}
//           </p>

//         </div>

//       </div>

//     );
//   })}

// </div>

//       {/* INPUT */}
//       {/* <div className="p-3 border-t dark:border-gray-800 flex items-center gap-2"> */}
//            <div
//   className="
//     fixed md:static
//     bottom-14 md:bottom-0
//     left-0 right-0
//     z-40
//     bg-white dark:bg-black
//     border-t dark:border-gray-800
//     p-3
//     flex items-center gap-2
//   "
// >
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
//   sendMessage,
// } from "@/services/chatService";


// function ChatWindow({ selectedChat }) {

//   const [showAttachMenu, setShowAttachMenu] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState("");
//   const [currentUsername, setCurrentUsername] = useState("");



//   useEffect(() => {

//     const username = localStorage.getItem("username");

//     setCurrentUsername(username || "");

//   }, []);




//   useEffect(() => {

//     if (!selectedChat) return;


//     const loadHistory = async () => {

//       try {

//         const data = await getChatHistory(
//           selectedChat.roomId
//         );

//         setMessages(data);

//       } catch (err) {

//         console.error(err);

//       }

//     };


//     loadHistory();


//   }, [selectedChat]);









// const handleSend = async () => {

//   if (!message.trim()) return;

//   try {

//     await sendMessage(
//       selectedChat.name,
//       message
//     );

//     const history = await getChatHistory(
//       selectedChat.roomId
//     );

//     setMessages(history);

//     setMessage("");

//   } catch (err) {
//     console.error(err);
//   }

// };
//   return (
// <div className="flex flex-col h-full w-full overflow-hidden">
//     {/* HEADER (FIXED SINGLE VERSION) */}
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
// <div className="flex-1 overflow-y-auto p-4 space-y-3">
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
// <div className="
// shrink-0
// p-3
// border-t
// dark:border-gray-800
// flex
// items-center
// gap-2
// bg-white
// dark:bg-gray-900
// ">
//    <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
//           <Smile size={20} />
//         </button>

// <input
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
import EmojiPicker from "emoji-picker-react";
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
  sendMessage,
} from "@/services/chatService";


function ChatWindow({ selectedChat }) {

  const [showAttachMenu, setShowAttachMenu] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [currentUsername, setCurrentUsername] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);


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



const handleEmojiClick = (emojiData) => {
  setMessage((prev) => prev + emojiData.emoji);
  setShowEmojiPicker(false);
};





const handleSend = async () => {

  if (!message.trim()) return;

  try {

    await sendMessage(
      selectedChat.name,
      message
    );

    const history = await getChatHistory(
      selectedChat.roomId
    );

    setMessages(history);

    setMessage("");

  } catch (err) {
    console.error(err);
  }

};
  return (
  <div className="flex flex-col h-full w-full overflow-hidden">
      {/* HEADER (FIXED SINGLE VERSION) */}
      <div className="flex items-center justify-between p-3 h-[64px] border-b dark:border-gray-800">

        <div className="flex items-center gap-3">



          <Image
            src={selectedChat?.image || "/assets/avatar.png"}
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
<div className="flex-1 overflow-y-auto p-4 space-y-3">
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
   <div className="
shrink-0
p-3
border-t
dark:border-gray-800
flex
items-center
gap-2
">                        
        {/* <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
          <Smile size={20} />
        </button> */}


        <div className="relative">
  <button
    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
    className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800"
  >
    <Smile size={20} />
  </button>

  {showEmojiPicker && (
    <div className="absolute bottom-12 left-0 z-50">
      <EmojiPicker onEmojiClick={handleEmojiClick} />
    </div>
  )}
</div>

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