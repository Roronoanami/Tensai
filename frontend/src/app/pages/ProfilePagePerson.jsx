
//versipn 1 




// import Image from "next/image";
// import { Cog, CircleChevronLeft ,Menu} from "lucide-react";

// function ProfilePage() {
//   return (
//     <div className="w-full min-h-screen bg-white">

//       {/* ================= HEADER ACTION BAR ================= */}
//       <div className="flex items-center justify-between px-4 py-3">
        
//         {/* LEFT: Back button */}
// <button className="p-2 rounded-full ">
//   <CircleChevronLeft className="text-grey  hover:text-red-500 transition" />
// </button>

// {/* RIGHT: Settings button */}
//  <div className="flex items-center gap-2">
          
//           <button className="p-2 rounded-full">
//             <Cog className="text-grey hover:text-gray-500 transition" />
//           </button>

//           <button className="p-2 rounded-full">
//             <Menu className="text-grey hover:text-blue-500 transition" />
//           </button>

//         </div>


//       </div>

//       {/* ================= COVER + PROFILE SECTION ================= */}
//       <div className="relative">

//         {/* 🔥 COVER IMAGE (backend will provide url) */}
//         <div className="h-48 w-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
//           {/* 
//             📌 BACKEND DATA WILL GO HERE:
//             Example: profile.coverImage
//           */}
//           <Image
//             src="/assets/cover-placeholder.jpg"
//             alt="Cover"
//             width={1200}
//             height={300}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* ================= PROFILE IMAGE ================= */}
//         <div className="absolute left-6 -bottom-12">
//           {/* 
//             📌 BACKEND DATA:
//             profile.avatar
//           */}
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

//         {/* NAME */}
//         <h1 className="text-3xl font-bold text-gray-800">
//           {/* backend: profile.name */}
//           Ansh Verma
//         </h1>

//         {/* HEADLINE */}
//         <p className="text-sm text-gray-60 mt-1">
//           {/* backend: profile.headline */}
//           Undergraduate IT Engineer • B.Tech '28 • DSA • Web Development • React • Git
//         </p>

//         {/* LOCATION */}
//         <p className="text-sm text-gray-500 mt-1">
//           {/* backend: profile.location */}
//           Lucknow, Uttar Pradesh, India
//         </p>

//         {/* CONNECTIONS */}
//         <p className="text-sm text-blue-600 mt-2 cursor-pointer">
//           {/* backend: profile.connections */}
//           36 connections
//         </p>

//         {/* ================= ACTION BUTTONS ================= */}
//         <div className="flex gap-3 mt-4">

//           <button className="px-5 py-2 rounded-full bg-blue-900 text-white text-sm hover:bg-blue-700 transition">
//             Enhance profile
//           </button>

//           <button className="px-5 py-2 rounded-full border-2 bg-white text-sm text-blue-900 hover:bg-blue-100 ">
//             More
//           </button>

//         </div>

//       </div>

   

//     </div>
//   );
// }

// export default ProfilePage; 


// // veersion 2 
// import Image from "next/image";
// import { Cog, CircleChevronLeft ,Menu} from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// function ProfilePage() {
//   return (
//     <div className="w-full min-h-screen bg-white">

//       {/* ================= HEADER ACTION BAR ================= */}
//       <div className="flex items-center justify-between px-4 py-3">
        
//         {/* LEFT: Back button */}
// <button className="p-2 rounded-full ">
//   <CircleChevronLeft className="text-grey  hover:text-red-500 transition" />
// </button>

// {/* RIGHT: Settings button */}
//  <div className="flex items-center gap-2">
          
//           <button className="p-2 rounded-full">
//             <Cog className="text-grey hover:text-gray-500 transition" />
//           </button>

//           <button className="p-2 rounded-full">
//             <Menu className="text-grey hover:text-blue-500 transition" />
//           </button>

//         </div>


//       </div>

//       {/* ================= COVER + PROFILE SECTION ================= */}
//       <div className="relative">

//         {/* 🔥 COVER IMAGE (backend will provide url) */}
//         <div className="h-48 w-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
//           {/* 
//             📌 BACKEND DATA WILL GO HERE:
//             Example: profile.coverImage
//           */}
//           <Image
//             src="/assets/cover-placeholder.jpg"
//             alt="Cover"
//             width={1200}
//             height={300}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* ================= PROFILE IMAGE ================= */}
//         <div className="absolute left-6 -bottom-12">
//           {/* 
//             📌 BACKEND DATA:
//             profile.avatar
//           */}
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

//         {/* NAME */}
//         <h1 className="text-3xl font-bold text-gray-800">
//           {/* backend: profile.name */}
//           Ansh Verma
//         </h1>

//         {/* HEADLINE */}
//         <p className="text-sm text-gray-60 mt-1">
//           {/* backend: profile.headline */}
//           Undergraduate IT Engineer • B.Tech '28 • DSA • Web Development • React • Git
//         </p>

//         {/* LOCATION */}
//         <p className="text-sm text-gray-500 mt-1">
//           {/* backend: profile.location */}
//           Lucknow, Uttar Pradesh, India
//         </p>

//         {/* CONNECTIONS */}
//         <p className="text-sm text-blue-600 mt-2 cursor-pointer">
//           {/* backend: profile.connections */}
//           36 connections
//         </p>

//         {/* ================= ACTION BUTTONS ================= */}
//         <div className="flex gap-3 mt-4">

//           <button className="px-5 py-2 rounded-full bg-blue-900 text-white text-sm hover:bg-blue-700 transition">
//             Enhance profile
//           </button>

//               <DropdownMenu>
//   <DropdownMenuTrigger asChild>
//     <button className="px-5 py-2 rounded-full border-2 bg-white text-sm text-blue-900 hover:bg-blue-100">
//       More
//     </button>
//   </DropdownMenuTrigger>

//   <DropdownMenuContent className="w-40">
//     <DropdownMenuGroup>
//       <DropdownMenuItem>Connect</DropdownMenuItem>
//       <DropdownMenuItem>Projects</DropdownMenuItem>
//       <DropdownMenuItem>Github</DropdownMenuItem>
//     </DropdownMenuGroup>

//     <DropdownMenuSeparator />

//     <DropdownMenuItem>Folow</DropdownMenuItem>
//     <DropdownMenuItem disabled>Say Hello</DropdownMenuItem>
//   </DropdownMenuContent>
// </DropdownMenu>

//         </div>

//       </div>

   

//     </div>
//   );
// }

// export default ProfilePage;