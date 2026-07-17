// "use client";

// import Image from "next/image";
// import { Search } from "lucide-react";

// function ChatList({ selectedChat, setSelectedChat }) {
//   // ======================================================
//   // TEMP DATA (replace with backend later)
//   // ======================================================
//   const chats = [
//     { id: 1, name: "Ansh", lastMessage: "Hey!", image: "/assets/user1.jpg" },
//     { id: 2, name: "Riya", lastMessage: "What's up?", image: "/assets/user2.jpg" },
//     { id: 3, name: "Rahul", lastMessage: "Let's code", image: "/assets/user3.jpg" },
//     { id: 4, name: "Neha", lastMessage: "Good night", image: "/assets/user4.jpg" },
//   ];

//   return (
//     <div className="w-full h-full flex flex-col border-r dark:border-gray-800">

//       {/* SEARCH */}
//       <div className="p-3 border-b dark:border-gray-800">
//         <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg">
//           <Search size={18} />
//           <input
//             placeholder="Search"
//             className="bg-transparent w-full outline-none text-sm"
//           />
//         </div>
//       </div>

//       {/* CHAT LIST */}
//       <div className="flex-1 overflow-y-auto">
//         {chats.map((chat) => (
//           <div
//             key={chat.id}
//             onClick={() => setSelectedChat(chat)}
//             className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${
//               selectedChat?.id === chat.id ? "bg-gray-200 dark:bg-gray-700" : ""
//             }`}
//           >
//             <Image
//               src={chat.image}
//               alt="user"
//               width={45}
//               height={45}
//               className="rounded-full"
//             />

//             <div className="flex flex-col">
//               <p className="text-sm font-semibold">{chat.name}</p>
//               <p className="text-xs text-gray-500 truncate">
//                 {chat.lastMessage}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ChatList;




// "use client";

// import Image from "next/image";
// import { Search } from "lucide-react";

// function ChatList({ selectedChat, setSelectedChat }) {
//   // ======================================================
//   // TEMP DATA (replace with backend later)
//   // ======================================================
//   const chats = [
//     { id: 1, name: "Ansh", lastMessage: "Hey!", image: "/assets/user1.jpg" },
//     { id: 2, name: "Riya", lastMessage: "What's up?", image: "/assets/user2.jpg" },
//     { id: 3, name: "Rahul", lastMessage: "Let's code", image: "/assets/user3.jpg" },
//     { id: 4, name: "Neha", lastMessage: "Good night", image: "/assets/user4.jpg" },
//   ];

//   return (
//     <div className="w-full h-full flex flex-col border-r dark:border-gray-800">

//       {/* SEARCH */}
//       <div className="p-3 h-[64px] border-b dark:border-gray-800">
//         <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg">
//           <Search size={18} />
//           <input
//             placeholder="Search"
//             className="bg-transparent w-full outline-none text-sm"
//           />
//         </div>
//       </div>

//       {/* CHAT LIST */}
//       <div className="flex-1 overflow-y-auto">
//         {chats.map((chat) => {

//           const isActive = selectedChat?.id === chat.id;

//           return (
//             <div
//               key={chat.id}
//               onClick={() => {
//                 // 🔥 prevents unnecessary state re-set
//                 if (selectedChat?.id === chat.id) return;
//                 setSelectedChat(chat);
//               }}
//               className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition ${
//                 isActive ? "bg-gray-200 dark:bg-gray-700" : ""
//               }`}
//             >
//               <Image
//                 src={chat.image}
//                 alt="user"
//                 width={45}
//                 height={45}
//                 className="rounded-full"
//               />

//               <div className="flex flex-col">
//                 <p className="text-sm font-semibold">{chat.name}</p>
//                 <p className="text-xs text-gray-500 truncate">
//                   {chat.lastMessage}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default ChatList;




// "use client";

// import Image from "next/image";
// import { Search,ArrowLeft} from "lucide-react";

// function ChatList({ selectedChat, setSelectedChat }) {
//   const chats = [
//     { id: 1, name: "Ansh", lastMessage: "Hey!", image: "/assets/user1.jpg" },
//     { id: 2, name: "Riya", lastMessage: "What's up?", image: "/assets/user2.jpg" },
//     { id: 3, name: "Rahul", lastMessage: "Let's code", image: "/assets/user3.jpg" },
//     { id: 4, name: "Neha", lastMessage: "Good night", image: "/assets/user4.jpg" },
//   ];

//   return (
//     <div className="w-full h-full flex flex-col border-r dark:border-gray-800">
         
     
//       {/* SEARCH */}
//       {/* <div className="p-3 h-[64px] border-b dark:border-gray-800">
//         <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg">
//           <Search size={18} />
//           <input
//             placeholder="Search"
//             className="bg-transparent w-full outline-none text-sm"
//           />
//         </div>
//       </div> */}
//       <div className="flex items-center gap-2 p-3 h-[65px] border-b dark:border-gray-800">
//   <ArrowLeft size={18} className="shrink-0 cursor-pointer" />
//   <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg flex-1">
//     <Search size={18} />
//     <input
//       placeholder="Search"
//       className="bg-transparent w-full outline-none text-sm"
//     />
//   </div>
// </div>

//       {/* LIST */}
//       <div className="flex-1 overflow-y-auto">
//         {chats.map((chat) => {
//           const isActive = selectedChat?.id === chat.id;

//           return (
//             <div
//               key={chat.id}
//               onClick={() => setSelectedChat(chat)}
//               className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition ${
//                 isActive ? "bg-gray-200 dark:bg-gray-700" : ""
//               }`}
//             >
//               <Image
//                 src={chat.image}
//                 alt="user"
//                 width={45}
//                 height={45}
//                 className="rounded-full"
//               />

//               <div>
//                 <p className="text-sm font-semibold">{chat.name}</p>
//                 <p className="text-xs text-gray-500 truncate">
//                   {chat.lastMessage}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default ChatList;



"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Search} from "lucide-react";
import { getConversations } from "@/services/chatService";

function ChatList({ selectedChat, setSelectedChat }) {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadChats();
  }, []);

  const loadChats = async () => {
    try {
      const data = await getConversations();

      const formatted = data.map((chat) => ({
        id: chat.roomId,
        roomId: chat.roomId,
        name: chat.username,
        image:
          chat.profileImage && chat.profileImage !== ""
            ? chat.profileImage
            : "/assets/default-avatar.png",
        lastMessage: chat.lastMessage,
        unreadCount: chat.unreadCount,
      }));

      setChats(formatted);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col border-r dark:border-gray-800">

      {/* Search */}
      <div className="flex items-center gap-2 p-3 h-[65px] border-b dark:border-gray-800">
        

        <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg flex-1">
          <Search size={18} />
          <input
            placeholder="Search"
            className="bg-transparent w-full outline-none text-sm"
          />
        </div>
      </div>

      {/* Conversations */}

      <div className="flex-1 overflow-y-auto">

        {loading && (
          <div className="p-4 text-center text-gray-500">
            Loading...
          </div>
        )}

        {!loading && chats.length === 0 && (
          <div className="p-4 text-center text-gray-500">
            No conversations yet.
          </div>
        )}

        {chats.map((chat) => {

          const isActive = selectedChat?.roomId === chat.roomId;

          return (
            <div
              key={chat.roomId}
              onClick={() => setSelectedChat(chat)}
              className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition ${
                isActive
                  ? "bg-gray-200 dark:bg-gray-700"
                  : ""
              }`}
            >
              <Image
                src={chat.image}
                alt={chat.name}
                width={45}
                height={45}
                className="rounded-full object-cover"
              />

              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-semibold">
                  {chat.name}
                </p>

                <p className="text-xs text-gray-500 truncate">
                  {chat.lastMessage}
                </p>
              </div>

              {chat.unreadCount > 0 && (
                <div className="w-5 h-5 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center">
                  {chat.unreadCount}
                </div>
              )}

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ChatList;