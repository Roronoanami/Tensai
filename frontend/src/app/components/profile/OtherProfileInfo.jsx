

// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import {
//   ExternalLink,
//   UserPlus,
//   Users,
//   Flag,
//   Send,
// } from "lucide-react";

// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem,
// } from "@/components/ui/dropdown-menu";

// export default function OtherProfileInfo({ profile }) {
  
//   const [isFollowing, setIsFollowing] = useState(false);
// const [followers, setFollowers] = useState(0);
// const [following, setFollowing] = useState(0);
// useEffect(() => {
//   if (!profile?.username) return;

//   const token = localStorage.getItem("token");

//   const headers = token
//     ? {
//         Authorization: `Bearer ${token}`,
//       }
//     : {};

//   const loadData = async () => {
//     try {
//       // Follow status
//       const statusRes = await fetch(
//         `http://localhost:8081/api/follow/status/${profile.username}`,
//         { headers }
//       );

//       if (statusRes.ok) {
//         const status = await statusRes.json();
//         setIsFollowing(status.following);
//       }

//       // Followers count
//       const followerRes = await fetch(
//         `http://localhost:8081/api/follow/followers/${profile.username}`
//       );

//       if (followerRes.ok) {
//         const data = await followerRes.json();
//         setFollowers(data.followers);
//       }

//       // Following count
//       const followingRes = await fetch(
//         `http://localhost:8081/api/follow/following/${profile.username}`
//       );

//       if (followingRes.ok) {
//         const data = await followingRes.json();
//         setFollowing(data.following);
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   loadData();
// }, [profile]);

// const handleFollow = async () => {
//   const token = localStorage.getItem("token");

//   try {
//     const response = await fetch(
//       `http://localhost:8081/api/follow/${profile.username}`,
//       {
//         method: isFollowing ? "DELETE" : "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     if (!response.ok) return;
// if (isFollowing) {
//   setIsFollowing(false);
//   setFollowers((prev) => Math.max(0, prev - 1));
// } else {
//   setIsFollowing(true);
//   setFollowers((prev) => prev + 1);
// }
//   } catch (err) {
//     console.error(err);
//   }
// };
//   // ================= NO PROFILE =================
//   if (!profile) {
//     return (
//       <div className="p-6 text-white">
//         Profile not found
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-5xl mx-auto mt-4 px-3 md:px-4 text-white">
//       <div className="overflow-hidden rounded-2xl border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-black shadow-md pb-6">

//         {/* ================= COVER ================= */}
//         <div className="relative">
//           <div className="h-48 w-full overflow-hidden bg-gray-200 dark:bg-gray-800">
//             <Image
//               src={profile.coverImage || "/assets/cover.png"}
//               alt="Cover"
//               width={1200}
//               height={300}
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* ================= PROFILE IMAGE ================= */}
//           <div className="absolute left-6 -bottom-12">
//             <div className="w-24 h-24 rounded-full border-4 border-white dark:border-black overflow-hidden">
//               <Image
//                 src={profile.profileImage || "/assets/user.png"}
//                 alt="Profile"
//                 width={96}
//                 height={96}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>

//         {/* ================= PROFILE INFO ================= */}
//         <div className="mt-16 px-4">

//           <h1 className="text-3xl font-bold text-black dark:text-white">
//             {profile.firstName} {profile.lastName}
//           </h1>

//           <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
//             {profile.headline}
//           </p>

//           <div className="mt-2 flex flex-wrap items-center gap-4 text-sm">
//             <span className="text-gray-500 dark:text-gray-400">
//               {[profile.city, profile.state, profile.country]
//                 .filter(Boolean)
//                 .join(", ")}
//             </span>

//             <button className="text-blue-600 hover:underline">
//               Contact info
//             </button>
//           </div>

//           {profile.websiteUrl && (
//             <a
//               href={profile.websiteUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mt-2 flex items-center gap-1 text-sm text-blue-600 hover:underline"
//             >
//               <ExternalLink size={14} />
//               Portfolio
//             </a>
//           )}

//           <div className="mt-2 flex gap-4">
//             <p className="text-sm font-medium text-blue-600 cursor-pointer">
//              {following} connections
//             </p>

//             <p className="text-sm font-medium text-blue-600 cursor-pointer">
//               {followers} followers
//             </p>
//           </div>

//           {/* ================= ACTION BUTTONS ================= */}
//           <div className="mt-5 flex flex-wrap gap-3">

//             <button className="flex items-center gap-2 rounded-full bg-blue-700 px-5 py-2 text-sm text-white hover:bg-blue-800">
//               <Send size={15} />
//               <span>Message</span>
//             </button>

//             <DropdownMenu>

//               <DropdownMenuTrigger asChild>
//                 <button className="flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-700 px-5 py-2 text-sm transition hover:bg-gray-100 dark:hover:bg-gray-900">
//                   More
//                 </button>
//               </DropdownMenuTrigger>

//               <DropdownMenuContent align="start" className="w-48">

//                 <DropdownMenuItem
//   className="cursor-pointer"
//   onClick={handleFollow}
// >
//   <UserPlus size={16} className="mr-2" />
//   {isFollowing ? "Unfollow" : "Follow"}
// </DropdownMenuItem>

//                 <DropdownMenuItem className="cursor-pointer">
//                   <Users size={16} className="mr-2" />
//                   Connect
//                 </DropdownMenuItem>

//                 <DropdownMenuItem className="cursor-pointer text-red-500 focus:text-red-500">
//                   <Flag size={16} className="mr-2" />
//                   Report
//                 </DropdownMenuItem>

//               </DropdownMenuContent>

//             </DropdownMenu>

//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }






// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import {
//   ExternalLink,
//   UserPlus,
//   Users,
//   Flag,
//   Send,
// } from "lucide-react";

// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem,
// } from "@/components/ui/dropdown-menu";

// export default function OtherProfileInfo({ profile }) {
  
// const [isFollowing, setIsFollowing] = useState(false);
// const [followers, setFollowers] = useState(0);
// const [following, setFollowing] = useState(0);
// const [connectionStatus, setConnectionStatus] = useState("NONE");
// useEffect(() => {
//   if (!profile?.username) return;

//   const token = localStorage.getItem("token");

//   const headers = token
//     ? {
//         Authorization: `Bearer ${token}`,
//       }
//     : {};

//   const loadData = async () => {
//     try {
//       // Follow status
//       const statusRes = await fetch(
//         `http://localhost:8081/api/follow/status/${profile.username}`,
//         { headers }
//       );

//       if (statusRes.ok) {
//         const status = await statusRes.json();
//         setIsFollowing(status.following);
//       }

//       // Connection status
// const connectionRes = await fetch(
//   `http://localhost:8081/api/connection/status/${profile.username}`,
//   {
//     headers
//   }
// );


// if(connectionRes.ok){

//   const connectionData = await connectionRes.json();

//   setConnectionStatus(connectionData.status);

// }

//       // Followers count
//       const followerRes = await fetch(
//         `http://localhost:8081/api/follow/followers/${profile.username}`
//       );

//       if (followerRes.ok) {
//         const data = await followerRes.json();
//         setFollowers(data.followers);
//       }

//       // Following count
//       const followingRes = await fetch(
//         `http://localhost:8081/api/follow/following/${profile.username}`
//       );

//       if (followingRes.ok) {
//         const data = await followingRes.json();
//         setFollowing(data.following);
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   loadData();
// }, [profile]);





// const handleConnect = async () => {

//   const token = localStorage.getItem("token");

//   try {

//     const response = await fetch(
//       `http://localhost:8081/api/connection/request/${profile.username}`,
//       {
//         method:"POST",
//         headers:{
//           Authorization:`Bearer ${token}`
//         }
//       }
//     );


//     if(!response.ok){

//       const error = await response.text();

//       console.log(error);

//       return;
//     }


//     setConnectionStatus("PENDING");


//     console.log(
//       "Connection request sent"
//     );


//   } catch(error){

//     console.error(error);

//   }

// };   

// const handleFollow = async () => {

//   const token = localStorage.getItem("token");

//   try {

//     const response = await fetch(
//       `http://localhost:8081/api/follow/${profile.username}`,
//       {
//         method: isFollowing ? "DELETE" : "POST",
//         headers:{
//           Authorization:`Bearer ${token}`
//         }
//       }
//     );


//     if(!response.ok){
//       console.log(await response.text());
//       return;
//     }


//     // reload follow data
//     const followerRes = await fetch(
//       `http://localhost:8081/api/follow/followers/${profile.username}`
//     );

//     if(followerRes.ok){

//       const data = await followerRes.json();

//       setFollowers(data.followers);

//     }


//     setIsFollowing(!isFollowing);


//   } catch(error){

//     console.error(error);

//   }

// };
//   // ================= NO PROFILE =================
//   if (!profile) {
//     return (
//       <div className="p-6 text-white">
//         Profile not found
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-5xl mx-auto mt-4 px-3 md:px-4 text-white">
//       <div className="overflow-hidden rounded-2xl border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-black shadow-md pb-6">

//         {/* ================= COVER ================= */}
//         <div className="relative">
//           <div className="h-48 w-full overflow-hidden bg-gray-200 dark:bg-gray-800">
//             <Image
//               src={profile.coverImage || "/assets/cover.png"}
//               alt="Cover"
//               width={1200}
//               height={300}
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* ================= PROFILE IMAGE ================= */}
//           <div className="absolute left-6 -bottom-12">
//             <div className="w-24 h-24 rounded-full border-4 border-white dark:border-black overflow-hidden">
//               <Image
//                 src={profile.profileImage || "/assets/user.png"}
//                 alt="Profile"
//                 width={96}
//                 height={96}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>

//         {/* ================= PROFILE INFO ================= */}
//         <div className="mt-16 px-4">

//           <h1 className="text-3xl font-bold text-black dark:text-white">
//             {profile.firstName} {profile.lastName}
//           </h1>

//           <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
//             {profile.headline}
//           </p>

//           <div className="mt-2 flex flex-wrap items-center gap-4 text-sm">
//             <span className="text-gray-500 dark:text-gray-400">
//               {[profile.city, profile.state, profile.country]
//                 .filter(Boolean)
//                 .join(", ")}
//             </span>

//             <button className="text-blue-600 hover:underline">
//               Contact info
//             </button>
//           </div>

//           {profile.websiteUrl && (
//             <a
//               href={profile.websiteUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mt-2 flex items-center gap-1 text-sm text-blue-600 hover:underline"
//             >
//               <ExternalLink size={14} />
//               Portfolio
//             </a>
//           )}

//           <div className="mt-2 flex gap-4">
//             <p className="text-sm font-medium text-blue-600 cursor-pointer">
//              {following} connections
//             </p>

//             <p className="text-sm font-medium text-blue-600 cursor-pointer">
//               {followers} followers
//             </p>
//           </div>

//           {/* ================= ACTION BUTTONS ================= */}
//           <div className="mt-5 flex flex-wrap gap-3">

//             <button className="flex items-center gap-2 rounded-full bg-blue-700 px-5 py-2 text-sm text-white hover:bg-blue-800">
//               <Send size={15} />
//               <span>Message</span>
//             </button>

//             <DropdownMenu>

//               <DropdownMenuTrigger asChild>
//                 <button className="flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-700 px-5 py-2 text-sm transition hover:bg-gray-100 dark:hover:bg-gray-900">
//                   More
//                 </button>
//               </DropdownMenuTrigger>

//               <DropdownMenuContent align="start" className="w-48">

//                 <DropdownMenuItem
//   className="cursor-pointer"
//   onClick={handleFollow}
// >
//   <UserPlus size={16} className="mr-2" />
//   {isFollowing ? "Unfollow" : "Follow"}
// </DropdownMenuItem>

                
//                 <DropdownMenuItem
//   className="cursor-pointer"
//   onClick={handleConnect}
// >

//   <Users size={16} className="mr-2" />

//   {
//     connectionStatus === "PENDING"
//     ? "Request Sent"
//     : connectionStatus === "CONNECTED"
//     ? "Connected"
//     : "Connect"
//   }

// </DropdownMenuItem>

//                 <DropdownMenuItem className="cursor-pointer text-red-500 focus:text-red-500">
//                   <Flag size={16} className="mr-2" />
//                   Report
//                 </DropdownMenuItem>

//               </DropdownMenuContent>

//             </DropdownMenu>

//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }






"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ExternalLink,
  UserPlus,
  Users,
  Flag,
  Send,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function OtherProfileInfo({ profile }) {
 const [isFollowing, setIsFollowing] = useState(false);
const [followers, setFollowers] =useState(0);
const [following, setFollowing] = useState(0);
const [connections, setConnections] = useState(0);
const [connectionStatus, setConnectionStatus] = useState("NONE");
useEffect(() => {
  if (!profile?.username) return;

  const token = localStorage.getItem("token");

  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};

const loadData = async () => {
  try {
    // Follow status
    const statusRes = await fetch(
      `http://localhost:8081/api/follow/status/${profile.username}`,
      { headers }
    );

    if (statusRes.ok) {
      const status = await statusRes.json();
      setIsFollowing(status.following);
    }

    // Connection status
    const connectionRes = await fetch(
      `http://localhost:8081/api/connection/status/${profile.username}`,
      {
        headers,
      }
    );

    if (connectionRes.ok) {
      const connectionData = await connectionRes.json();
      setConnectionStatus(connectionData.status);
    }

    // Followers count
    const followerRes = await fetch(
      `http://localhost:8081/api/follow/followers/${profile.username}`
    );

    if (followerRes.ok) {
      const data = await followerRes.json();
      setFollowers(data.count);
    }

    // Following count
    const followingRes = await fetch(
      `http://localhost:8081/api/follow/following/${profile.username}`
    );

    if (followingRes.ok) {
      const data = await followingRes.json();
      setFollowing(data.count);
    }

    // Connection count
    const connectionCountRes = await fetch(
      `http://localhost:8081/api/connection/count/${profile.username}`,
      {
        headers,
      }
    );

    if (connectionCountRes.ok) {
      const data = await connectionCountRes.json();
      setConnections(data.count);
    }
  } catch (err) {
    console.error(err);
  }
};

  loadData();
}, [profile]);





const handleConnect = async () => {

  const token = localStorage.getItem("token");

  try {

    const response = await fetch(
      `http://localhost:8081/api/connection/request/${profile.username}`,
      {
        method:"POST",
        headers:{
          Authorization:`Bearer ${token}`
        }
      }
    );


    if(!response.ok){

      const error = await response.text();

      console.log(error);

      return;
    }


    setConnectionStatus("PENDING");


    console.log(
      "Connection request sent"
    );


  } catch(error){

    console.error(error);

  }

};   

const handleFollow = async () => {

  const token = localStorage.getItem("token");

  try {

    const response = await fetch(
      `http://localhost:8081/api/follow/${profile.username}`,
      {
        method: isFollowing ? "DELETE" : "POST",
        headers:{
          Authorization:`Bearer ${token}`
        }
      }
    );


    if(!response.ok){
      console.log(await response.text());
      return;
    }


    // reload follow data
    const followerRes = await fetch(
      `http://localhost:8081/api/follow/followers/${profile.username}`
    );

    if(followerRes.ok){

      const data = await followerRes.json();

     setFollowers(data.count);

    }


    setIsFollowing(!isFollowing);


  } catch(error){

    console.error(error);

  }

};
  // ================= NO PROFILE =================
  if (!profile) {
    return (
      <div className="p-6 text-white">
        Profile not found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-4 px-3 md:px-4 text-white">
      <div className="overflow-hidden rounded-2xl border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-black shadow-md pb-6">

        {/* ================= COVER ================= */}
        <div className="relative">
          <div className="h-48 w-full overflow-hidden bg-gray-200 dark:bg-gray-800">
            <Image
              src={profile.coverImage || "/assets/cover.png"}
              alt="Cover"
              width={1200}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          {/* ================= PROFILE IMAGE ================= */}
          <div className="absolute left-6 -bottom-12">
            <div className="w-24 h-24 rounded-full border-4 border-white dark:border-black overflow-hidden">
              <Image
                src={profile.profileImage || "/assets/user.png"}
                alt="Profile"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* ================= PROFILE INFO ================= */}
        <div className="mt-16 px-4">

          <h1 className="text-3xl font-bold text-black dark:text-white">
            {profile.firstName} {profile.lastName}
          </h1>

          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {profile.headline}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-4 text-sm">
            <span className="text-gray-500 dark:text-gray-400">
              {[profile.city, profile.state, profile.country]
                .filter(Boolean)
                .join(", ")}
            </span>

            <button className="text-blue-600 hover:underline">
              Contact info
            </button>
          </div>

          {profile.websiteUrl && (
            <a
              href={profile.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-1 text-sm text-blue-600 hover:underline"
            >
              <ExternalLink size={14} />
              Portfolio
            </a>
          )}

<div className="mt-2 flex gap-4">
  <p className="text-sm font-medium text-blue-600 cursor-pointer">
    {connections} connections
  </p>

  <p className="text-sm font-medium text-blue-600 cursor-pointer">
    {followers} followers
  </p>
</div>

          {/* ================= ACTION BUTTONS ================= */}
          <div className="mt-5 flex flex-wrap gap-3">

            <button className="flex items-center gap-2 rounded-full bg-blue-700 px-5 py-2 text-sm text-white hover:bg-blue-800">
              <Send size={15} />
              <span>Message</span>
            </button>

            <DropdownMenu>

              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-700 px-5 py-2 text-sm transition hover:bg-gray-100 dark:hover:bg-gray-900">
                  More
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="start" className="w-48">

                <DropdownMenuItem
  className="cursor-pointer"
  onClick={handleFollow}
>
  <UserPlus size={16} className="mr-2" />
  {isFollowing ? "Unfollow" : "Follow"}
</DropdownMenuItem>

                
                <DropdownMenuItem
  className="cursor-pointer"
  onClick={handleConnect}
>

  <Users size={16} className="mr-2" />

  {
    connectionStatus === "PENDING"
    ? "Request Sent"
    : connectionStatus === "CONNECTED"
    ? "Connected"
    : "Connect"
  }

</DropdownMenuItem>

                <DropdownMenuItem className="cursor-pointer text-red-500 focus:text-red-500">
                  <Flag size={16} className="mr-2" />
                  Report
                </DropdownMenuItem>

              </DropdownMenuContent>

            </DropdownMenu>

          </div>

        </div>
      </div>
    </div>
  );
}