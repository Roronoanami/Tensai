// version 1 

// "use client";

// import Image from "next/image";
// import { MessageCircle, Send, Bookmark } from "lucide-react";

// function FeedCards() {
//   // ==========================================================
//   // TEMPORARY DATA
//   // Later this entire array will come from the backend.
//   //
//   // Example:
//   // {
//   //   id,
//   //   profileImage,
//   //   username,
//   //   mediaUrl,
//   //   mediaType: "image" | "video"
//   // }
//   // ==========================================================
//   const posts = [
//     {
//       id: 1,
//       profileImage: "/assets/user1.jpg",
//       media: "/assets/post1.jpg",
//       mediaType: "image",
//     },
//     {
//       id: 2,
//       profileImage: "/assets/user2.jpg",
//       media: "/assets/post2.jpg",
//       mediaType: "image",
//     },
//     {
//       id: 3,
//       profileImage: "/assets/user3.jpg",
//       media: "/assets/post3.jpg",
//       mediaType: "image",
//     },
//     {
//       id: 4,
//       profileImage: "/assets/user4.jpg",
//       media: "/assets/post4.jpg",
//       mediaType: "image",
//     },
//   ];

//   return (
//     <div className="flex flex-col gap-6 mt-6">
//       {posts.map((post) => (
//         <div
//           key={post.id}
//           className="w-full max-w-xl mx-auto rounded-2xl border border-gray-300 dark:border-gray-700 overflow-hidden bg-white dark:bg-black"
//         >
//           {/* Header */}
//           <div className="flex items-center gap-3 p-3">
//             <div className="w-10 h-10 rounded-full overflow-hidden">
//               <Image
//                 src={post.profileImage}
//                 alt="Profile"
//                 width={40}
//                 height={40}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Placeholder for username from backend */}
//             <span className="font-medium">Username</span>
//           </div>

//           {/* Image / Video */}
//           {post.mediaType === "image" ? (
//             <Image
//               src={post.media}
//               alt="Post"
//               width={700}
//               height={700}
//               className="w-full object-cover"
//             />
//           ) : (
//             <video
//               src={post.media}
//               controls
//               className="w-full object-cover"
//             />
//           )}

//           {/* Bottom actions */}
//           <div className="flex items-center justify-between p-4">
//             <div className="flex gap-5">
//               <MessageCircle className="cursor-pointer hover:scale-110 transition" />
//               <Send className="cursor-pointer hover:scale-110 transition" />
//             </div>

//             <Bookmark className="cursor-pointer hover:scale-110 transition" />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default FeedCards;

// version 2 

"use client";

import Image from "next/image";
import { MessageCircle, Heart,Send, Bookmark } from "lucide-react";

function FeedCards() {
  // ==========================================================
  // TEMPORARY DATA
  // Later this data will come directly from the backend API.
  //
  // Example backend response:
  // {
  //   id: 1,
  //   username: "Ankur",
  //   profileImage: "https://...",
  //   media: "https://...",
  //   mediaType: "image" // or "video"
  // }
  // ==========================================================
  const posts = [
    {
      id: 1,
      username: "Ankur",
      profileImage: "/assets/user1.jpg",
      media: "/assets/post1.jpg",
      mediaType: "image",
    },
    {
      id: 2,
      username: "Riya",
      profileImage: "/assets/user2.jpg",
      media: "/assets/post2.jpg",
      mediaType: "image",
    },
    {
      id: 3,
      username: "Rahul",
      profileImage: "/assets/user3.jpg",
      media: "/assets/post3.jpg",
      mediaType: "image",
    },
    {
      id: 4,
      username: "Neha",
      profileImage: "/assets/user4.jpg",
      media: "/assets/post4.jpg",
      mediaType: "image",
    },
  ];

  return (
    <div className="flex flex-col gap-8 py-6">
      {posts.map((post) => (
        <div key={post.id} className="w-full max-w-xl mx-auto">
          {/* ===================== Profile Section (Outside Card) ===================== */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={post.profileImage}
                alt={post.username}
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Username will come from backend later */}
            <p className="font-semibold text-sm">{post.username}</p>
          </div>

          {/* ===================== Media Card ===================== */}
          <div className="rounded-2xl overflow-hidden border border-gray-300 dark:border-gray-700">
            {post.mediaType === "image" ? (
              <Image
                src={post.media}
                alt="Post"
                width={700}
                height={700}
                className="w-full h-auto object-cover"
              />
            ) : (
              <video
                controls
                className="w-full h-auto"
              >
                <source src={post.media} />
              </video>
            )}
          </div>

          {/* ===================== Action Icons (Outside Card) ===================== */}
          <div className="flex items-center justify-between mt-3 px-1">

            <div className="flex items-center gap-5">
                <Heart className="w-6 h-6 cursor-pointer hover:scale-110 transition"/>
              <MessageCircle className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
              <Send className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
            </div>

            <Bookmark className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeedCards;