// "use client";

// import { useState } from "react";
// import ChatList from "../components/messages/ChatList";
// import ChatWindow from "../components/messages/ChatWindow";

// function MessageLayout() {
//   const [selectedChat, setSelectedChat] = useState(null);
//   const [isMobileChatOpen, setIsMobileChatOpen] = useState(false);
//   return (
//     <div className="flex h-full w-full">

//       {/* LEFT SIDE (30%) */}
//       <div className="w-full md:w-[30%]">
//         <ChatList
//           selectedChat={selectedChat}
//           setSelectedChat={setSelectedChat}
//         />
//       </div>

//       {/* RIGHT SIDE (70%) */}
//       <div className="hidden md:flex md:w-[70%]">
//         <ChatWindow selectedChat={selectedChat} />
//       </div>

//     </div>
//   );
// }

// export default MessageLayout;


// "use client";

// import { useState } from "react";
// import ChatList from "../components/messages/ChatList";
// import ChatWindow from "../components/messages/ChatWindow";

// function MessageLayout() {
//   const [selectedChat, setSelectedChat] = useState(null);
//   const [isMobileChatOpen, setIsMobileChatOpen] = useState(false);

//   // ✅ when user clicks chat
//   const handleSelectChat = (chat) => {
//     setSelectedChat(chat);
//     setIsMobileChatOpen(true);
//   };

//   // ✅ back button
//   const handleBack = () => {
//     setIsMobileChatOpen(false);
//   };

//   return (
//     <div className="flex h-full w-full">

//       {/* LEFT SIDE */}
//       <div className={`
//         w-full md:w-[30%]
//         ${isMobileChatOpen ? "hidden md:block" : "block"}
//       `}>
//         <ChatList
//           selectedChat={selectedChat}
//           setSelectedChat={handleSelectChat}
//         />
//       </div>

//       {/* RIGHT SIDE */}
//       <div className={`
//         w-full md:w-[70%]
//         ${isMobileChatOpen ? "block" : "hidden md:block"}
//       `}>
//         <ChatWindow
//           selectedChat={selectedChat}
//           onBack={handleBack}
//         />
//       </div>

//     </div>
//   );
// }

// export default MessageLayout;"use client";



// veriosn 2

// "use client";
// import SideNav from "../components/SideNav";
// import { useState } from "react";
// import ChatList from "../components/messages/ChatList";
// import ChatWindow from "../components/messages/ChatWindow";

// function MessageLayout() {
//   const [selectedChat, setSelectedChat] = useState(null);
//   const [isMobileChatOpen, setIsMobileChatOpen] = useState(false);

//   const handleSelectChat = (chat) => {
//     setSelectedChat(chat);
//     setIsMobileChatOpen(true);
//   };

//   const handleBack = () => {
//     setIsMobileChatOpen(false);
//   };
// return (
//   <div className="flex h-full w-full pb-14 md:pb-0">

//     {/* CHAT LIST */}
//     <div className={`
//       w-full md:w-[30%]
//       ${isMobileChatOpen ? "hidden md:block" : "block"}
//     `}>
//       <ChatList
//         selectedChat={selectedChat}
//         setSelectedChat={handleSelectChat}
//       />
//     </div>

//     {/* CHAT WINDOW */}
//     <div className={`
//       w-full md:w-[70%]
//       ${isMobileChatOpen ? "block" : "hidden md:block"}
//     `}>
//       <ChatWindow
//         selectedChat={selectedChat}
//         onBack={handleBack}
//       />
//     </div>

//     {/* 🔥 ADD THIS (IMPORTANT) */}
//     {/* MOBILE BOTTOM NAVBAR */}
// <div className="md:hidden">
//   <SideNav />
// </div>

//   </div>
// );
// }

// export default MessageLayout;



// "use client";

// import { useState } from "react";
// import ChatList from "../components/messages/ChatList";
// import ChatWindow from "../components/messages/ChatWindow";

// export default function MessageLayout() {
//   const [selectedChat, setSelectedChat] = useState(null);
//   const [isMobileChatOpen, setIsMobileChatOpen] = useState(false);
   
//   const handleSelectChat = (chat) => {
//     setSelectedChat(chat);
//     setIsMobileChatOpen(true);
//   };

//   const handleBack = () => {
//     setIsMobileChatOpen(false);
//   };

//   return (
//     <div className="relative h-full w-full pb-14 md:pb-0">

//       {/* CHAT AREA */}
//       <div className="flex h-full w-full">

//         {/* CHAT LIST */}
//         <div className={`
//           w-full md:w-[30%]
//           ${isMobileChatOpen ? "hidden md:block" : "block"}
//         `}>
//           <ChatList
//             selectedChat={selectedChat}
//             setSelectedChat={handleSelectChat}
//           />
//         </div>

//         {/* CHAT WINDOW */}
//         <div className={`
//           w-full md:w-[70%]
//           ${isMobileChatOpen ? "block" : "hidden md:block"}
//         `}>
//           <ChatWindow
//             selectedChat={selectedChat}
//             onBack={handleBack}
//           />
//         </div>

//       </div>


//     </div>
//   );
// }








"use client";

import { useState } from "react";
import ChatList from "../components/messages/ChatList";
import ChatWindow from "../components/messages/ChatWindow";
import MessageBottomNav from "../components/messages/MessageBottomNav";
export default function MessageLayout() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [isMobileChatOpen, setIsMobileChatOpen] = useState(false);
   const [activeTab, setActiveTab] = useState("messages");
  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
    setIsMobileChatOpen(true);
  };

  const handleBack = () => {
    setIsMobileChatOpen(false);
  };




return (
  <div className="flex h-full w-full md:pb-0">

    {/* CHAT LIST */}
    <div className={`
      w-full md:w-[30%]
      ${isMobileChatOpen ? "hidden md:block" : "block"}
    `}>
      <ChatList
        selectedChat={selectedChat}
        setSelectedChat={handleSelectChat}
      />
    </div>

    {/* CHAT WINDOW */}
    <div className={`
      w-full md:w-[70%]
      ${isMobileChatOpen ? "block" : "hidden md:block"}
    `}>
      <ChatWindow
        selectedChat={selectedChat}
        onBack={handleBack}
      />
    </div>

    {/* 🔥 NEW MESSAGE NAVBAR */}
    <MessageBottomNav
      onTabChange={(tab) => {
        setActiveTab(tab);

        if (tab === "list") {
          setIsMobileChatOpen(false);
        }

        if (tab === "messages") {
          if (selectedChat) {
            setIsMobileChatOpen(true);
          }
        }
      }}
    />

  </div>
);
}

