// best versiuon  





// "use client";
// import { useTheme } from "next-themes";
// import Image from "next/image";
// import { Switch } from "@/components/ui/switch";
// import { Label } from "@/components/ui/label";
// import { Cog, CircleChevronLeft, Menu } from "lucide-react";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// function ProfilePageUser() {
//   const { theme, setTheme } = useTheme();
//   return (
//     <div className="w-full min-h-screen ">

//       {/* ================= HEADER ACTION BAR ================= */}
//       <div className="flex items-center justify-between px-4 py-3">
        
//         {/* LEFT: Back button */}
//         <button className="p-2 rounded-full">
//           <CircleChevronLeft className="text-gray-600 hover:text-red-500 transition" />
//         </button>

//         {/* RIGHT: SETTINGS + MENU */}
//         <div className="flex items-center gap-2">

//           {/* ================= COG (SETTINGS) ================= */}
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <button className="p-2 rounded-full">
//                 <Cog className="text-gray-600 hover:text-gray-500 transition" />
//               </button>
//             </DropdownMenuTrigger>

//             <DropdownMenuContent className="w-48">

//               <DropdownMenuGroup>

//                 {/* THEME SWITCH (FIXED) */}
//                 <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
//                   <div className="flex items-center justify-between w-full px-2 py-1">
//                     {/* <Label htmlFor="theme-switch">Theme</Label>
//                     <Switch id="theme-switch" /> */}
//      {/* =====  mode theme ===  */}
//                     <Label htmlFor="theme-switch">Theme</Label>

// <Switch
//   id="theme-switch"
//   checked={theme === "dark"}
//   onCheckedChange={(checked) => {
//     setTheme(checked ? "dark" : "light");
//   }}
// />
//                   </div>
//                 </DropdownMenuItem>

//               </DropdownMenuGroup>

//               <DropdownMenuSeparator />

//               <DropdownMenuItem>Help</DropdownMenuItem>
//               <DropdownMenuItem>Privacy</DropdownMenuItem>

//             </DropdownMenuContent>
//           </DropdownMenu>

//           {/* ================= MENU ================= */}
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <button className="p-2 rounded-full">
//                 <Menu className="text-gray-600  hover:text-blue-500 transition" />
//               </button>
//             </DropdownMenuTrigger>

//             <DropdownMenuContent className="w-48">

//               <DropdownMenuGroup>
//                 <DropdownMenuItem>Profile</DropdownMenuItem>
//               </DropdownMenuGroup>

//               <DropdownMenuSeparator />

//               <DropdownMenuItem className="text-red-500">
//                 Logout
//               </DropdownMenuItem>

//             </DropdownMenuContent>
//           </DropdownMenu>

//         </div>
//       </div>

//       {/* ================= COVER + PROFILE SECTION ================= */}
//       <div className="relative">
//         <div className="h-48 w-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
//           <Image
//             src="/assets/girl.jpg"
//             alt="Cover"
//             width={1200}
//             height={300}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div className="absolute left-6 -bottom-12">
//           <div className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-900 overflow-hidden">
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

//         <h1 className="text-3xl font-bold ">
//           Ansh Verma
//         </h1>

//         <p className="text-sm text-gray-600 mt-1">
//           Undergraduate IT Engineer • B.Tech '28 • DSA • Web Development • React • Git
//         </p>

//         <p className="text-sm text-gray-500 mt-1">
//           Lucknow, Uttar Pradesh, India
//         </p>

//         <p className="text-sm text-blue-600 mt-2 cursor-pointer">
//           36 connections
//         </p>

//         <div className="flex gap-3 mt-4">
//           <button className="px-5 py-2 rounded-full bg-blue-900 text-white text-sm hover:bg-blue-700 transition">
//             Enhance profile
//           </button>

//           <button className="px-5 py-2 rounded-full border-2 bg-white text-sm text-blue-900 hover:bg-blue-100">
//             More
//           </button>
//         </div>

//       </div>

//     </div>
//   );
// }

// export default ProfilePageUser;





// //new  version   advamce    nver delete it 




// "use client";

// import { useState } from "react";
// import { useTheme } from "next-themes";
// import Image from "next/image";
// import EnhanceProfile from "../components/EnhanceProfile";

// import { Switch } from "@/components/ui/switch";
// import { Label } from "@/components/ui/label";
// import { Cog, CircleChevronLeft, Menu } from "lucide-react";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// function ProfilePageUser() {
//   const { theme, setTheme } = useTheme();

//   const [showEnhance, setShowEnhance] = useState(false);

//   return (
//     <div className="w-full min-h-screen bg-white dark:bg-black text-black dark:text-white">

//       {/* HEADER */}
//       <div className="flex items-center justify-between px-4 py-3">

//         <button className="p-2 rounded-full">
//           <CircleChevronLeft className="text-gray-600 hover:text-red-500 transition" />
//         </button>

//         <div className="flex items-center gap-2">

//           {/* SETTINGS */}
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <button className="p-2 rounded-full">
//                 <Cog className="text-gray-600 hover:text-gray-500 transition" />
//               </button>
//             </DropdownMenuTrigger>

//             <DropdownMenuContent className="w-48">

//               <DropdownMenuGroup>
//                 <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
//                   <div className="flex items-center justify-between w-full px-2 py-1">
//                     <Label>Theme</Label>
//                     <Switch
//                       checked={theme === "dark"}
//                       onCheckedChange={(checked) =>
//                         setTheme(checked ? "dark" : "light")
//                       }
//                     />
//                   </div>
//                 </DropdownMenuItem>
//               </DropdownMenuGroup>

//               <DropdownMenuSeparator />
//               <DropdownMenuItem>Help</DropdownMenuItem>
//               <DropdownMenuItem>Privacy</DropdownMenuItem>

//             </DropdownMenuContent>
//           </DropdownMenu>

//           {/* MENU */}
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <button className="p-2 rounded-full">
//                 <Menu className="text-gray-600 hover:text-blue-500 transition" />
//               </button>
//             </DropdownMenuTrigger>

//             <DropdownMenuContent className="w-48">
//               <DropdownMenuGroup>
//                 <DropdownMenuItem>Profile</DropdownMenuItem>
//               </DropdownMenuGroup>

//               <DropdownMenuSeparator />
//               <DropdownMenuItem className="text-red-500">
//                 Logout
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>

//         </div>
//       </div>

//       {/* COVER */}
//       <div className="relative">
//         <div className="h-48 w-full overflow-hidden">
//           <Image
//             src="/assets/girl.jpg"
//             alt="Cover"
//             width={1200}
//             height={300}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div className="absolute left-6 -bottom-12">
//           <div className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-900 overflow-hidden">
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

//       {/* INFO */}
//       <div className="mt-16 px-4">

//         <h1 className="text-3xl font-bold">Ansh Verma</h1>

//         <p className="text-sm text-gray-600 mt-1">
//           Undergraduate IT Engineer • React • DSA • Web Dev
//         </p>

//         <p className="text-sm text-gray-500 mt-1">
//           Lucknow, Uttar Pradesh, India
//         </p>

//         <p className="text-sm text-blue-600 mt-2 cursor-pointer">
//           36 connections
//         </p>

//         {/* BUTTONS */}
//         <div className="flex gap-3 mt-4">

//           <button
//             onClick={() => setShowEnhance(true)}
//             className="px-5 py-2 rounded-full bg-blue-900 text-white text-sm hover:bg-blue-700 transition"
//           >
//             Enhance profile
//           </button>

//           <button className="px-5 py-2 rounded-full border-2 text-sm">
//             More
//           </button>

//         </div>
//       </div>

//       {/* MODAL */}
//       <EnhanceProfile
//         open={showEnhance}
//         onClose={() => setShowEnhance(false)}
//       />

//     </div>
//   );
// }

// export default ProfilePageUser;




// new     most advance     verson  



// "use client";

// import { useState } from "react";
// import { useTheme } from "next-themes";
// import Image from "next/image";
// import EnhanceProfile from "../components/profile/EnhanceProfile";
// import ProfileLayout from "../pages/ProfileLayout";
// import ProfileTopBar from "../components/profile/ProfileTopBar";
// import ProfileBottomNav from "../components/profile/ProfileBottomNav";

// import { ExternalLink } from "lucide-react";
// import { Switch } from "@/components/ui/switch";
// import { Label } from "@/components/ui/label";
// import { Cog, CircleChevronLeft, Menu } from "lucide-react";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// function ProfilePageUser() {
//   const { theme, setTheme } = useTheme();

//   const [showEnhance, setShowEnhance] = useState(false);

//   return (
//     <div className="w-full min-h-screen bg-white dark:bg-black text-black dark:text-white">

//       {/* HEADER */}
//       <div className="flex items-center justify-between px-4 py-3">

//         <button className="p-2 rounded-full">
//           <CircleChevronLeft className="text-gray-600 hover:text-red-500 transition" />
//         </button>

//         <div className="flex items-center gap-2">

//           {/* SETTINGS */}
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <button className="p-2 rounded-full">
//                 <Cog className="text-gray-600 hover:text-gray-500 transition" />
//               </button>
//             </DropdownMenuTrigger>

//             <DropdownMenuContent className="w-48">

//               <DropdownMenuGroup>
//                 <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
//                   <div className="flex items-center justify-between w-full px-2 py-1">
//                     <Label>Theme</Label>
//                     <Switch
//                       checked={theme === "dark"}
//                       onCheckedChange={(checked) =>
//                         setTheme(checked ? "dark" : "light")
//                       }
//                     />
//                   </div>
//                 </DropdownMenuItem>
//               </DropdownMenuGroup>

//               <DropdownMenuSeparator />
//               <DropdownMenuItem>Help</DropdownMenuItem>
//               <DropdownMenuItem>Privacy</DropdownMenuItem>

//             </DropdownMenuContent>
//           </DropdownMenu>

//           {/* MENU */}
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <button className="p-2 rounded-full">
//                 <Menu className="text-gray-600 hover:text-blue-500 transition" />
//               </button>
//             </DropdownMenuTrigger>

//             <DropdownMenuContent className="w-48">
//               <DropdownMenuGroup>
//                 <DropdownMenuItem>Profile</DropdownMenuItem>
//               </DropdownMenuGroup>

//               <DropdownMenuSeparator />
//               <DropdownMenuItem className="text-red-500">
//                 Logout
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>

//         </div>
//       </div>

//       {/* COVER */}
//       <div className="relative">
//         <div className="h-48 w-full overflow-hidden">
//           <Image
//             src="/assets/girl.jpg"
//             alt="Cover"
//             width={1200}
//             height={300}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div className="absolute left-6 -bottom-12">
//           <div className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-900 overflow-hidden">
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

//       {/* INFO */}
//       <div className="mt-16 px-4">

//         <h1 className="text-3xl font-bold">Ansh Verma</h1>

//         <p className="text-sm text-gray-600 mt-1">
//           Undergraduate IT Engineer • React • DSA • Web Dev
//         </p>



// {/* LOCATION + CONTACT INFO (same line) */}
// <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">

//   {/* LOCATION */}
//   <p>
//     Lucknow, Uttar Pradesh, India
//   </p>

//   {/* CONTACT INFO */}
//   <button
//     className="
//       text-blue-600
//       hover:underline
//       transition
//     "
//   >
//     Contact info
//   </button>

// </div>

// {/* PORTFOLIO LINK (below location row) */}
// <button className="mt-1 flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 transition w-fit">
//   <ExternalLink size={14} />
//   <span className="hover:underline">
//     Portfolio / Website
//   </span>
// </button>

//         <p className="text-sm text-blue-600 mt-2 cursor-pointer">
//           36 connections
//         </p>

//         {/* BUTTONS */}
//         <div className="flex gap-3 mt-4">

//           <button
//             onClick={() => setShowEnhance(true)}
//             className="px-5 py-2 rounded-full bg-blue-900 text-white text-sm hover:bg-blue-700 transition"
//           >
//             Enhance profile
//           </button>

//           <button className="px-5 py-2 rounded-full border-2 text-sm">
//             More
//           </button>

//         </div>
//       </div>

//       {/* MODAL */}
//       <EnhanceProfile
//         open={showEnhance}
//         onClose={() => setShowEnhance(false)}
//       />

//     </div>
//   );
// }

// export default ProfilePageUser;



/// new most advance 

// "use client";

// import { useState } from "react";
// import ProfileLayout from "../pages/ProfileLayout";
// import ProfileInfo from "../components/profile/ProfileInfo";
// import EnhanceProfile from "../components/profile/EnhanceProfile";

// export default function ProfilePageUser() {
//   const [showEnhance, setShowEnhance] = useState(false);

//   return (
//     <ProfileLayout>
//       <ProfileInfo
//         onOpenEnhance={() => setShowEnhance(true)}
//       />

//       <EnhanceProfile
//         open={showEnhance}
//         onClose={() => setShowEnhance(false)}
//       />
//     </ProfileLayout>
//   );
// }




// new   most advance 




// "use client";

// import { useState } from "react";
// import ProfileLayout from "../pages/ProfileLayout";
// import ProfileInfo from "../components/profile/ProfileInfo";
// import ProfileActivity from "../components/profile/ProfileActivity";
// import EnhanceProfile from "../components/profile/EnhanceProfile";

// export default function ProfilePageUser() {
//   const [showEnhance, setShowEnhance] = useState(false);

//   // ✅ FIX: profile state was missing
//   const [profile, setProfile] = useState(null);

//   return (
//     <ProfileLayout>
//       <ProfileInfo
//         onOpenEnhance={() => setShowEnhance(true)}
//         setProfile={setProfile}   // important if ProfileInfo fetches data
//       />

//       <div className="mt-6 md:mt-8">
//         <ProfileActivity
//           isOwnProfile={true}
//           userId={profile?.id}
//           username={profile?.username}
//         />
//       </div>

//       <EnhanceProfile
//         open={showEnhance}
//         onClose={() => setShowEnhance(false)}
//       />
//     </ProfileLayout>
//   );
// } 






"use client";

import { useState } from "react";
import ProfileLayout from "../pages/ProfileLayout";
import ProfileInfo from "../components/profile/ProfileInfo";
import ProfileActivity from "../components/profile/ProfileActivity";
import EnhanceProfile from "../components/profile/EnhanceProfile";

export default function ProfilePageUser() {
  const [showEnhance, setShowEnhance] = useState(false);
  const [profile, setProfile] = useState(null);

  return (
    <ProfileLayout>
      {/* PROFILE HEADER */}
      <ProfileInfo
        onOpenEnhance={() => setShowEnhance(true)}
        setProfile={setProfile}
      />

      {/* ACTIVITY SECTION (always render, no blocking) */}
      <div className="mt-6 md:mt-8">
        <ProfileActivity
          isOwnProfile={true}
          userId={profile?.id}
          username={profile?.username}
        />
      </div>

      {/* ENHANCE MODAL */}
      <EnhanceProfile
        open={showEnhance}
        onClose={() => setShowEnhance(false)}
      />
    </ProfileLayout>
  );
}