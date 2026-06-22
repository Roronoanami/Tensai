//  "use client";

// import { useState, useRef } from "react";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export default function ProfileActivity() {
//   const [activeTab, setActiveTab] = useState("posts");

//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     if (!scrollRef.current) return;

//     scrollRef.current.scrollBy({
//       left: direction === "left" ? -320 : 320,
//       behavior: "smooth",
//     });
//   };

//   // ---------------- DEMO POSTS ----------------
//   const posts = [
//     {
//       id: 1,
//       title: "Building my Mingo Chat App",
//       image: "/assets/girl.jpg",
//     },
//     {
//       id: 2,
//       title: "Learning Next.js & Spring Boot",
//       image: "/assets/ankur.jpg",
//     },
//     {
//       id: 3,
//       title: "Frontend UI Progress",
//       image: "/assets/user1.jpg",
//     },
//     {
//       id: 4,
//       title: "Responsive Mobile Layout",
//       image: "/assets/user2.jpg",
//     },
//   ];

//   // ---------------- DEMO PROJECTS ----------------
//   const projects = [
//     {
//       id: 1,
//       title: "Mingo Chat",
//       tech: "Next.js • Spring Boot • MongoDB",
//       image: "/assets/ankur.jpg",
//     },
//     {
//       id: 2,
//       title: "Portfolio Website",
//       tech: "Next.js • Tailwind CSS",
//       image: "/assets/girl.jpg",
//     },
//     {
//       id: 3,
//       title: "Todo App",
//       tech: "React",
//       image: "/assets/user3.jpg",
//     },
//   ];

//   // ---------------- DEMO SKILLS ----------------
//   const skills = [
//     "Java",
//     "JavaScript",
//     "Next.js",
//     "React",
//     "Spring Boot",
//     "MongoDB",
//     "Tailwind CSS",
//     "Git",
//     "GitHub",
//     "HTML",
//     "CSS",
//     "REST APIs",
//     "DSA",
//   ];

//   return (
//     <section className="mt-8 px-4">

//       {/* Heading */}
//       <h2 className="text-xl font-semibold mb-4">
//         Activity
//       </h2>

//       {/* Tabs */}
//       <div className="flex gap-3 mb-6 flex-wrap">

//         <button
//           onClick={() => setActiveTab("posts")}
//           className={`rounded-full px-5 py-2 text-sm transition ${
//             activeTab === "posts"
//               ? "bg-blue-600 text-white"
//               : "border border-gray-300 dark:border-gray-700"
//           }`}
//         >
//           Posts
//         </button>

//         <button
//           onClick={() => setActiveTab("projects")}
//           className={`rounded-full px-5 py-2 text-sm transition ${
//             activeTab === "projects"
//               ? "bg-blue-600 text-white"
//               : "border border-gray-300 dark:border-gray-700"
//           }`}
//         >
//           Projects
//         </button>

//         <button
//           onClick={() => setActiveTab("skills")}
//           className={`rounded-full px-5 py-2 text-sm transition ${
//             activeTab === "skills"
//               ? "bg-blue-600 text-white"
//               : "border border-gray-300 dark:border-gray-700"
//           }`}
//         >
//           Skills
//         </button>

//       </div>

//       {/* POSTS */}
//       {activeTab === "posts" && (
//         <div className="relative">

//           {/* Desktop arrows */}
//           <button
//             onClick={() => scroll("left")}
//             className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 bg-white dark:bg-gray-900 shadow"
//           >
//             <ChevronLeft size={18} />
//           </button>

//           <button
//             onClick={() => scroll("right")}
//             className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 bg-white dark:bg-gray-900 shadow"
//           >
//             <ChevronRight size={18} />
//           </button>

//           <div
//             ref={scrollRef}
//             className="flex gap-4 overflow-x-auto scroll-smooth pb-2"
//           >
//             {posts.map((post) => (
//               <div
//                 key={post.id}
//                 className="min-w-[280px] rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-900"
//               >
//                 <Image
//                   src={post.image}
//                   alt={post.title}
//                   width={400}
//                   height={220}
//                   className="h-40 w-full object-cover"
//                 />

//                 <div className="p-4">
//                   <h3 className="font-semibold">
//                     {post.title}
//                   </h3>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       )}

//       {/* PROJECTS */}
//       {activeTab === "projects" && (
//         <div className="flex gap-4 overflow-x-auto pb-2">

//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="min-w-[280px] rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-900"
//             >
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 width={400}
//                 height={220}
//                 className="h-40 w-full object-cover"
//               />

//               <div className="p-4">

//                 <h3 className="font-semibold">
//                   {project.title}
//                 </h3>

//                 <p className="mt-2 text-sm text-gray-500">
//                   {project.tech}
//                 </p>

//               </div>
//             </div>
//           ))}

//         </div>
//       )}

//       {/* SKILLS */}
//       {activeTab === "skills" && (
//         <div className="flex flex-wrap gap-3">

//           {skills.map((skill) => (
//             <div
//               key={skill}
//               className="
//                 rounded-full
//                 border
//                 border-gray-300
//                 dark:border-gray-700
//                 px-4
//                 py-2
//                 text-sm
//                 bg-gray-50
//                 dark:bg-gray-900
//               "
//             >
//               {skill}
//             </div>
//           ))}

//         </div>
//       )}

//     </section>
//   );
// }



// most advance   version 

//  "use client";

// import { useState, useRef } from "react";
// import Image from "next/image";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Plus,
//   Pencil,
// } from "lucide-react";

// export default function ProfileActivity() {
//   const [activeTab, setActiveTab] = useState("posts");

//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     if (!scrollRef.current) return;

//     scrollRef.current.scrollBy({
//       left: direction === "left" ? -320 : 320,
//       behavior: "smooth",
//     });
//   };

//   // ---------------- DEMO POSTS ----------------
//   const posts = [
//     {
//       id: 1,
//       title: "Building my Mingo Chat App",
//       image: "/assets/girl.jpg",
//     },
//     {
//       id: 2,
//       title: "Learning Next.js & Spring Boot",
//       image: "/assets/ankur.jpg",
//     },
//     {
//       id: 3,
//       title: "Frontend UI Progress",
//       image: "/assets/user1.jpg",
//     },
//     {
//       id: 4,
//       title: "Responsive Mobile Layout",
//       image: "/assets/user2.jpg",
//     },
//   ];

//   // ---------------- DEMO PROJECTS ----------------
//   const projects = [
//     {
//       id: 1,
//       title: "Mingo Chat",
//       tech: "Next.js • Spring Boot • MongoDB",
//       image: "/assets/ankur.jpg",
//     },
//     {
//       id: 2,
//       title: "Portfolio Website",
//       tech: "Next.js • Tailwind CSS",
//       image: "/assets/girl.jpg",
//     },
//     {
//       id: 3,
//       title: "Todo App",
//       tech: "React",
//       image: "/assets/user3.jpg",
//     },
//     {
//       id: 4,
//       title: "Toen App",
//       tech: "next js",
//       image: "/assets/user4.jpg",
//     },
//   ];

//   // ---------------- DEMO SKILLS ----------------
//   const skills = [
//     "Java",
//     "JavaScript",
//     "Next.js",
//     "React",
//     "Spring Boot",
//     "MongoDB",
//     "Tailwind CSS",
//     "Git",
//     "GitHub",
//     "HTML",
//     "CSS",
//     "REST APIs",
//     "DSA",
//   ];

//   return (
//    <section className="max-w-5xl mx-auto mt-4 px-3 md:px-4">
//   < div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-black">

//       {/* Heading */}
//      <div className="mb-4 flex items-center justify-between">
//   <h2 className="text-xl font-semibold">
//     Activity
//   </h2>

//   <div className="flex items-center gap-2">
//     <button
//       className="
//         rounded-full
//         p-2
//         hover:bg-gray-100
//         dark:hover:bg-gray-800
//         transition
//       "
//     >
//       <Plus size={18} />
//     </button>

//     <button
//       className="
//         rounded-full
//         p-2
//         hover:bg-gray-100
//         dark:hover:bg-gray-800
//         transition
//       "
//     >
//       <Pencil size={18} />
//     </button>
//   </div>
// </div>
//       {/* Tabs */}
//       <div className="flex gap-3 mb-6 flex-wrap">

//         <button
//           onClick={() => setActiveTab("posts")}
//           className={`rounded-full px-5 py-2 text-sm transition ${
//             activeTab === "posts"
//               ? "bg-blue-600 text-white"
//               : "border border-gray-300 dark:border-gray-700"
//           }`}
//         >
//           Posts
//         </button>

//         <button
//           onClick={() => setActiveTab("projects")}
//           className={`rounded-full px-5 py-2 text-sm transition ${
//             activeTab === "projects"
//               ? "bg-blue-600 text-white"
//               : "border border-gray-300 dark:border-gray-700"
//           }`}
//         >
//           Projects
//         </button>

//         <button
//           onClick={() => setActiveTab("skills")}
//           className={`rounded-full px-5 py-2 text-sm transition ${
//             activeTab === "skills"
//               ? "bg-blue-600 text-white"
//               : "border border-gray-300 dark:border-gray-700"
//           }`}
//         >
//           Skills
//         </button>

//       </div>

//       {/* POSTS */}
//       {activeTab === "posts" && (
//         <div className="relative">

//           {/* Desktop arrows */}
//           <button
//             onClick={() => scroll("left")}
//             className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 bg-white dark:bg-gray-900 shadow"
//           >
//             <ChevronLeft size={18} />
//           </button>

//           <button
//             onClick={() => scroll("right")}
//             className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 bg-white dark:bg-gray-900 shadow"
//           >
//             <ChevronRight size={18} />
//           </button>

//           <div
//             ref={scrollRef}
//             className="flex gap-4 overflow-x-auto hide-scrollbar scroll-smooth pb-2"
//           >
//             {posts.map((post) => (
//               <div
//                 key={post.id}
//                 className="min-w-[280px] rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-900"
//               >
//                 <Image
//                   src={post.image}
//                   alt={post.title}
//                   width={400}
//                   height={220}
//                   className="h-40 w-full object-cover"
//                 />

//                 <div className="p-4">
//                   <h3 className="font-semibold">
//                     {post.title}
//                   </h3>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       )}

//       {/* PROJECTS */}
//       {activeTab === "projects" && (
//   <div className="relative">

//     {/* Left Arrow - Desktop Only */}
//     <button
//       onClick={() => scroll("left")}
//       className="
//         hidden md:flex
//         absolute left-0 top-1/2 -translate-y-1/2
//         z-10
//         rounded-full
//         p-2
//         bg-white dark:bg-gray-900
//         shadow
//       "
//     >
//       <ChevronLeft size={18} />
//     </button>

//     {/* Right Arrow - Desktop Only */}
//     <button
//       onClick={() => scroll("right")}
//       className="
//         hidden md:flex
//         absolute right-0 top-1/2 -translate-y-1/2
//         z-10
//         rounded-full
//         p-2
//         bg-white dark:bg-gray-900
//         shadow
//       "
//     >
//       <ChevronRight size={18} />
//     </button>

//     {/* Scroll Container */}
//     <div
//       ref={scrollRef}
//       className="flex gap-4 overflow-x-auto hide-scrollbar scroll-smooth pb-2"
//     >
//       {projects.map((project) => (
//         <div
//           key={project.id}
//           className="
//             min-w-[280px]
//             rounded-xl
//             border
//             border-gray-200
//             dark:border-gray-800
//             overflow-hidden
//             bg-white
//             dark:bg-gray-900
//           "
//         >
//           <Image
//             src={project.image}
//             alt={project.title}
//             width={400}
//             height={220}
//             className="h-40 w-full object-cover"
//           />

//           <div className="p-4">
//             <h3 className="font-semibold">{project.title}</h3>

//             <p className="mt-2 text-sm text-gray-500">
//               {project.tech}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>

//   </div>
// )}
      

//       {/* SKILLS */}
//       {activeTab === "skills" && (
//         <div className="flex flex-wrap gap-3">

//           {skills.map((skill) => (
//             <div
//               key={skill}
//               className="
//                 rounded-full
//                 border
//                 border-gray-300
//                 dark:border-gray-700
//                 px-4
//                 py-2
//                 text-sm
//                 bg-gray-50
//                 dark:bg-gray-900
//               "
//             >
//               {skill}
//             </div>
//           ))}

//         </div>
//       )}

//       </div>
// </section>
//   );
// }





//






//  "use client";
// import ProfileDetail from "./ProfileDetail";
// import ProfileActivityCreate from "./ProfileActivityCreate";
// import { useState, useRef } from "react";
// import Image from "next/image";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Plus,
//   Pencil,
// } from "lucide-react";

// export default function ProfileActivity() {
//   const [activeTab, setActiveTab] = useState("posts");
//   const [selectedItem, setSelectedItem] = useState(null);
//   const scrollRef = useRef(null);
//  const [openCreate, setOpenCreate] = useState(false);
//   const scroll = (direction) => {
//     if (!scrollRef.current) return;

//     scrollRef.current.scrollBy({
//       left: direction === "left" ? -320 : 320,
//       behavior: "smooth",
//     });
//   };

//   // ---------------- DEMO POSTS ----------------
//   const posts = [
//     {
//       id: 1,
//       title: "Building my Mingo Chat App",
//       image: "/assets/girl.jpg",
//     },
//     {
//       id: 2,
//       title: "Learning Next.js & Spring Boot",
//       image: "/assets/ankur.jpg",
//     },
//     {
//       id: 3,
//       title: "Frontend UI Progress",
//       image: "/assets/user1.jpg",
//     },
//     {
//       id: 4,
//       title: "Responsive Mobile Layout",
//       image: "/assets/user2.jpg",
//     },
//   ];

//   // ---------------- DEMO PROJECTS ----------------
//   const projects = [
//     {
//       id: 1,
//       title: "Mingo Chat",
//       tech: "Next.js • Spring Boot • MongoDB",
//       image: "/assets/ankur.jpg",
//     },
//     {
//       id: 2,
//       title: "Portfolio Website",
//       tech: "Next.js • Tailwind CSS",
//       image: "/assets/girl.jpg",
//     },
//     {
//       id: 3,
//       title: "Todo App",
//       tech: "React",
//       image: "/assets/user3.jpg",
//     },
//     {
//       id: 4,
//       title: "Toen App",
//       tech: "next js",
//       image: "/assets/user4.jpg",
//     },
//   ];

//   // ---------------- DEMO SKILLS ----------------
//   const skills = [
//     "Java",
//     "JavaScript",
//     "Next.js",
//     "React",
//     "Spring Boot",
//     "MongoDB",
//     "Tailwind CSS",
//     "Git",
//     "GitHub",
//     "HTML",
//     "CSS",
//     "REST APIs",
//     "DSA",
//   ];

//   return (
//    <section className="max-w-5xl mx-auto mt-4 px-3 md:px-4">
//   < div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-black">

//       {/* Heading */}
//      <div className="mb-4 flex items-center justify-between">
//   <h2 className="text-xl font-semibold">
//     Activity
//   </h2>

//   <div className="flex items-center gap-2">
//     <button
//      onClick={() => setOpenCreate(true)}
//       className="
//         rounded-full
//         p-2
//         hover:bg-gray-100
//         dark:hover:bg-gray-800
//         transition
//       "
//     >
//       <Plus size={18} />
//     </button>

//     <button
//       className="
//         rounded-full
//         p-2
//         hover:bg-gray-100
//         dark:hover:bg-gray-800
//         transition
//       "
//     >
//       <Pencil size={18} />
//     </button>
//   </div>
// </div>
//       {/* Tabs */}
//       <div className="flex gap-3 mb-6 flex-wrap">

//         <button
//           onClick={() => setActiveTab("posts")}
//           className={`rounded-full px-5 py-2 text-sm transition ${
//             activeTab === "posts"
//               ? "bg-blue-600 text-white"
//               : "border border-gray-300 dark:border-gray-700"
//           }`}
//         >
//           Posts
//         </button>

//         <button
//           onClick={() => setActiveTab("projects")}
//           className={`rounded-full px-5 py-2 text-sm transition ${
//             activeTab === "projects"
//               ? "bg-blue-600 text-white"
//               : "border border-gray-300 dark:border-gray-700"
//           }`}
//         >
//           Projects
//         </button>

//         <button
//           onClick={() => setActiveTab("skills")}
//           className={`rounded-full px-5 py-2 text-sm transition ${
//             activeTab === "skills"
//               ? "bg-blue-600 text-white"
//               : "border border-gray-300 dark:border-gray-700"
//           }`}
//         >
//           Skills
//         </button>

//       </div>

//       {/* POSTS */}
//       {activeTab === "posts" && (
//         <div className="relative">

//           {/* Desktop arrows */}
//           <button
//             onClick={() => scroll("left")}
//             className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 bg-white dark:bg-gray-900 shadow"
//           >
//             <ChevronLeft size={18} />
//           </button>

//           <button
//             onClick={() => scroll("right")}
//             className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 bg-white dark:bg-gray-900 shadow"
//           >
//             <ChevronRight size={18} />
//           </button>

//           <div
//             ref={scrollRef}
//             className="flex gap-4 overflow-x-auto hide-scrollbar scroll-smooth pb-2"
//           >
//            {posts.map((post) => (
// <div
//   key={post.id}
//   onClick={() => setSelectedItem(post)}
//   className="
//     cursor-pointer
//     min-w-[280px]
//     rounded-xl
//     border border-gray-200 dark:border-gray-800
//     bg-white dark:bg-gray-900
//     overflow-hidden
//     shadow-sm
//     hover:shadow-md
//     transition
//   "
// >
//                 <Image
//                   src={post.image}
//                   alt={post.title}
//                   width={400}
//                   height={220}
//                   className="h-40 w-full object-cover"
//                 />

//                 <div className="p-4">
//                   <h3 className="font-semibold">
//                     {post.title}
//                   </h3>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       )}

//       {/* PROJECTS */}
//       {activeTab === "projects" && (
//   <div className="relative">

//     {/* Left Arrow - Desktop Only */}
//     <button
//       onClick={() => scroll("left")}
//       className="
//         hidden md:flex
//         absolute left-0 top-1/2 -translate-y-1/2
//         z-10
//         rounded-full
//         p-2
//         bg-white dark:bg-gray-900
//         shadow
//       "
//     >
//       <ChevronLeft size={18} />
//     </button>

//     {/* Right Arrow - Desktop Only */}
//     <button
//       onClick={() => scroll("right")}
//       className="
//         hidden md:flex
//         absolute right-0 top-1/2 -translate-y-1/2
//         z-10
//         rounded-full
//         p-2
//         bg-white dark:bg-gray-900
//         shadow
//       "
//     >
//       <ChevronRight size={18} />
//     </button>

//     {/* Scroll Container */}
//     <div
//       ref={scrollRef}
//       className="flex gap-4 overflow-x-auto hide-scrollbar scroll-smooth pb-2"
//     >
//       {projects.map((project) => (
//  <div
//   key={project.id}
//   onClick={() => setSelectedItem(project)}
//   className="
//     cursor-pointer
//     min-w-[280px]
//     rounded-xl
//     border border-gray-200 dark:border-gray-800
//     bg-white dark:bg-gray-900
//     overflow-hidden
//     shadow-sm
//     hover:shadow-md
//     transition
//   "
// >
//           <Image
//             src={project.image}
//             alt={project.title}
//             width={400}
//             height={220}
//             className="h-40 w-full object-cover"
//           />

//           <div className="p-4">
//             <h3 className="font-semibold">{project.title}</h3>

//             <p className="mt-2 text-sm text-gray-500">
//               {project.tech}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>

//   </div>
// )}
      

//       {/* SKILLS */}
//       {activeTab === "skills" && (
//         <div className="flex flex-wrap gap-3">

//           {skills.map((skill) => (
//             <div
//               key={skill}
//               className="
//                 rounded-full
//                 border
//                 border-gray-300
//                 dark:border-gray-700
//                 px-4
//                 py-2
//                 text-sm
//                 bg-gray-50
//                 dark:bg-gray-900
//               "
//             >
//               {skill}
//             </div>
//           ))}

//         </div>
//       )}

//       <ProfileDetail
//   open={!!selectedItem}
//   data={selectedItem}
//   onClose={() => setSelectedItem(null)}
// />
// <ProfileActivityCreate
//   open={openCreate}
//   onClose={() => setOpenCreate(false)}
// />

//       </div>
// </section>
//   );
// }




// more advance 


"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Plus, Pencil, Trash2 } from "lucide-react";

import {
  getMyActivities,
  getUserActivitiesByUsername,
  deleteActivity,
  createActivity,
  updateActivity
} from "@/services/activityService";
import ProfileDetail from "./ProfileDetail";
import ProfileActivityCreate from "./ProfileActivityCreate";

export default function ProfileActivity({ username, userId, isOwnProfile }) {
  const [activeTab, setActiveTab] = useState("posts");
  const [selectedItem, setSelectedItem] = useState(null);
  const [openCreate, setOpenCreate] = useState(false);

  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editData, setEditData] = useState(null);

  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  // ================= FETCH =================
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        setLoading(true);

        let data = [];

        if (isOwnProfile) {
          data = await getMyActivities(userId);
        } else {
          data = await getUserActivitiesByUsername(username);
        }

        setActivities(data || []);
      } catch (err) {
        console.log("Activity fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (userId || username) fetchActivities();
  }, [userId, username, isOwnProfile]);

  // ================= DELETE =================
  const handleDelete = async (id) => {
    if (!userId) return;

    try {
      await deleteActivity(id, userId);
      setActivities((prev) => prev.filter((a) => a.id !== id));
    } catch (err) {
      console.log("Delete failed:", err);
    }
  };

  // ================= FILTER =================
  const posts = activities.filter((a) => a.type === "post");
  const projects = activities.filter((a) => a.type === "project");
  const skills = activities.filter((a) => a.type === "skill");

  return (
    <section className="max-w-5xl mx-auto mt-4 px-3 md:px-4">
      <div className="rounded-2xl border bg-white dark:bg-black p-5">

        {/* HEADER */}
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">Activity</h2>

          {isOwnProfile && (
            <div className="flex gap-2">
              <button
                onClick={() => setOpenCreate(true)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Plus size={18} />
                
              </button>
              <button
                onClick={() => setOpenCreate(true)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Pencil size={18} />
                
              </button>
              <button
                onClick={() => setOpenCreate(true)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Trash2 size={18} />
                
              </button>
            </div>
          )}
        </div>

        {/* TABS */}
        <div className="flex gap-3 mb-6">
          {["posts", "projects", "skills"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "border"
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {loading && <p>Loading...</p>}

        {/* POSTS */}
        {activeTab === "posts" && (
          <div className="relative">
            <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-2">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="min-w-[280px] border rounded-xl overflow-hidden relative"
                >
                  <Image
                    src={post.imageUrl || "/assets/default.jpg"}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="h-40 w-full object-cover"
                  />

                  <div className="p-3">
                    <h3>{post.title}</h3>
                  </div>

                  {isOwnProfile && (
                    <div className="absolute top-2 right-2 flex gap-2">
                      <button
                        onClick={() => {
                          setEditData(post);
                          setOpenCreate(true);
                        }}
                        className="p-1 bg-white rounded"
                      >
                        <Pencil size={14} />
                      </button>

                      <button
                        onClick={() => handleDelete(post.id)}
                        className="p-1 bg-white rounded"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PROJECTS */}
        {activeTab === "projects" && (
          <div className="flex gap-4 overflow-x-auto">
            {projects.map((p) => (
              <div key={p.id} className="min-w-[280px] border rounded-xl">
                <Image
                  src={p.imageUrl || "/assets/default.jpg"}
                  alt={p.title}
                  width={400}
                  height={200}
                  className="h-40 w-full object-cover"
                />
                <div className="p-3">
                  <h3>{p.title}</h3>
                  <p className="text-sm text-gray-500">{p.techStack}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SKILLS */}
        {activeTab === "skills" && (
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s.id || s.title || s.techStack}
                className="px-3 py-1 border rounded-full"
              >
                {s.title || s.techStack}
              </span>
            ))}
          </div>
        )}

        {/* DETAIL MODAL */}
        <ProfileDetail
          open={!!selectedItem}
          data={selectedItem}
          onClose={() => setSelectedItem(null)}
        />

        {/* CREATE / EDIT MODAL */}
        <ProfileActivityCreate
          open={openCreate}
          onClose={() => {
            setOpenCreate(false);
            setEditData(null);
          }}
          editData={editData}
          userId={userId}
        />
      </div>
    </section>
  );
}