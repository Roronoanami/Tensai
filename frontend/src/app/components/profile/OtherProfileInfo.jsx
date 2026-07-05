
// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import {
//   ExternalLink,
//   UserPlus,
//   MessageCircle,
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

// export default function OtherProfileInfo({ username }) {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         if (!username) return;

//         console.log("USERNAME:", username);

//         const res = await fetch(`http://localhost:8081/api/profile/public/username/${username}`);
        

//         console.log("STATUS:", res.status);

//         const text = await res.text();

//         if (!res.ok) {
//           throw new Error("Failed to fetch profile");
//         }

//         const data = JSON.parse(text);

//         setProfile(data);
//       } catch (err) {
//         console.error("PROFILE ERROR:", err);
//         setError("Failed to fetch profile");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, [username]);

//   // ================= LOADING =================
//   if (loading) {
//     return <div className="p-6 text-white">Loading profile...</div>;
//   }

//   // ================= ERROR =================
//   if (error) {
//     return <div className="p-6 text-red-500">{error}</div>;
//   }

//   // ================= NO PROFILE =================
//   if (!profile) {
//     return <div className="p-6 text-white">Profile not found</div>;
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

//           {/* PROFILE IMAGE */}
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

//         {/* ================= INFO ================= */}
//         <div className="mt-16 px-4">

//           <h1 className="text-3xl font-bold">
//             {profile.firstName} {profile.lastName}
//           </h1>

//           <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
//             {profile.headline}
//           </p>

//           <div className="mt-2 flex flex-wrap items-center gap-4 text-sm">
//             <span className="text-gray-500 dark:text-gray-400">
//               {profile.city}, {profile.state}, {profile.country}
//             </span>

//             <button className="text-blue-600 hover:underline">
//               Contact info
//             </button>
//           </div>

//           <a
//             href={profile.websiteUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mt-2 flex items-center gap-1 text-sm text-blue-600 hover:underline"
//           >
//             <ExternalLink size={14} />
//             Portfolio
//           </a>
          
//           <div className="flex gap-4">
//             <p className="mt-2 text-sm font-medium text-blue-600 cursor-pointer">
//             {profile.connections || 0} connections
//           </p>
//           <p className="mt-2 text-sm font-medium text-blue-600 cursor-pointer">
//             {profile.followers|| 0} followers
//           </p>
//           </div>

//           {/* ================= ACTIONS ================= */}
//           <div className="mt-5 flex flex-wrap gap-3">

//             <button className="flex items-center gap-2 rounded-full bg-blue-700 px-5 py-2 text-sm text-white hover:bg-blue-800">
//   <Send size={15} />
//   <span>Message</span>
// </button>

//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <button className="flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-700 px-5 py-2 text-sm transition">
//                   More
//                 </button>
//               </DropdownMenuTrigger>

//               <DropdownMenuContent align="start" className="w-48">

//                 <DropdownMenuItem className="cursor-pointer">
//                   <UserPlus size={16} className="mr-2" />
//                   Follow
//                 </DropdownMenuItem>

               

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


"use client";

import Image from "next/image";
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
              {profile.connections || 0} connections
            </p>

            <p className="text-sm font-medium text-blue-600 cursor-pointer">
              {profile.followers || 0} followers
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

                <DropdownMenuItem className="cursor-pointer">
                  <UserPlus size={16} className="mr-2" />
                  Follow
                </DropdownMenuItem>

                <DropdownMenuItem className="cursor-pointer">
                  <Users size={16} className="mr-2" />
                  Connect
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