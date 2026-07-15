// "use client";

// import { useState } from "react";
// import {
//   X,
//   Heart,
//   MessageCircle,
//   Share2,
//   Smile,
//   Bookmark,
// } from "lucide-react";

// export default function ProfileDetailModal({ open, onClose, data }) {
//   const [showComments, setShowComments] = useState(false);
//   const [isExpanded, setIsExpanded] = useState(false);

//   if (!open) return null;

//   // ---------------- DEMO DESCRIPTION ----------------
//   const description =
//     data?.description ||
//     `This is a demo post showing how "More" expands only the text, not the image.

// It simulates a real social media post where users write long content like project updates, thoughts, or technical explanations.

// The UI should remain stable while only the text area expands smoothly.`;

//   // ---------------- DEMO COMMENTS ----------------
//   const comments = [
//     {
//       id: 1,
//       name: "Aman",
//       image: "/assets/user1.jpg",
//       text: "This UI is fire 🔥",
//     },
//     {
//       id: 2,
//       name: "Neha",
//       image: "/assets/user2.jpg",
//       text: "Very clean design 💯",
//     },
//     {
//       id: 3,
//       name: "Rohit",
//       image: "/assets/user3.jpg",
//       text: "Looks professional 👌",
//     },
//   ];

//   return (
//     <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-3">

//       {/* CARD */}
//       <div className="w-full max-w-2xl max-h-[95vh] overflow-y-auto bg-white dark:bg-gray-900 text-black dark:text-white rounded-xl relative">

//         {/* CLOSE */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
//         >
//           <X size={18} />
//         </button>

//         {/* ================= TITLE + DESCRIPTION ================= */}
//         <div className="p-4">

//           <h2 className="text-xl font-bold">
//             {data?.title || "Untitled Post"}
//           </h2>

//           {/* DESCRIPTION (ONLY THIS EXPANDS) */}
//           <p
//             className={`
//               text-sm text-gray-500 mt-3 leading-relaxed
//               ${isExpanded ? "" : "line-clamp-2"}
//             `}
//           >
//             {description}
//           </p>

//           {/* MORE BUTTON */}
//           <button
//             onClick={() => setIsExpanded(!isExpanded)}
//             className="mt-2 text-blue-600 text-sm hover:underline"
//           >
//             {isExpanded ? "Show less" : "More"}
//           </button>
//         </div>

//         {/* ================= IMAGE (FIXED SIZE) ================= */}
//         <div className="w-full h-56 bg-gray-200 dark:bg-gray-800">
//           {data?.image && (
//             <img
//               src={data.image}
//               alt="post"
//               className="w-full h-full object-cover"
//             />
//           )}
//         </div>

//         {/* ================= ACTIONS ================= */}
//         <div className="p-4 flex items-center justify-between text-gray-600 dark:text-gray-300">

//           <div className="flex items-center gap-5">

//             <button className="flex items-center gap-2 hover:text-red-500">
//               <Heart size={18} /> Like
//             </button>

//             <button
//               onClick={() => setShowComments(!showComments)}
//               className="flex items-center gap-2 hover:text-blue-500"
//             >
//               <MessageCircle size={18} /> Comment
//             </button>

//             <button className="flex items-center gap-2 hover:text-green-500">
//               <Share2 size={18} /> Share
//             </button>

//           </div>

//           <button className="hover:text-yellow-500">
//             <Bookmark size={18} />
//           </button>
//         </div>

//         {/* ================= COMMENTS ================= */}
//         {showComments && (
//           <div className="border-t border-gray-200 dark:border-gray-700 p-4">

//             {/* INPUT */}
//             <div className="flex items-center gap-2 mb-4">

//               <input
//                 placeholder="Write a comment..."
//                 className="flex-1 px-3 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-sm outline-none"
//               />

//               <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
//                 <Smile size={18} />
//               </button>

//             </div>

//             {/* COMMENTS LIST */}
//             <div className="space-y-4">

//               {comments.map((c) => (
//                 <div key={c.id} className="flex gap-3">

//                   <img
//                     src={c.image}
//                     className="w-9 h-9 rounded-full object-cover"
//                   />

//                   <div>
//                     <p className="text-sm font-semibold">{c.name}</p>
//                     <p className="text-sm text-gray-600 dark:text-gray-400">
//                       {c.text}
//                     </p>
//                   </div>

//                 </div>
//               ))}

//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }



// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import {
//   X,
//   Heart,
//   MessageCircle,
//   Share2,
//   Bookmark,
//   Smile,
//   Calendar,
//   Code,
//   ExternalLink,
//   Pencil,
//   Trash2,
// } from "lucide-react";

// export default function ProfileDetail({
//   open,
//   onClose,
//   data,
//   isOwnProfile = false,
//   onEdit,
//   onDelete,
// }) {
//   const [showComments, setShowComments] = useState(false);
//   const [expanded, setExpanded] = useState(false);

//   if (!open || !data) return null;

//   const isProject = data.type === "project";
//   const image = data.imageUrl || "/assets/default.jpg";

//   return (
//     <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">

//       <div className="relative w-full max-w-3xl max-h-[95vh] overflow-y-auto rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800">

//         {/* CLOSE */}
//         <button
//           onClick={onClose}
//           className="absolute right-4 top-4 z-20 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
//         >
//           <X size={20} />
//         </button>

//         {/* IMAGE */}
//         <div className="relative h-72 w-full bg-gray-200 dark:bg-gray-900">
//           <Image src={image} alt={data.title} fill className="object-cover" />
//         </div>

//         <div className="p-6">

//           {/* TYPE */}
//           <span className="px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
//             {isProject ? "PROJECT" : "POST"}
//           </span>

//           {/* TITLE */}
//           <h2 className="mt-4 text-3xl font-bold">
//             {data.title}
//           </h2>

//           {/* DESCRIPTION */}
//           {data.description && (
//             <>
//               <p
//                 className={`mt-4 text-gray-600 dark:text-gray-300 whitespace-pre-line ${
//                   expanded ? "" : "line-clamp-4"
//                 }`}
//               >
//                 {data.description}
//               </p>

//               {data.description.length > 150 && (
//                 <button
//                   onClick={() => setExpanded(!expanded)}
//                   className="mt-2 text-sm text-blue-600 hover:underline"
//                 >
//                   {expanded ? "Show less" : "Read more"}
//                 </button>
//               )}
//             </>
//           )}

//           {/* PROJECT EXTRA INFO */}
//           {isProject && (
//             <div className="mt-6 space-y-3">

//               {data.techStack && (
//                 <div className="flex items-center gap-2">
//                   <Code size={18} />
//                   <span>{data.techStack}</span>
//                 </div>
//               )}

//               {data.projectUrl && (
//                 <a
//                   href={data.projectUrl}
//                   target="_blank"
//                   className="flex items-center gap-2 text-blue-600 hover:underline"
//                 >
//                   <ExternalLink size={18} />
//                   Live Project
//                 </a>
//               )}

//               {data.githubUrl && (
//                 <a
//                   href={data.githubUrl}
//                   target="_blank"
//                   className="flex items-center gap-2 text-blue-600 hover:underline"
//                 >
//                   <ExternalLink size={18} />
//                   GitHub
//                 </a>
//               )}
//             </div>
//           )}

//           {/* DATE */}
//           {data.createdAt && (
//             <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
//               <Calendar size={16} />
//               {new Date(data.createdAt).toLocaleString()}
//             </div>
//           )}

//           {/* OWNER ACTIONS */}
//           {isOwnProfile && (
//             <div className="mt-6 flex gap-3">

//               <button
//                 onClick={() => onEdit?.(data)}
//                 className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
//               >
//                 <Pencil size={16} />
//                 Edit
//               </button>

//               <button
//                 onClick={() => onDelete?.(data.id)}
//                 className="flex items-center gap-2 px-4 py-2 border border-red-400 text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
//               >
//                 <Trash2 size={16} />
//                 Delete
//               </button>

//             </div>
//           )}

//           {/* ACTION BAR */}
//           <div className="mt-8 border-t pt-5 flex items-center justify-between">

//             <div className="flex gap-6">

//               <button className="flex items-center gap-2 hover:text-red-500">
//                 <Heart size={20} />
//                 Like
//               </button>

//               <button
//                 onClick={() => setShowComments(!showComments)}
//                 className="flex items-center gap-2 hover:text-blue-500"
//               >
//                 <MessageCircle size={20} />
//                 Comment
//               </button>

//               <button className="flex items-center gap-2 hover:text-green-500">
//                 <Share2 size={20} />
//                 Share
//               </button>

//             </div>

//             <button className="hover:text-yellow-500">
//               <Bookmark size={20} />
//             </button>

//           </div>

//           {/* COMMENTS */}
//           {showComments && (
//             <div className="mt-5 border-t pt-5">

//               <div className="flex gap-2">
//                 <input
//                   placeholder="Write a comment..."
//                   className="flex-1 px-4 py-2 rounded-full border bg-transparent text-sm"
//                 />
//                 <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
//                   <Smile size={18} />
//                 </button>
//               </div>

//               <div className="mt-4 text-sm text-gray-500 text-center">
//                 No comments yet
//               </div>

//             </div>
//           )}

//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";

// import {
//   likeActivity,
//   unlikeActivity,
//   getLikeStatus,
// } from "@/services/activityService";

// import {
//   X,
//   Heart,
//   MessageCircle,
//   Share2,
//   Bookmark,
//   Smile,
//   Calendar,
//   Code,
//   ExternalLink,
//   Pencil,
//   Trash2,
// } from "lucide-react";


// export default function ProfileDetail({
//   open,
//   onClose,
//   data,
//   isOwnProfile = false,
//   onEdit,
//   onDelete,
// }) {

//   const [showComments, setShowComments] = useState(false);
//   const [expanded, setExpanded] = useState(false);

//   const [liked, setLiked] = useState(false);
//   const [likeCount, setLikeCount] = useState(0);



//   // ================= LOAD LIKE STATUS =================

//   useEffect(() => {

//     if (!open || !data?.id) return;


//     setLikeCount(data.likeCount || 0);
//     setLiked(false);


//     const fetchLikeStatus = async () => {

//       try {

//         const response = await getLikeStatus(data.id);

//         setLiked(response.liked);


//       } catch (error) {

//         console.error("LIKE STATUS ERROR:", error);

//       }

//     };


//     fetchLikeStatus();


//   }, [open, data]);





//   // ================= LIKE BUTTON =================

//   const handleLike = async () => {

//     try {


//       let response;


//       if (liked) {

//         response = await unlikeActivity(data.id);

//       } else {

//         response = await likeActivity(data.id);

//       }



//       console.log("LIKE RESPONSE:", response);



//       setLiked(response.liked);

//       setLikeCount(response.count);



//     } catch (error) {


//       console.error("LIKE ERROR:", error);


//     }

//   };





//   if (!open || !data) return null;


//   const isProject = data.type === "project";

//   const image = data.imageUrl || "/assets/default.jpg";





//   return (
//     <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">


//       <div className="relative w-full max-w-3xl max-h-[95vh] overflow-y-auto rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800">



//         {/* CLOSE */}

//         <button
//           onClick={onClose}
//           className="absolute right-4 top-4 z-20 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
//         >

//           <X size={20}/>

//         </button>





//         {/* IMAGE */}

//         <div className="relative h-72 w-full bg-gray-200 dark:bg-gray-900">

//           <Image
//             src={image}
//             alt={data.title}
//             fill
//             className="object-cover"
//           />

//         </div>





//         <div className="p-6">



//           {/* TYPE */}

//           <span className="px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">

//             {isProject ? "PROJECT" : "POST"}

//           </span>





//           {/* TITLE */}

//           <h2 className="mt-4 text-3xl font-bold">

//             {data.title}

//           </h2>





//           {/* DESCRIPTION */}

//           {data.description && (

//             <>

//               <p
//                 className={`mt-4 text-gray-600 dark:text-gray-300 whitespace-pre-line ${
//                   expanded ? "" : "line-clamp-4"
//                 }`}
//               >

//                 {data.description}

//               </p>



//               {data.description.length > 150 && (

//                 <button
//                   onClick={() => setExpanded(!expanded)}
//                   className="mt-2 text-sm text-blue-600 hover:underline"
//                 >

//                   {expanded ? "Show less" : "Read more"}

//                 </button>

//               )}

//             </>

//           )}







//           {/* PROJECT EXTRA INFO */}

//           {isProject && (

//             <div className="mt-6 space-y-3">


//               {data.techStack && (

//                 <div className="flex items-center gap-2">

//                   <Code size={18}/>

//                   <span>{data.techStack}</span>

//                 </div>

//               )}





//               {data.projectUrl && (

//                 <a
//                   href={data.projectUrl}
//                   target="_blank"
//                   className="flex items-center gap-2 text-blue-600 hover:underline"
//                 >

//                   <ExternalLink size={18}/>

//                   Live Project

//                 </a>

//               )}





//               {data.githubUrl && (

//                 <a
//                   href={data.githubUrl}
//                   target="_blank"
//                   className="flex items-center gap-2 text-blue-600 hover:underline"
//                 >

//                   <ExternalLink size={18}/>

//                   GitHub

//                 </a>

//               )}


//             </div>

//           )}







//           {/* DATE */}

//           {data.createdAt && (

//             <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">

//               <Calendar size={16}/>

//               {new Date(data.createdAt).toLocaleString()}

//             </div>

//           )}







//           {/* OWNER ACTIONS */}

//           {isOwnProfile && (

//             <div className="mt-6 flex gap-3">


//               <button
//                 onClick={() => onEdit?.(data)}
//                 className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
//               >

//                 <Pencil size={16}/>

//                 Edit

//               </button>




//               <button
//                 onClick={() => onDelete?.(data.id)}
//                 className="flex items-center gap-2 px-4 py-2 border border-red-400 text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
//               >

//                 <Trash2 size={16}/>

//                 Delete

//               </button>


//             </div>

//           )}







//           {/* ACTION BAR */}

//           <div className="mt-8 border-t pt-5 flex items-center justify-between">


//             <div className="flex gap-6">



//               <button
//                 onClick={handleLike}
//                 className={`flex items-center gap-2 ${
//                   liked
//                     ? "text-red-500"
//                     : "hover:text-red-500"
//                 }`}
//               >

//                 <Heart
//                   size={20}
//                   fill={liked ? "currentColor" : "none"}
//                 />

//                 Like ({likeCount})

//               </button>





//               <button
//                 onClick={() => setShowComments(!showComments)}
//                 className="flex items-center gap-2 hover:text-blue-500"
//               >

//                 <MessageCircle size={20}/>

//                 Comment

//               </button>





//               <button className="flex items-center gap-2 hover:text-green-500">

//                 <Share2 size={20}/>

//                 Share

//               </button>



//             </div>





//             <button className="hover:text-yellow-500">

//               <Bookmark size={20}/>

//             </button>



//           </div>







//           {/* COMMENTS */}

//           {showComments && (

//             <div className="mt-5 border-t pt-5">


//               <div className="flex gap-2">


//                 <input
//                   placeholder="Write a comment..."
//                   className="flex-1 px-4 py-2 rounded-full border bg-transparent text-sm"
//                 />



//                 <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">

//                   <Smile size={18}/>

//                 </button>


//               </div>



//               <div className="mt-4 text-sm text-gray-500 text-center">

//                 No comments yet

//               </div>


//             </div>

//           )}



//         </div>


//       </div>


//     </div>
//   );
// }







// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";

// import {
//   likeActivity,
//   unlikeActivity,
//   getLikeStatus,
//   getLikeCount,
// } from "@/services/activityService";
// import {
//   X,
//   Heart,
//   MessageCircle,
//   Share2,
//   Bookmark,
//   Smile,
//   Calendar,
//   Code,
//   ExternalLink,
//   Pencil,
//   Trash2,
// } from "lucide-react";


// export default function ProfileDetail({
//   open,
//   onClose,
//   data,
//   isOwnProfile = false,
//   onEdit,
//   onDelete,
// }) {

//   const [showComments, setShowComments] = useState(false);
//   const [expanded, setExpanded] = useState(false);
//   const [loadingLike, setLoadingLike] = useState(false);
//   const [liked, setLiked] = useState(false);
//   const [likeCount, setLikeCount] = useState(0);



//   // ================= LOAD LIKE STATUS =================


// useEffect(() => {
//   if (!open || !data?.id) return;

//   let mounted = true;

//   setLiked(false);
//   setLikeCount(0);
//   setShowComments(false);
// setExpanded(false);

//   const fetchLikeData = async () => {
//     try {
//       const statusRes = await getLikeStatus(data.id);
//       const countRes = await getLikeCount(data.id);

//       if (!mounted) return;

//       setLiked(statusRes.liked);
//       setLikeCount(countRes.count);

//     } catch (error) {
//       console.error("LIKE ERROR:", error);
//     }
//   };

//   fetchLikeData();

//   return () => {
//     mounted = false;
//   };
// }, [open, data?.id]);


//   // ================= LIKE BUTTON =================

// const handleLike = async () => {
//   if (!data?.id || loadingLike) return;

//   setLoadingLike(true);

//   try {
//     let response;

//     if (liked) {
//       response = await unlikeActivity(data.id);
//     } else {
//       response = await likeActivity(data.id);
//     }

//     setLiked(response.liked);
//     setLikeCount(response.likeCount);

//   } catch (error) {
//     console.error("LIKE ERROR:", error);
//   } finally {
//     setLoadingLike(false);
//   }
// };





//   if (!open || !data) return null;


//   const isProject = data.type === "project";

//   const image = data.imageUrl || "/assets/default.jpg";





//   return (
//     <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">


//       <div className="relative w-full max-w-3xl max-h-[95vh] overflow-y-auto rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800">



//         {/* CLOSE */}

//         <button
//           onClick={onClose}
//           className="absolute right-4 top-4 z-20 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
//         >

//           <X size={20}/>

//         </button>





//         {/* IMAGE */}

//         <div className="relative h-72 w-full bg-gray-200 dark:bg-gray-900">

//           <Image
//             src={image}
//             alt={data.title}
//             fill
//             className="object-cover"
//           />

//         </div>





//         <div className="p-6">



//           {/* TYPE */}

//           <span className="px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">

//             {isProject ? "PROJECT" : "POST"}

//           </span>





//           {/* TITLE */}

//           <h2 className="mt-4 text-3xl font-bold">

//             {data.title}

//           </h2>





//           {/* DESCRIPTION */}

//           {data.description && (

//             <>

//               <p
//                 className={`mt-4 text-gray-600 dark:text-gray-300 whitespace-pre-line ${
//                   expanded ? "" : "line-clamp-4"
//                 }`}
//               >

//                 {data.description}

//               </p>



//               {data.description.length > 150 && (

//                 <button
//                   onClick={() => setExpanded(!expanded)}
//                   className="mt-2 text-sm text-blue-600 hover:underline"
//                 >

//                   {expanded ? "Show less" : "Read more"}

//                 </button>

//               )}

//             </>

//           )}







//           {/* PROJECT EXTRA INFO */}

//           {isProject && (

//             <div className="mt-6 space-y-3">


//               {data.techStack && (

//                 <div className="flex items-center gap-2">

//                   <Code size={18}/>

//                   <span>{data.techStack}</span>

//                 </div>

//               )}





//               {data.projectUrl && (

//                 <a
//                   href={data.projectUrl}
//                   target="_blank"
//                   className="flex items-center gap-2 text-blue-600 hover:underline"
//                 >

//                   <ExternalLink size={18}/>

//                   Live Project

//                 </a>

//               )}





//               {data.githubUrl && (

//                 <a
//                   href={data.githubUrl}
//                   target="_blank"
//                   className="flex items-center gap-2 text-blue-600 hover:underline"
//                 >

//                   <ExternalLink size={18}/>

//                   GitHub

//                 </a>

//               )}


//             </div>

//           )}







//           {/* DATE */}

//           {data.createdAt && (

//             <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">

//               <Calendar size={16}/>

//               {new Date(data.createdAt).toLocaleString()}

//             </div>

//           )}







//           {/* OWNER ACTIONS */}

//           {isOwnProfile && (

//             <div className="mt-6 flex gap-3">


//               <button
//                 onClick={() => onEdit?.(data)}
//                 className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
//               >

//                 <Pencil size={16}/>

//                 Edit

//               </button>




//               <button
//                 onClick={() => onDelete?.(data.id)}
//                 className="flex items-center gap-2 px-4 py-2 border border-red-400 text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
//               >

//                 <Trash2 size={16}/>

//                 Delete

//               </button>


//             </div>

//           )}







//           {/* ACTION BAR */}

//           <div className="mt-8 border-t pt-5 flex items-center justify-between">


//             <div className="flex gap-6">



//                   <button
//   onClick={handleLike}
//   disabled={loadingLike}
//   className={`flex items-center gap-2 ${
//     liked
//       ? "text-red-500"
//       : "hover:text-red-500"
//   } ${
//     loadingLike
//       ? "opacity-60 cursor-not-allowed"
//       : ""
//   }`}
// >

//                 <Heart
//                   size={20}
//                   fill={liked ? "currentColor" : "none"}
//                 />

//                 Like ({likeCount})

//               </button>





//               <button
//                 onClick={() => setShowComments(!showComments)}
//                 className="flex items-center gap-2 hover:text-blue-500"
//               >

//                 <MessageCircle size={20}/>

//                 Comment

//               </button>





//               <button className="flex items-center gap-2 hover:text-green-500">

//                 <Share2 size={20}/>

//                 Share

//               </button>



//             </div>





//             <button className="hover:text-yellow-500">

//               <Bookmark size={20}/>

//             </button>



//           </div>







//           {/* COMMENTS */}

//           {showComments && (

//             <div className="mt-5 border-t pt-5">


//               <div className="flex gap-2">


//                 <input
//                   placeholder="Write a comment..."
//                   className="flex-1 px-4 py-2 rounded-full border bg-transparent text-sm"
//                 />



//                 <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">

//                   <Smile size={18}/>

//                 </button>


//               </div>



//               <div className="mt-4 text-sm text-gray-500 text-center">

//                 No comments yet

//               </div>


//             </div>

//           )}



//         </div>


//       </div>


//     </div>
//   );
// }






// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";

// import {
//   likeActivity,
//   unlikeActivity,
//   getLikeStatus,
//   getLikeCount,
// } from "@/services/activityService";

// import {
//   getComments,
//   getCommentCount,
//   addComment,
//   deleteComment,
// } from "@/services/commentService";
// import {
//   X,
//   Heart,
//   MessageCircle,
//   Share2,
//   Bookmark,
//   Smile,
//   Calendar,
//   Code,
//   ExternalLink,
//   Pencil,
//   Trash2,
// } from "lucide-react";


// export default function ProfileDetail({
//   open,
//   onClose,
//   data,
//   isOwnProfile = false,
//   onEdit,
//   onDelete,
// }) {

//   const [showComments, setShowComments] = useState(false);
//   const [expanded, setExpanded] = useState(false);
//   const [loadingLike, setLoadingLike] = useState(false);
//   const [liked, setLiked] = useState(false);
//   const [likeCount, setLikeCount] = useState(0);

//   const [comments, setComments] = useState([]);
//   const [commentText, setCommentText] = useState("");
//   const [commentCount, setCommentCount] = useState(0);
//   const [loadingComments, setLoadingComments] = useState(false);

//   // ================= LOAD LIKE STATUS =================


// useEffect(() => {
//   if (!open || !data?.id) return;

//   let mounted = true;

//   setLiked(false);
//   setLikeCount(0);
//   setShowComments(false);
// setExpanded(false);

// const fetchData = async () => {
//   try {
//     const [
//       statusRes,
//       likeCountRes,
//       commentCountRes,
//     ] = await Promise.all([
//       getLikeStatus(data.id),
//       getLikeCount(data.id),
//       getCommentCount(data.id),
//     ]);

//     if (!mounted) return;

//     setLiked(statusRes.liked);
//     setLikeCount(likeCountRes.count);
//     setCommentCount(commentCountRes.count);

//   } catch (error) {
//     console.error(error);
//   }
// };

// fetchData();

//   return () => {
//     mounted = false;
//   };
// }, [open, data?.id]);


//   // ================= LIKE BUTTON =================

// const handleLike = async () => {
//   if (!data?.id || loadingLike) return;

//   setLoadingLike(true);

//   try {
//     let response;

//     if (liked) {
//       response = await unlikeActivity(data.id);
//     } else {
//       response = await likeActivity(data.id);
//     }

//     setLiked(response.liked);
//     setLikeCount(response.likeCount);

//   } catch (error) {
//     console.error("LIKE ERROR:", error);
//   } finally {
//     setLoadingLike(false);
//   }
// };
// const loadComments = async () => {
//   if (!data?.id) return;

//   setLoadingComments(true);

//   try {
//     const response = await getComments(data.id);
//     setComments(response);
//   } catch (error) {
//     console.error("COMMENT ERROR:", error);
//   } finally {
//     setLoadingComments(false);
//   }
// };

//   if (!open || !data) return null;


//   const isProject = data.type === "project";

//   const image = data.imageUrl || "/assets/default.jpg";


// const handleComment = async () => {
//   if (!commentText.trim()) return;

//   try {
//     await addComment(data.id, commentText);

//     setCommentText("");

//     await loadComments();

//     const count = await getCommentCount(data.id);
//     setCommentCount(count.count);

//   } catch (error) {
//     console.error("COMMENT ERROR:", error);
//   }
// };
//   return (
//     <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">


//       <div className="relative w-full max-w-3xl max-h-[95vh] overflow-y-auto rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800">
//         {/* CLOSE*/}

//         <button
//           onClick={onClose}
//           className="absolute right-4 top-4 z-20 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
//         >

//           <X size={20}/>

//         </button>

//         {/* IMAGE */}

//         <div className="relative h-72 w-full bg-gray-200 dark:bg-gray-900">

//           <Image
//             src={image}
//             alt={data.title}
//             fill
//             className="object-cover"
//           />

//         </div>

//         <div className="p-6">

//           {/* TYPE */}

//           <span className="px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">

//             {isProject ? "PROJECT" : "POST"}

//           </span>

//           {/* TITLE */}

//           <h2 className="mt-4 text-3xl font-bold">

//             {data.title}
//           </h2>

//           {/* DESCRIPTION */}

//           {data.description && (

//             <>
//               <p
//                 className={`mt-4 text-gray-600 dark:text-gray-300 whitespace-pre-line ${
//                   expanded ? "" : "line-clamp-4"
//                 }`}
//               >

//                 {data.description}

//               </p>
//               {data.description.length > 150 && (

//                 <button
//                   onClick={() => setExpanded(!expanded)}
//                   className="mt-2 text-sm text-blue-600 hover:underline"
//                 >

//                   {expanded ? "Show less" : "Read more"}

//                 </button>

//               )}

//             </>

//           )}
//           {/* PROJECT EXTRA INFO */}

//           {isProject && (

//             <div className="mt-6 space-y-3">
//               {data.techStack && (

//                 <div className="flex items-center gap-2">

//                   <Code size={18}/>

//                   <span>{data.techStack}</span>

//                 </div>

//               )}

//               {data.projectUrl && (

//                 <a
//                   href={data.projectUrl}
//                   target="_blank"
//                   className="flex items-center gap-2 text-blue-600 hover:underline"
//                 >

//                   <ExternalLink size={18}/>

//                   Live Project

//                 </a>

//               )}
//               {data.githubUrl && (

//                 <a
//                   href={data.githubUrl}
//                   target="_blank"
//                   className="flex items-center gap-2 text-blue-600 hover:underline"
//                 >
//                   <ExternalLink size={18}/>

//                   GitHub
//                 </a>
//               )}
//             </div>

//           )}
//           {/* DATE */}
//           {data.createdAt && (

//             <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">

//               <Calendar size={16}/>

//               {new Date(data.createdAt).toLocaleString()}
//             </div>
//           )}
//           {/* OWNER ACTIONS */}

//           {isOwnProfile && (

//             <div className="mt-6 flex gap-3">


//               <button
//                 onClick={() => onEdit?.(data)}
//                 className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
//               >
//                 <Pencil size={16}/>
//                 Edit
//               </button>
//               <button
//                 onClick={() => onDelete?.(data.id)}
//                 className="flex items-center gap-2 px-4 py-2 border border-red-400 text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
//               >

//                 <Trash2 size={16}/>
//                 Delete
//               </button>
//             </div>
//           )}
//           {/* ACTION BAR */}

//           <div className="mt-8 border-t pt-5 flex items-center justify-between">
//             <div className="flex gap-6">

//                   <button
//   onClick={handleLike}
//   disabled={loadingLike}
//   className={`flex items-center gap-2 ${
//     liked
//       ? "text-red-500"
//       : "hover:text-red-500"
//   } ${
//     loadingLike
//       ? "opacity-60 cursor-not-allowed"
//       : ""
//   }`}
// >
//                 <Heart
//                   size={20}
//                   fill={liked ? "currentColor" : "none"}
//                 />
//                 Like ({likeCount})
//               </button>
//               <button
//   onClick={async () => {
//     const next = !showComments;
//     setShowComments(next);
//     if (next) {
//       await loadComments();
//     }
//   }}
//                 className="flex items-center gap-2 hover:text-blue-500"
//               >
//                 <MessageCircle size={20}/>
//                Comment ({commentCount})
//               </button>
//               <button className="flex items-center gap-2 hover:text-green-500">
//                 <Share2 size={20}/>
//                 Share
//               </button>
//             </div>
//             <button className="hover:text-yellow-500">
//               <Bookmark size={20}/>
//             </button>
//           </div>
//           {/* COMMENTS */}
//           {showComments && (
//             <div className="mt-5 border-t pt-5">
//               <div className="flex items-center gap-2">
//   <input
//     value={commentText}
//     onChange={(e) => setCommentText(e.target.value)}
//     placeholder="Write a comment..."
//     className="flex-1 px-4 py-2 rounded-full border bg-transparent text-sm"
//   />
//   {/* Emoji Button */}
//   <button
//     className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
//   >
//     <Smile size={18} />
//   </button>
//   {/* Post Button */}
//   <button
//     onClick={handleComment}
//     disabled={!commentText.trim()}
//     className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
//   >
//     Post
//   </button>
// </div>
//         <div className="mt-5 space-y-4">
//     {loadingComments && (
//         <p className="text-center text-sm text-gray-500">
//             Loading...
//         </p>
//     )}

//     {!loadingComments && comments.length === 0 && (
//         <p className="text-center text-sm text-gray-500">
//             No comments yet
//         </p>
//     )}
//     {comments.map((comment) => (
//         <div
//             key={comment.id}
//             className="border rounded-xl p-3"
//         >
//             <div className="font-semibold">
//                 {comment.username}
//             </div>
//             <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
//                 {comment.content}
//             </div>
//             <div className="text-xs text-gray-400 mt-2">
//                 {new Date(comment.createdAt).toLocaleString()}
//             </div>
//         </div>
//     ))}
// </div>
//             </div>
//           )}
//         </div>
//       </div>

//     </div>
//   );
// }





"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import {
  likeActivity,
  unlikeActivity,
  getLikeStatus,
  getLikeCount,
} from "@/services/activityService";

import {
  getComments,
  getCommentCount,
  addComment,
  deleteComment,
} from "@/services/commentService";
import {
  X,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Smile,
  Calendar,
  Code,
  ExternalLink,
  Pencil,
  Trash2,
} from "lucide-react";


export default function ProfileDetail({
  open,
  onClose,
  data,
  isOwnProfile = false,
  onEdit,
  onDelete,
}) {

  const [showComments, setShowComments] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [loadingLike, setLoadingLike] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [commentCount, setCommentCount] = useState(0);
  const [loadingComments, setLoadingComments] = useState(false);

  // ================= LOAD LIKE STATUS =================


useEffect(() => {
  if (!open || !data?.id) return;

  let mounted = true;

  setLiked(false);
  setLikeCount(0);
  setShowComments(false);
setExpanded(false);

const fetchData = async () => {
  try {
    const [
      statusRes,
      likeCountRes,
      commentCountRes,
    ] = await Promise.all([
      getLikeStatus(data.id),
      getLikeCount(data.id),
      getCommentCount(data.id),
    ]);

    if (!mounted) return;

    setLiked(statusRes.liked);
    setLikeCount(likeCountRes.count);
    setCommentCount(commentCountRes.count);

  } catch (error) {
    console.error(error);
  }
};

fetchData();

  return () => {
    mounted = false;
  };
}, [open, data?.id]);


  // ================= LIKE BUTTON =================

const handleLike = async () => {
  if (!data?.id || loadingLike) return;

  setLoadingLike(true);

  try {
    let response;

    if (liked) {
      response = await unlikeActivity(data.id);
    } else {
      response = await likeActivity(data.id);
    }

    setLiked(response.liked);
    setLikeCount(response.likeCount);

  } catch (error) {
    console.error("LIKE ERROR:", error);
  } finally {
    setLoadingLike(false);
  }
};
const loadComments = async () => {
  if (!data?.id) return;

  setLoadingComments(true);

  try {
    const response = await getComments(data.id);
    setComments(response);
  } catch (error) {
    console.error("COMMENT ERROR:", error);
  } finally {
    setLoadingComments(false);
  }
};

  if (!open || !data) return null;


  const isProject = data.type === "project";

  const image = data.imageUrl || "/assets/default.jpg";


const handleComment = async () => {
  if (!commentText.trim()) return;

  try {
    await addComment(data.id, commentText);

    setCommentText("");

    await loadComments();

    const count = await getCommentCount(data.id);
    setCommentCount(count.count);

  } catch (error) {
    console.error("COMMENT ERROR:", error);
  }
};
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">


      <div className="relative w-full max-w-3xl max-h-[95vh] overflow-y-auto rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800">
        {/* CLOSE*/}

        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
        >

          <X size={20}/>

        </button>

        {/* IMAGE */}

        <div className="relative h-72 w-full bg-gray-200 dark:bg-gray-900">

          <Image
            src={image}
            alt={data.title}
            fill
            className="object-cover"
          />

        </div>

        <div className="p-6">

          {/* TYPE */}

          <span className="px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">

            {isProject ? "PROJECT" : "POST"}

          </span>

          {/* TITLE */}

          <h2 className="mt-4 text-3xl font-bold">

            {data.title}
          </h2>

          {/* DESCRIPTION */}

          {data.description && (

            <>
              <p
                className={`mt-4 text-gray-600 dark:text-gray-300 whitespace-pre-line ${
                  expanded ? "" : "line-clamp-4"
                }`}
              >

                {data.description}

              </p>
              {data.description.length > 150 && (

                <button
                  onClick={() => setExpanded(!expanded)}
                  className="mt-2 text-sm text-blue-600 hover:underline"
                >

                  {expanded ? "Show less" : "Read more"}

                </button>

              )}

            </>

          )}
          {/* PROJECT EXTRA INFO */}

          {isProject && (

            <div className="mt-6 space-y-3">
              {data.techStack && (

                <div className="flex items-center gap-2">

                  <Code size={18}/>

                  <span>{data.techStack}</span>

                </div>

              )}

              {data.projectUrl && (

                <a
                  href={data.projectUrl}
                  target="_blank"
                  className="flex items-center gap-2 text-blue-600 hover:underline"
                >

                  <ExternalLink size={18}/>

                  Live Project

                </a>

              )}
              {data.githubUrl && (

                <a
                  href={data.githubUrl}
                  target="_blank"
                  className="flex items-center gap-2 text-blue-600 hover:underline"
                >
                  <ExternalLink size={18}/>

                  GitHub
                </a>
              )}
            </div>

          )}
          {/* DATE */}
          {data.createdAt && (

            <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">

              <Calendar size={16}/>

              {new Date(data.createdAt).toLocaleString()}
            </div>
          )}
          {/* OWNER ACTIONS */}

          {isOwnProfile && (

            <div className="mt-6 flex gap-3">


              <button
                onClick={() => onEdit?.(data)}
                className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Pencil size={16}/>
                Edit
              </button>
              <button
                onClick={() => onDelete?.(data.id)}
                className="flex items-center gap-2 px-4 py-2 border border-red-400 text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
              >

                <Trash2 size={16}/>
                Delete
              </button>
            </div>
          )}
          {/* ACTION BAR */}

          <div className="mt-8 border-t pt-5 flex items-center justify-between">
            <div className="flex gap-6">

                  <button
  onClick={handleLike}
  disabled={loadingLike}
  className={`flex items-center gap-2 ${
    liked
      ? "text-red-500"
      : "hover:text-red-500"
  } ${
    loadingLike
      ? "opacity-60 cursor-not-allowed"
      : ""
  }`}
>
                <Heart
                  size={20}
                  fill={liked ? "currentColor" : "none"}
                />
                Like ({likeCount})
              </button>
              <button
  onClick={async () => {
    const next = !showComments;
    setShowComments(next);
    if (next) {
      await loadComments();
    }
  }}
                className="flex items-center gap-2 hover:text-blue-500"
              >
                <MessageCircle size={20}/>
               Comment ({commentCount})
              </button>
              <button className="flex items-center gap-2 hover:text-green-500">
                <Share2 size={20}/>
                Share
              </button>
            </div>
            <button className="hover:text-yellow-500">
              <Bookmark size={20}/>
            </button>
          </div>
          {/* COMMENTS */}
          {showComments && (
            <div className="mt-5 border-t pt-5">
              <div className="flex items-center gap-2">
<input
  autoFocus
  value={commentText}
  onChange={(e) => setCommentText(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleComment();
    }
  }}
  placeholder="Write a comment..."
  className="flex-1 px-4 py-2 rounded-full border bg-transparent text-sm"
/>
  {/* Emoji Button */}
  <button
    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
  >
    <Smile size={18} />
  </button>
  {/* Post Button */}
  <button
    onClick={handleComment}
    disabled={!commentText.trim()}
    className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    Post
  </button>
</div>
<div className="mt-5 space-y-4 max-h-80 overflow-y-auto pr-2">
{loadingComments && (
    <div className="text-center py-4 text-sm text-gray-500">
        Loading comments...
    </div>
)}
    

    {!loadingComments && comments.length === 0 && (
        <p className="text-center text-sm text-gray-500">
            No comments yet
        </p>
    )}



{comments.map((comment) => (
  <div
    key={comment.id}
    className="flex items-start gap-3 py-3"
  >
    <Image
      src={comment.profileImage || "/assets/default-avatar.png"}
      alt={comment.username}
      width={40}
      height={40}
      className="rounded-full object-cover"
    />

    <div className="flex-1">
      <div className="font-semibold text-sm">
        {comment.username}
      </div>

      <div className="text-sm text-gray-700 dark:text-gray-300 break-words">
        {comment.content}
      </div>
    </div>
  </div>
))}
</div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}