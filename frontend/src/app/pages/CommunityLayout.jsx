




// new version  

// "use client";

// import { useState } from "react";

// import CommunityList from "../components/community/CommunityList";
// import CommunityChat from "../components/community/CommunityChat";
// import CommunityInfo from "../components/community/CommunityInfo";

// /*
// |--------------------------------------------------------------------------
// | Demo Community Data
// |--------------------------------------------------------------------------
// | NOTE:
// | Later, all of this data should come from the backend.
// |
// | community.image      -> Community profile image
// | community.name       -> Community name
// | community.members    -> Number of members
// |
// | ownerImage           -> Community owner's profile image
// | ownerName            -> Community owner's name
// |--------------------------------------------------------------------------
// */

// const COMMUNITY = {
//   id: 1,

//   // Community information
//   name: "Community",
//   members: "1.2k",
//   image: "/assets/ankur.jpg",

//   // Community owner information
//   ownerName: "Ankur Sama",
//   ownerImage: "/assets/ankur.jpg",
// };

// /*
// |--------------------------------------------------------------------------
// | Demo Member List
// |--------------------------------------------------------------------------
// | Later this list will come from the backend.
// |--------------------------------------------------------------------------
// */
// const MEMBERS = [
//   {
//     id: 1,
//     name: "Ankur Sama",
//     image: "/assets/ankur.jpg",
//   },
//   {
//     id: 2,
//     name: "Riya",
//     image: "/assets/user1.jpg",
//   },
//   {
//     id: 3,
//     name: "Rahul",
//     image: "/assets/user2.jpg",
//   },
//   {
//     id: 4,
//     name: "Priya",
//     image: "/assets/user3.jpg",
//   },
//   {
//     id: 5,
//     name: "Aman",
//     image: "/assets/user4.jpg",
//   },
// ];

// /*
// |--------------------------------------------------------------------------
// | Demo Messages
// |--------------------------------------------------------------------------
// | Later this will come from backend/database.
// |--------------------------------------------------------------------------
// */
// const MESSAGES = [
//   {
//     id: 1,
//     user: "Riya",
//     text: "Hey everyone 👋",
//     image: "/assets/user1.jpg",
//     isOwn: false,
//   },
//   {
//     id: 2,
//     user: "Rahul",
//     text: "Welcome to the community!",
//     image: "/assets/user2.jpg",
//     isOwn: false,
//   },
//   {
//     id: 3,
//     user: "You",
//     text: "Happy to be here 🚀",
//     image: "/assets/ankur.jpg",
//     isOwn: true,
//   },
// ];
// export default function CommunityLayout() {
//   const [message, setMessage] = useState("");

//   // MOBILE VIEW STATE
//   const [mobileView, setMobileView] = useState("list"); 
//   // "list" | "chat"

//   return (
//     <div className="flex h-screen bg-white text-black dark:bg-black dark:text-white">

//       {/* LEFT - LIST */}
//       <div
//         className={`
//           w-full md:w-[300px]
//           border-r border-gray-200 dark:border-gray-800
//           ${mobileView === "chat" ? "hidden md:block" : "block"}
//         `}
//       >
//         <CommunityList
//           community={COMMUNITY}
//           members={MEMBERS}
//           onOpenChat={() => setMobileView("chat")}
//         />
//       </div>

//       {/* CENTER - CHAT */}
//       <div
//         className={`
//           flex-1
//           ${mobileView === "list" ? "hidden md:flex" : "flex"}
//         `}
//       >
//         <CommunityChat
//           community={COMMUNITY}
//           messages={MESSAGES}
//           message={message}
//           setMessage={setMessage}
//           onBack={() => setMobileView("list")}
//         />
//       </div>

//       {/* RIGHT - INFO (desktop only) */}
//       <div className="hidden lg:block w-[320px] border-l border-gray-200 dark:border-gray-800">
//         <CommunityInfo community={COMMUNITY} />
//       </div>

//     </div>
//   );
// }











// best version  


// "use client";

// import { useState } from "react";
// import CommunityBottomNav from "../components/community/CommunityBottomNav";
// import CommunityList from "../components/community/CommunityList";
// import CommunityChat from "../components/community/CommunityChat";
// import CommunityInfo from "../components/community/CommunityInfo";

// const COMMUNITY = {
//   id: 1,
//   name: "Community",
//   members: "1.2k",
//   image: "/assets/ankur.jpg",
//   ownerName: "Ankur Sama",
//   ownerImage: "/assets/ankur.jpg",
// };

// const MEMBERS = [
//   { id: 1, name: "Ankur Sama", image: "/assets/ankur.jpg" },
//   { id: 2, name: "Riya", image: "/assets/user1.jpg" },
//   { id: 3, name: "Rahul", image: "/assets/user2.jpg" },
//   { id: 4, name: "Priya", image: "/assets/user3.jpg" },
//   { id: 5, name: "Aman", image: "/assets/user4.jpg" },
// ];

// const MESSAGES = [
//   {
//     id: 1,
//     user: "Riya",
//     text: "Hey everyone 👋",
//     image: "/assets/user1.jpg",
//     isOwn: false,
//   },
//   {
//     id: 2,
//     user: "Rahul",
//     text: "Welcome to the community!",
//     image: "/assets/user2.jpg",
//     isOwn: false,
//   },
//   {
//     id: 3,
//     user: "You",
//     text: "Happy to be here 🚀",
//     image: "/assets/ankur.jpg",
//     isOwn: true,
//   },
// ];

// export default function CommunityLayout() {
//   const [message, setMessage] = useState("");
//   const [mobileView, setMobileView] = useState("list");

//   return (
//     <div className="flex h-screen bg-white text-black dark:bg-black dark:text-white  overflow-hidden">

//       {/* LEFT - LIST */}
//       <div
//         className={`
//           w-full md:w-[300px]
//           border-r border-gray-200 dark:border-gray-800
//           ${mobileView === "chat" ? "hidden md:block" : "block"}
//         `}
//       >
//         <CommunityList
//           community={COMMUNITY}
//           members={MEMBERS}
//           onOpenChat={() => setMobileView("chat")}
//           hideBackButton={true}   // ✅ IMPORTANT CHANGE
//         />
//       </div>

//       {/* CENTER - CHAT */}
//       <div
//         className={`
//           flex-1
//           ${mobileView === "list" ? "hidden md:flex" : "flex"}
//         `}
//       >
//         <CommunityChat
//           community={COMMUNITY}
//           messages={MESSAGES}
//           message={message}
//           setMessage={setMessage}
//           onBack={() => setMobileView("list")}
//         />
//       </div>
     

//       {/* RIGHT - INFO */}
//       <div className="hidden lg:block w-[320px] border-l border-gray-200 dark:border-gray-800">
//         <CommunityInfo community={COMMUNITY} />
//       </div>
//        <CommunityBottomNav
//   onOpenChat={() => setMobileView("chat")}
// />

//     </div>
//   );
// }


// neew version  

// "use client";

// import { useState } from "react";
// import CommunityBottomNav from "../components/community/CommunityBottomNav";
// import CommunityList from "../components/community/CommunityList";
// import CommunityChat from "../components/community/CommunityChat";
// import CommunityInfo from "../components/community/CommunityInfo";

// const COMMUNITY = {
//   id: 1,
//   name: "Community",
//   members: "1.2k",
//   image: "/assets/ankur.jpg",
//   ownerName: "Ankur Sama",
//   ownerImage: "/assets/ankur.jpg",
// };

// const MEMBERS = [
//   { id: 1, name: "Ankur Sama", image: "/assets/ankur.jpg" },
//   { id: 2, name: "Riya", image: "/assets/user1.jpg" },
//   { id: 3, name: "Rahul", image: "/assets/user2.jpg" },
//   { id: 4, name: "Priya", image: "/assets/user3.jpg" },
//   { id: 5, name: "Aman", image: "/assets/user4.jpg" },
// ];

// const MESSAGES = [
//   {
//     id: 1,
//     user: "Riya",
//     text: "Hey everyone 👋",
//     image: "/assets/user1.jpg",
//     isOwn: false,
//   },
//   {
//     id: 2,
//     user: "Rahul",
//     text: "Welcome to the community!",
//     image: "/assets/user2.jpg",
//     isOwn: false,
//   },
//   {
//     id: 3,
//     user: "You",
//     text: "Happy to be here 🚀",
//     image: "/assets/ankur.jpg",
//     isOwn: true,
//   },
// ];

// export default function CommunityLayout() {
//   const [message, setMessage] = useState("");
//   const [mobileView, setMobileView] = useState("list");
//   const [showInfo, setShowInfo] = useState(false);

//   return (
//     <div className="flex h-screen bg-white text-black dark:bg-black dark:text-white overflow-hidden">

//       {/* LEFT - LIST */}
//       <div
//         className={`
//           w-full md:w-[300px]
//           border-r border-gray-200 dark:border-gray-800
//           ${mobileView === "chat" ? "hidden md:block" : "block"}
//         `}
//       >
//         <CommunityList
//           community={COMMUNITY}
//           members={MEMBERS}
//           onOpenChat={() => setMobileView("chat")}
//           onOpenInfo={() => setShowInfo(true)}
//           hideBackButton={true}
//         />
//       </div>

//       {/* CENTER - CHAT */}
//       <div
//         className={`
//           flex-1
//           ${mobileView === "list" ? "hidden md:flex" : "flex"}
//         `}
//       >
//         <CommunityChat
//           community={COMMUNITY}
//           messages={MESSAGES}
//           message={message}
//           setMessage={setMessage}
//           onBack={() => setMobileView("list")}
//         />
//       </div>

//       {/* RIGHT - INFO (DESKTOP) */}
//       <div className="hidden lg:block w-[320px] border-l border-gray-200 dark:border-gray-800">
//         <CommunityInfo community={COMMUNITY} />
//       </div>

//       {/* MOBILE BOTTOM NAV */}
//       <CommunityBottomNav
//         onOpenChat={() => setMobileView("chat")}
//       />

//       {/* INFO MODAL */}
//       {showInfo && (
//         <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50">
//           <div className="w-[90%] max-w-md bg-white dark:bg-black rounded-xl shadow-lg relative">

//             <button
//               onClick={() => setShowInfo(false)}
//               className="absolute top-2 right-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
//             >
//               ✕
//             </button>

//             <CommunityInfo community={COMMUNITY} />
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }







// best advance version  



// "use client";

// import { useState } from "react";
// import CommunityBottomNav from "../components/community/CommunityBottomNav";
// import CommunityList from "../components/community/CommunityList";
// import CommunityChat from "../components/community/CommunityChat";
// import CommunityInfo from "../components/community/CommunityInfo";

// const COMMUNITY = {
//   id: 1,
//   name: "Community",
//   members: "1.2k",
//   image: "/assets/ankur.jpg",
//   ownerName: "Ankur Sama",
//   ownerImage: "/assets/ankur.jpg",
// };

// const MEMBERS = [
//   { id: 1, name: "Ankur Sama", image: "/assets/ankur.jpg" },
//   { id: 2, name: "Riya", image: "/assets/user1.jpg" },
//   { id: 3, name: "Rahul", image: "/assets/user2.jpg" },
//   { id: 4, name: "Priya", image: "/assets/user3.jpg" },
//   { id: 5, name: "Aman", image: "/assets/user4.jpg" },
// ];

// const MESSAGES = [
//   {
//     id: 1,
//     user: "Riya",
//     text: "Hey everyone 👋",
//     image: "/assets/user1.jpg",
//     isOwn: false,
//   },
//   {
//     id: 2,
//     user: "Rahul",
//     text: "Welcome to the community!",
//     image: "/assets/user2.jpg",
//     isOwn: false,
//   },
//   {
//     id: 3,
//     user: "You",
//     text: "Happy to be here 🚀",
//     image: "/assets/ankur.jpg",
//     isOwn: true,
//   },
// ];
// export default function CommunityLayout({
//   communityId,
// }) {
//   const [message, setMessage] = useState("");
//   const [mobileView, setMobileView] = useState("list");
//   const [showInfo, setShowInfo] = useState(false);

//   return (
//     <div className="flex h-screen bg-white text-black dark:bg-black dark:text-white overflow-hidden">

//       {/* LEFT */}
//       <div
//         className={`w-full md:w-[300px] border-r border-gray-200 dark:border-gray-800 ${
//           mobileView === "chat" ? "hidden md:block" : "block"
//         }`}
//       >
//         <CommunityList
//           community={COMMUNITY}
//           members={MEMBERS}
//           onOpenChat={() => setMobileView("chat")}
//           onOpenInfo={() => setShowInfo(true)}   // ✅ FIX HERE
//         />
//       </div>

//       {/* CHAT */}
//       <div
//         className={`flex-1 ${
//           mobileView === "list" ? "hidden md:flex" : "flex"
//         }`}
//       >
//         <CommunityChat
//           community={COMMUNITY}
//           messages={MESSAGES}
//           message={message}
//           setMessage={setMessage}
//           onBack={() => setMobileView("list")}
//         />
//       </div>

//       {/* INFO MODAL */}
//       {showInfo && (
//         <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50">
//           <div className="w-[90%] max-w-md rounded-xl bg-white dark:bg-black relative">

//             <button
//               onClick={() => setShowInfo(false)}
//               className="absolute  text-black top-3 right-3 p-2"
//             >
//               ✕
//             </button>

//             <CommunityInfo community={COMMUNITY} />
//           </div>
//         </div>
//       )}

//       {/* BOTTOM NAV */}
//       <CommunityBottomNav
//         onOpenChat={() => setMobileView("chat")}
//       />
//     </div>
//   );
// }





"use client";

import { useEffect, useState } from "react";

import CommunityBottomNav from "../components/community/CommunityBottomNav";
import CommunityList from "../components/community/CommunityList";
import CommunityChat from "../components/community/CommunityChat";
import CommunityInfo from "../components/community/CommunityInfo";

import {
  getCommunity,
  getCommunityMembers,
  getCommunityStatus,
} from "@/services/communityService";

export default function CommunityLayout({
  communityId,
}) {
  const [community, setCommunity] = useState(null);

  const [members, setMembers] = useState([]);

  const [messages, setMessages] = useState([]);

  const [status, setStatus] = useState(null);

  const [message, setMessage] = useState("");

  const [mobileView, setMobileView] = useState("list");

  const [showInfo, setShowInfo] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCommunity = async () => {
      try {
        const communityData =
          await getCommunity(communityId);

        const memberData =
          await getCommunityMembers(communityId);

        const statusData =
          await getCommunityStatus(communityId);

        setCommunity(communityData);

        setMembers(memberData);

        setStatus(statusData);

      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (communityId) {
      loadCommunity();
    }

  }, [communityId]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading Community...
      </div>
    );
  }

  if (!community) {
    return (
      <div className="flex h-screen items-center justify-center">
        Community not found.
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-white text-black dark:bg-black dark:text-white overflow-hidden">

      {/* LEFT */}

      <div
        className={`w-full md:w-[300px] border-r border-gray-200 dark:border-gray-800 ${
          mobileView === "chat"
            ? "hidden md:block"
            : "block"
        }`}
      >

        <CommunityList
          community={community}
          members={members}
          status={status}
          onOpenChat={() => setMobileView("chat")}
          onOpenInfo={() => setShowInfo(true)}
        />

      </div>

      {/* CHAT */}

      <div
        className={`flex-1 ${
          mobileView === "list"
            ? "hidden md:flex"
            : "flex"
        }`}
      >

        <CommunityChat
          community={community}
          messages={messages}
          message={message}
          setMessage={setMessage}
          onBack={() => setMobileView("list")}
        />

      </div>

      {/* INFO */}

      {showInfo && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50">

          <div className="w-[90%] max-w-md rounded-xl bg-white dark:bg-black relative">

            <button
              onClick={() => setShowInfo(false)}
              className="absolute top-3 right-3 p-2 text-black dark:text-white"
            >
              ✕
            </button>

            <CommunityInfo
              community={community}
              status={status}
            />

          </div>

        </div>
      )}

      {/* BOTTOM NAV */}

      <CommunityBottomNav
        onOpenChat={() => setMobileView("chat")}
      />

    </div>
  );
}