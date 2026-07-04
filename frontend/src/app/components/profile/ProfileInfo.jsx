///   good version 


//     "use client";

// import Image from "next/image";
// import { ExternalLink } from "lucide-react";
// import {
//   UserPlus,
//   Users,
//   MessageCircle,
//   Flag,
//   ChevronDown,
// } from "lucide-react";

// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem,
// } from "@/components/ui/dropdown-menu";
// export default function ProfileInfo({ onOpenEnhance }) {
//   return (
//     <>
//       {/* ================= COVER ================= */}
//       <div className="relative">
//         <div className="h-48 w-full overflow-hidden bg-gray-200 dark:bg-gray-800">
//           <Image
//             src="/assets/girl.jpg"
//             alt="Cover"
//             width={1200}
//             height={300}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* PROFILE IMAGE */}
//         <div className="absolute left-6 -bottom-12">
//           <div className="w-24 h-24 rounded-full border-4 border-white dark:border-black overflow-hidden">
//             <Image
//               src="/assets/ankur.jpg"
//               alt="Profile"
//               width={96}
//               height={96}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>

//       {/* ================= PROFILE INFO ================= */}
//       <div className="mt-16 px-4">

//         {/* NAME */}
//         <h1 className="text-3xl font-bold">
//           Ansh Verma
//         </h1>

//         {/* HEADLINE */}
//         <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
//           Undergraduate IT Engineer • React • DSA • Web Development
//         </p>

//         {/* LOCATION + CONTACT */}
//         <div className="mt-2 flex flex-wrap items-center gap-4 text-sm">

//           <span className="text-gray-500 dark:text-gray-400">
//             Lucknow, Uttar Pradesh, India
//           </span>

//           <button className="text-blue-600 hover:underline">
//             Contact info
//           </button>

//         </div>

//         {/* PORTFOLIO */}
//         <button className="mt-2 flex items-center gap-1 text-sm text-blue-600 hover:underline">
//           <ExternalLink size={14} />
//           Portfolio / Website
//         </button>

//         {/* CONNECTIONS */}
//         <p className="mt-2 text-sm font-medium text-blue-600 cursor-pointer">
//           36 connections
//         </p>

//         {/* ACTION BUTTONS */}
//         <div className="mt-5 flex flex-wrap gap-3">

//           <button
//             onClick={onOpenEnhance}
//             className="rounded-full bg-blue-700 px-5 py-2 text-sm text-white transition hover:bg-blue-800"
//           >
//             Enhance profile
//           </button>

//                     <DropdownMenu>
//   <DropdownMenuTrigger asChild>
//     <button
//       className="
//         flex items-center gap-2
//         rounded-full
//         border
//         border-gray-300
//         dark:border-gray-700
//         px-5
//         py-2
//         text-sm
//         hover:bg-gray-100
//         dark:hover:bg-gray-800
//         transition
//       "
//     >
//       More
    
//     </button>
//   </DropdownMenuTrigger>

//   <DropdownMenuContent align="start" className="w-48">

//     <DropdownMenuItem className="cursor-pointer">
//       <UserPlus size={16} className="mr-2" />
//       Follow
//     </DropdownMenuItem>

//     <DropdownMenuItem className="cursor-pointer">
//       <Users size={16} className="mr-2" />
//       Connect
//     </DropdownMenuItem>

//     <DropdownMenuItem className="cursor-pointer">
//       <MessageCircle size={16} className="mr-2" />
//       Message
//     </DropdownMenuItem>

//     <DropdownMenuItem className="cursor-pointer text-red-500 focus:text-red-500">
//       <Flag size={16} className="mr-2" />
//       Report
//     </DropdownMenuItem>

//   </DropdownMenuContent>
// </DropdownMenu>

//         </div>

//       </div>
//     </>
//   );
// }          





// new verion 



//     "use client";

// import Image from "next/image";
// import { ExternalLink } from "lucide-react";
// import {
//   UserPlus,
//   Users,
//   MessageCircle,
//   Flag,
//   ChevronDown,
// } from "lucide-react";

// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem,
// } from "@/components/ui/dropdown-menu";
// export default function ProfileInfo({ onOpenEnhance }) {
//   return (
//     <div className="max-w-5x1  mx-auto mt-4 px-3 md:px-4">
//   < div className="
//   overflow-hidden
//   rounded-2xl
//   border-2
//   border-gray-300
//   dark:border-gray-700
//   bg-white
//   dark:bg-black
//   shadow-md
//   pb-6
// ">
//       {/* ================= COVER ================= */}
//       <div className="relative">
//         <div className="h-48 w-full overflow-hidden bg-gray-200 dark:bg-gray-800">
//           <Image
//             src="/assets/girl.jpg"
//             alt="Cover"
//             width={1200}
//             height={300}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* PROFILE IMAGE */}
//         <div className="absolute left-6 -bottom-12">
//           <div className="w-24 h-24 rounded-full border-4 border-white dark:border-black overflow-hidden">
//             <Image
//               src="/assets/ankur.jpg"
//               alt="Profile"
//               width={96}
//               height={96}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>

//       {/* ================= PROFILE INFO ================= */}
//       <div className="mt-16 px-4">

//         {/* NAME */}
//         <h1 className="text-3xl font-bold">
//           Ansh Verma
//         </h1>

//         {/* HEADLINE */}
//         <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
//           Undergraduate IT Engineer • React • DSA • Web Development
//         </p>

//         {/* LOCATION + CONTACT */}
//         <div className="mt-2 flex flex-wrap items-center gap-4 text-sm">

//           <span className="text-gray-500 dark:text-gray-400">
//             Lucknow, Uttar Pradesh, India
//           </span>
//           <button className="text-blue-600 hover:underline">
//             Contact info
//           </button>
          

//         </div>

//         {/* PORTFOLIO */}
//         <button className="mt-2 flex items-center gap-1 text-sm text-blue-600 hover:underline">
//           <ExternalLink size={14} />
//           Portfolio / Website
//         </button>

//         {/* CONNECTIONS */}
//         <p className="mt-2 text-sm font-medium text-blue-600 cursor-pointer">
//           36 connections
//         </p>

//         {/* ACTION BUTTONS */}
//         <div className="mt-5 flex flex-wrap gap-3">

//           <button
//             onClick={onOpenEnhance}
//             className="rounded-full bg-blue-700 px-5 py-2 text-sm text-white transition hover:bg-blue-800"
//           >
//             Enhance profile
//           </button>

//                     <DropdownMenu>
//   <DropdownMenuTrigger asChild>
//     <button
//       className="
//         flex items-center gap-2
//         rounded-full
//         border
//         border-gray-300
//         dark:border-gray-700
//         px-5
//         py-2
//         text-sm
//         hover:bg-gray-100
//         dark:hover:bg-gray-800
//         transition
//       "
//     >
//       More
    
//     </button>
//   </DropdownMenuTrigger>

//   <DropdownMenuContent align="start" className="w-48">

//     <DropdownMenuItem className="cursor-pointer">
//       <UserPlus size={16} className="mr-2" />
//       Follow
//     </DropdownMenuItem>

//     <DropdownMenuItem className="cursor-pointer">
//       <Users size={16} className="mr-2" />
//       Connect
//     </DropdownMenuItem>

//     <DropdownMenuItem className="cursor-pointer">
//       <MessageCircle size={16} className="mr-2" />
//       Message
//     </DropdownMenuItem>

//     <DropdownMenuItem className="cursor-pointer text-red-500 focus:text-red-500">
//       <Flag size={16} className="mr-2" />
//       Report
//     </DropdownMenuItem>

//   </DropdownMenuContent>
// </DropdownMenu>

//         </div>

//       </div>
//       </div>
//       </div>

//   );
// }          



// both backend + fromtedn     




//  "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { ExternalLink } from "lucide-react";
// import {
//   UserPlus,
//   Users,
//   MessageCircle,
//   Flag,
//   ChevronDown,
// } from "lucide-react";

// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem,
// } from "@/components/ui/dropdown-menu";

// export default function ProfileInfo({ onOpenEnhance }) {

//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem("token");
         
//         console.log("TOKEN:", token);
//         const response = await fetch(
//           "http://localhost:8081/api/profile/me",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );



//         if (!response.ok) {
//   console.log("Status:", response.status);
//   console.log("Status Text:", response.statusText);

//   const errorText = await response.text();
//   console.log("Backend Error:", errorText);

//   throw new Error("Failed to fetch profile");
// }

//         const data = await response.json();

// console.log("PROFILE DATA:", data);

// setProfile(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchProfile();
//   }, []);
// console.log("PROFILE STATE:", profile);
//   return (
//     <div className="max-w-5x1  mx-auto mt-4 px-3 md:px-4">
//   <div className="
//   overflow-hidden
//   rounded-2xl
//   border-2
//   border-gray-300
//   dark:border-gray-700
//   bg-white
//   dark:bg-black
//   shadow-md
//   pb-6
// ">
//       {/* ================= COVER ================= */}
//       <div className="relative">
//         <div className="h-48 w-full overflow-hidden bg-gray-200 dark:bg-gray-800">
//           <Image
//             src={profile?.coverImage || "/assets/girl.jpg"}
//             alt="Cover"
//             width={1200}
//             height={300}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* PROFILE IMAGE */}
//         <div className="absolute left-6 -bottom-12">
//           <div className="w-24 h-24 rounded-full border-4 border-white dark:border-black overflow-hidden">
//             <Image
//               src={profile?.profileImage || "/assets/ankur.jpg"}
//               alt="Profile"
//               width={96}
//               height={96}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>

//       {/* ================= PROFILE INFO ================= */}
//       <div className="mt-16 px-4">

//         {/* NAME */}
//         <h1 className="text-3xl font-bold">
//           {profile?.firstName} {profile?.lastName}
//         </h1>

//         {/* HEADLINE */}
//         <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
//           {profile?.headline}
//         </p>

//         {/* LOCATION + CONTACT */}
//         <div className="mt-2 flex flex-wrap items-center gap-4 text-sm">

//           <span className="text-gray-500 dark:text-gray-400">
//             {profile?.city}, {profile?.state}, {profile?.country}
//           </span>
//           <DropdownMenu>
//   <DropdownMenuTrigger asChild>
//     <button className="text-blue-600 hover:underline">
//       Contact info
//     </button>
//   </DropdownMenuTrigger>

//   <DropdownMenuContent align="start" className="w-64">

//     <DropdownMenuItem>
//       📧 {profile?.email || "No email available"}
//     </DropdownMenuItem>

//     <DropdownMenuItem>
//       📱 {profile?.phoneNumber || "No phone number available"}
//     </DropdownMenuItem>

//   </DropdownMenuContent>
// </DropdownMenu>
          

//         </div>

//         {/* PORTFOLIO */}
//         <button className="mt-2 flex items-center gap-1 text-sm text-blue-600 hover:underline">
//           <ExternalLink size={14} />
//           {profile?.websiteUrl || "Portfolio / Website"}
//         </button>

//         {/* CONNECTIONS */}
//         <p className="mt-2 text-sm font-medium text-blue-600 cursor-pointer">
//           36 connections
//         </p>

//         {/* ACTION BUTTONS */}
//         <div className="mt-5 flex flex-wrap gap-3">

//           <button
//             onClick={onOpenEnhance}
//             className="rounded-full bg-blue-700 px-5 py-2 text-sm text-white transition hover:bg-blue-800"
//           >
//             Enhance profile
//           </button>

//                     <DropdownMenu>
//   <DropdownMenuTrigger asChild>
//     <button
//       className="
//         flex items-center gap-2
//         rounded-full
//         border
//         border-gray-300
//         dark:border-gray-700
//         px-5
//         py-2
//         text-sm
//         hover:bg-gray-100
//         dark:hover:bg-gray-800
//         transition
//       "
//     >
//       More
    
//     </button>
//   </DropdownMenuTrigger>

//   <DropdownMenuContent align="start" className="w-48">

//     <DropdownMenuItem className="cursor-pointer">
//       <UserPlus size={16} className="mr-2" />
//       Follow
//     </DropdownMenuItem>

//     <DropdownMenuItem className="cursor-pointer">
//       <Users size={16} className="mr-2" />
//       Connect
//     </DropdownMenuItem>

//     <DropdownMenuItem className="cursor-pointer">
//       <MessageCircle size={16} className="mr-2" />
//       Message
//     </DropdownMenuItem>

//     <DropdownMenuItem className="cursor-pointer text-red-500 focus:text-red-500">
//       <Flag size={16} className="mr-2" />
//       Report
//     </DropdownMenuItem>

//   </DropdownMenuContent>
// </DropdownMenu>

//         </div>

//       </div>
//       </div>
//       </div>

//   );
// }          



///new addvanmce 





//  "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { ExternalLink } from "lucide-react";

// // export default function ProfileInfo({ onOpenEnhance }) {
// export default function ProfileInfo({
//   onOpenEnhance,
//   setProfile: setParentProfile,
// }) {
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem("token");
         
//         console.log("TOKEN:", token);

//          // ❌ STOP if no token
//         if (!token) {
//           console.error("No token found. User not authenticated.");
//           return;
//         }
//         const response = await fetch(
//           "http://localhost:8081/api/profile/me",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         // ❌ STEP 3: handle auth errors clearly
//         if (response.status === 401 || response.status === 403) {
//           console.error("Unauthorized (401/403). Token invalid or expired.");
//           return;
//         }

//         if (!response.ok) {
//   console.log("Status:", response.status);
//   console.log("Status Text:", response.statusText);

//   const errorText = await response.text();
//   console.log("Backend Error:", errorText);

//   throw new Error("Failed to fetch profile");
// }

//         const data = await response.json();

// console.log("PROFILE DATA:", data);

// // setProfile(data);
// if (setParentProfile) 
//   { setParentProfile(data); }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchProfile();
//   }, []);
// console.log("PROFILE STATE:", profile);
//   return (
//     <div className="max-w-5x1  mx-auto mt-4 px-3 md:px-4">
//   <div className="
//   overflow-hidden
//   rounded-2xl
//   border-2
//   border-gray-300
//   dark:border-gray-700
//   bg-white
//   dark:bg-black
//   shadow-md
//   pb-6
// ">
//       {/* ================= COVER ================= */}
//       <div className="relative">
//         <div className="h-48 w-full overflow-hidden bg-gray-200 dark:bg-gray-800">
//           <Image
//             src={profile?.coverImage || "/assets/cover.png"}
//             alt="Cover"
//             width={1200}
//             height={300}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* PROFILE IMAGE */}
//         <div className="absolute left-6 -bottom-12">
//           <div className="w-24 h-24 rounded-full border-4 border-white dark:border-black overflow-hidden">
//             <Image
//               src={profile?.profileImage || "/assets/user.png" }
//               alt="Profile"
//               width={96}
//               height={96}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>

//       {/* ================= PROFILE INFO ================= */}
//       <div className="mt-16 px-4">

//         {/* NAME */}
//         <h1 className="text-3xl font-bold">
//           {profile?.firstName} {profile?.lastName}
//         </h1>

//         {/* HEADLINE */}
//         <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
//           {profile?.headline}
//         </p>

//         {/* LOCATION + CONTACT */}
//         <div className="mt-2 flex flex-wrap items-center gap-4 text-sm">

//           <span className="text-gray-500 dark:text-gray-400">
//             {profile?.city}, {profile?.state}, {profile?.country}
//           </span>
//             <button className="text-blue-600 hover:underline">
//       Contact info
//     </button>
  
          

//         </div>

//         {/* PORTFOLIO */}
//        <a
//   href={profile?.websiteUrl}
//   target="_blank"
//   rel="noopener noreferrer"
//   className="mt-2 flex items-center gap-1 text-sm text-blue-600 hover:underline"
// >
//   <ExternalLink size={14} />
//   Portfolio
// </a>
//         {/* CONNECTIONS */}
//         <div className="flex gap-4">
//           <p className="mt-2 text-sm font-medium text-blue-600 cursor-pointer">
//           connections
//         </p>
//         <p className="mt-2 text-sm font-medium text-blue-600 cursor-pointer">
//           followers
//         </p>
//         </div>


//         {/* ACTION BUTTONS */}
//         <div className="mt-5 flex flex-wrap gap-3">

//           <button
//             onClick={onOpenEnhance}
//             className="rounded-full bg-blue-700 px-5 py-2 text-sm text-white transition hover:bg-blue-800"
//           >
//             Enhance profile
//           </button>


//         </div>

//       </div>
//       </div>
//       </div>

//   );
// }          








 "use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

// export default function ProfileInfo({ onOpenEnhance }) {
export default function ProfileInfo({
  onOpenEnhance,
  setProfile: setParentProfile,
}) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
         
        console.log("TOKEN:", token);

         // ❌ STOP if no token
        if (!token) {
          console.error("No token found. User not authenticated.");
          return;
        }
        const response = await fetch(
          "http://localhost:8081/api/profile/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // ❌ STEP 3: handle auth errors clearly
        if (response.status === 401 || response.status === 403) {
          console.error("Unauthorized (401/403). Token invalid or expired.");
          return;
        }

        if (!response.ok) {
  console.log("Status:", response.status);
  console.log("Status Text:", response.statusText);

  const errorText = await response.text();
  console.log("Backend Error:", errorText);

  throw new Error("Failed to fetch profile");
}

        const data = await response.json();

console.log("PROFILE DATA:", data);
console.log("PROFILE USERNAME =", data.username);
setProfile(data);

// Send the profile to ProfilePageUser
if (typeof setParentProfile === "function") {
  setParentProfile(data);
}
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);
console.log("PROFILE STATE:", profile);
  return (
    <div className="max-w-5x1  mx-auto mt-4 px-3 md:px-4">
  <div className="
  overflow-hidden
  rounded-2xl
  border-2
  border-gray-300
  dark:border-gray-700
  bg-white
  dark:bg-black
  shadow-md
  pb-6
">
      {/* ================= COVER ================= */}
      <div className="relative">
        <div className="h-48 w-full overflow-hidden bg-gray-200 dark:bg-gray-800">
          <Image
            src={profile?.coverImage || "/assets/cover.png"}
            alt="Cover"
            width={1200}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>

        {/* PROFILE IMAGE */}
        <div className="absolute left-6 -bottom-12">
          <div className="w-24 h-24 rounded-full border-4 border-white dark:border-black overflow-hidden">
            <Image
              src={profile?.profileImage || "/assets/user.png" }
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

        {/* NAME */}
        <h1 className="text-3xl font-bold">
          {profile?.firstName} {profile?.lastName}
        </h1>

        {/* HEADLINE */}
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {profile?.headline}
        </p>

        {/* LOCATION + CONTACT */}
        <div className="mt-2 flex flex-wrap items-center gap-4 text-sm">

          <span className="text-gray-500 dark:text-gray-400">
            {profile?.city}, {profile?.state}, {profile?.country}
          </span>
            <button className="text-blue-600 hover:underline">
      Contact info
    </button>
  
          

        </div>

        {/* PORTFOLIO */}
       <a
  href={profile?.websiteUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-2 flex items-center gap-1 text-sm text-blue-600 hover:underline"
>
  <ExternalLink size={14} />
  Portfolio
</a>
        {/* CONNECTIONS */}
        <div className="flex gap-4">
          <p className="mt-2 text-sm font-medium text-blue-600 cursor-pointer">
          connections
        </p>
        <p className="mt-2 text-sm font-medium text-blue-600 cursor-pointer">
          followers
        </p>
        </div>


        {/* ACTION BUTTONS */}
        <div className="mt-5 flex flex-wrap gap-3">

          <button
            onClick={onOpenEnhance}
            className="rounded-full bg-blue-700 px-5 py-2 text-sm text-white transition hover:bg-blue-800"
          >
            Enhance profile
          </button>


        </div>

      </div>
      </div>
      </div>

  );
}          