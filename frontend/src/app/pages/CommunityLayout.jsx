
// "use client";

// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// import CommunityBottomNav from "../components/community/CommunityBottomNav";
// import CommunityList from "../components/community/CommunityList";
// import CommunityChat from "../components/community/CommunityChat";
// import CommunityInfo from "../components/community/CommunityInfo";

// import {
//   getCommunity,
//   getCommunityMembers,
//   getCommunityStatus,
// } from "@/services/communityService";

// export default function CommunityLayout({
//   communityId,
// }) {

//   const [community, setCommunity] = useState(null);

//   const [members, setMembers] = useState([]);

//   const [messages, setMessages] = useState([]);

//   const [status, setStatus] = useState(null);

//   const [message, setMessage] = useState("");

//   const [mobileView, setMobileView] = useState("list");

//   const [showInfo, setShowInfo] = useState(false);

//   const [loading, setLoading] = useState(true);
//  const router = useRouter();

//   // ===============================
//   // LOAD COMMUNITY DATA
//   // ===============================

//   useEffect(() => {

//     const loadCommunity = async () => {

//       try {

//         console.log("START COMMUNITY");

//         const communityData =
//           await getCommunity(communityId);

//         console.log("COMMUNITY OK:", communityData);


//         console.log("START MEMBERS");

//         const memberData =
//           await getCommunityMembers(communityId);

//         console.log("MEMBERS OK:", memberData);


//         console.log("START STATUS");

//         const statusData =
//           await getCommunityStatus(communityId);

//         console.log("STATUS OK:", statusData);


//         setCommunity(communityData);

//         setMembers(memberData);

//         setStatus(statusData);


//       } catch (err) {

//         console.error(
//           "FAILED AT:",
//           err.message
//         );

//       } finally {

//         setLoading(false);

//       }

//     };


//     if (communityId) {
//       loadCommunity();
//     }


//   }, [communityId]);

// useEffect(() => {

//   const handleBack = () => {

//     if (
//       window.innerWidth < 768 &&
//       mobileView === "chat"
//     ) {

//       setMobileView("list");

//     }

//   };


//   window.addEventListener(
//     "popstate",
//     handleBack
//   );


//   return () => {
//     window.removeEventListener(
//       "popstate",
//       handleBack
//     );
//   };


// }, [mobileView]);

//   if (loading) {

//     return (
//       <div className="flex h-screen items-center justify-center">
//         Loading Community...
//       </div>
//     );

//   }



//   if (!community) {

//     return (
//       <div className="flex h-screen items-center justify-center">
//         Community not found.
//       </div>
//     );

//   }



//   return (

//     <div className="flex h-screen bg-white text-black dark:bg-black dark:text-white overflow-hidden">


//       {/* LEFT */}

//       <div
//         className={`w-full md:w-[300px] border-r border-gray-200 dark:border-gray-800 ${
//           mobileView === "chat"
//             ? "hidden md:block"
//             : "block"
//         }`}
//       >




// <CommunityList
//   community={community}
//   members={members}
//   status={status}
//   onOpenChat={() => {
//     router.push(`/community/${communityId}/chat`);
//   }}
//   onOpenInfo={() => setShowInfo(true)}
// />

//       </div>





//       {/* CHAT */}

//       <div

//         className={`flex-1 ${
//           mobileView === "list"
//             ? "hidden md:flex"
//             : "flex"
//         }`}

//       >


// <CommunityChat
//   community={community}
//   messages={messages}
//   message={message}
//   setMessage={setMessage}
//   onBack={() => setMobileView("list")}
//  mobileMode={false}
// />

//       </div>





//       {/* INFO */}


//       {showInfo && (

//         <div

//           className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50"

//           onClick={() => setShowInfo(false)}

//         >


//           <div

//             className="relative w-[90%] max-w-md rounded-xl bg-white dark:bg-black"

//             onClick={(e) => e.stopPropagation()}

//           >


//             <CommunityInfo

//               community={community}

//               isOwner={status?.owner}

//             />


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

//after communty chat inbuild 




"use client";

import { useRouter } from "next/navigation";
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


import {
  getCommunityMessages,
  connectCommunitySocket,
  subscribeCommunity,
  disconnectCommunitySocket,
} from "@/services/communityChatService";

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
 const router = useRouter();
// const openChat = () => {
//   window.history.pushState(
//     { chat: true },
//     "",
//     `/community/${communityId}/chat`
//   );

//   setMobileView("chat");
// };

// const openChat = () => {
//   window.history.pushState(
//     { chat: true },
//     "",
//     window.location.pathname
//   );

//   setMobileView("chat");
// };

const openChat = () => {
  if (window.innerWidth < 768) {
    router.push(`/community/${communityId}/chat`);
  }
};
  // ===============================
  // LOAD COMMUNITY DATA
  // ===============================

  useEffect(() => {

    const loadCommunity = async () => {

      try {

        console.log("START COMMUNITY");

        const communityData =
          await getCommunity(communityId);

        console.log("COMMUNITY OK:", communityData);


        console.log("START MEMBERS");

        const memberData =
          await getCommunityMembers(communityId);

        console.log("MEMBERS OK:", memberData);


        console.log("START STATUS");

        const statusData =
          await getCommunityStatus(communityId);

        console.log("STATUS OK:", statusData);


        setCommunity(communityData);

        setMembers(memberData);

        setStatus(statusData);


      } catch (err) {

        console.error(
          "FAILED AT:",
          err.message
        );

      } finally {

        setLoading(false);

      }

    };


    if (communityId) {
      loadCommunity();
    }


  }, [communityId]);


  useEffect(() => {

  if (!communityId) return;

  let subscription;

  const loadChat = async () => {

    try {

      // Load previous messages
      const oldMessages =
        await getCommunityMessages(
          communityId
        );

      setMessages(oldMessages);

      // Connect socket
      connectCommunitySocket(() => {

        subscription =
          subscribeCommunity(

            communityId,

            (newMessage) => {

              setMessages((prev) => [
                ...prev,
                newMessage,
              ]);

            }

          );

      });

    } catch (err) {

      console.error(err);

    }

  };

  loadChat();

  return () => {

    subscription?.unsubscribe();

    disconnectCommunitySocket();

  };

}, [communityId]); 



// useEffect(() => {

//   const handleBack = () => {

//     if (
//       window.innerWidth < 768 &&
//       mobileView === "chat"
//     ) {

//       setMobileView("list");

//     }

//   };


//   window.addEventListener(
//     "popstate",
//     handleBack
//   );


//   return () => {
//     window.removeEventListener(
//       "popstate",
//       handleBack
//     );
//   };


// }, [mobileView]);


useEffect(() => {

  const handleBack = () => {

    if (mobileView === "chat") {
      setMobileView("list");
    }

  };

  window.addEventListener("popstate", handleBack);

  return () => {
    window.removeEventListener("popstate", handleBack);
  };

}, [mobileView]);

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




{/* <CommunityList
  community={community}
  members={members}
  status={status}
  onOpenChat={() => {
    router.push(`/community/${communityId}/chat`);
  }}
  onOpenInfo={() => setShowInfo(true)}
/> */}

<CommunityList
  community={community}
  members={members}
  onOpenChat={openChat}
  // onOpenInfo={openInfo}
  onOpenInfo={() => setShowInfo(true)}
  onOpenProfile={(username)=> {
      router.push(`/profile/${username}`);
  }}
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
  communityId={communityId}
  messages={messages}
  message={message}
  setMessage={setMessage}
  onBack={() => setMobileView("list")}
  mobileMode={false}
/> 

      </div>





      {/* INFO */}


      {showInfo && (

        <div

          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50"

          onClick={() => setShowInfo(false)}

        >


          <div

            className="relative w-[90%] max-w-md rounded-xl bg-white dark:bg-black"

            onClick={(e) => e.stopPropagation()}

          >


            <CommunityInfo

              community={community}

              isOwner={status?.owner}

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