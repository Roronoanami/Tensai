// "use client";

// import { useState } from "react";
// import Image from "next/image";

// import { Home, Send, Search, Bookmark } from "lucide-react";
// export default function NotificationPage() {
//   const [tab, setTab] = useState("all");

//   const notifications = [
//     {
//       id: 1,
//       type: "people",
//       user: "Rahul Verma",
//       avatar: "/assets/user1.jpg",
//       text: "sent you a connection request",
//     },
//     {
//       id: 2,
//       type: "posts",
//       user: "Ankit Sharma",
//       avatar: "/assets/user2.jpg",
//       text: "commented on your post",
//     },
//     {
//       id: 3,
//       type: "people",
//       user: "Priya Singh",
//       avatar: "/assets/user3.jpg",
//       text: "started following you",
//     },
//   ];

//   const filtered =
//     tab === "all"
//       ? notifications
//       : notifications.filter((n) => n.type === tab);

//   return (
//     <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-4 pb-20 md:pb-4">

//       {/* TITLE */}
//       <h1 className="text-2xl font-bold mb-4">
//         Notifications
//       </h1>

//       {/* SEARCH */}
//       <div className="flex items-center gap-2 border rounded-full px-3 py-2 mb-4 dark:border-gray-700">
//         <Search size={18} />
//         <input
//           placeholder="Search notifications..."
//           className="w-full outline-none bg-transparent text-sm"
//         />
//       </div>

//       {/* FILTERS */}
//       <div className="flex gap-2 mb-6 flex-wrap">
//         {["all", "posts", "projects", "people"].map((t) => (
//           <button
//             key={t}
//             onClick={() => setTab(t)}
//             className={`px-4 py-1.5 rounded-full text-sm border transition ${
//               tab === t
//                 ? "bg-blue-600 text-white"
//                 : "border-gray-300 dark:border-gray-700"
//             }`}
//           >
//             {t.toUpperCase()}
//           </button>
//         ))}
//       </div>

//       {/* LIST */}
//       <div className="space-y-3">
//         {filtered.map((n) => (
//           <div
//             key={n.id}
//             className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
//           >
//             <Image
//               src={n.avatar}
//               alt={n.user}
//               width={40}
//               height={40}
//               className="rounded-full"
//             />

//             <div className="text-sm">
//               <p className="font-semibold">{n.user}</p>
//               <p className="text-gray-500 dark:text-gray-400">
//                 {n.text}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//    {/* ================= MOBILE BOTTOM NAV ================= */}
// <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">

//   <div className="flex justify-around items-center py-3 text-gray-600 dark:text-gray-300">

//     {/* HOME */}
//     <a href="/main" className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
//       <Home size={22} />
//     </a>

//     {/* MESSAGES */}
//     <a href="/messages" className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
//       <Send size={22} />
//     </a>

//     {/* SEARCH */}
//     <a href="/search" className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
//       <Search size={22} />
//     </a>

//     {/* SAVED */}
//     <a href="/saved" className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
//       <Bookmark size={22} />
//     </a>

//   </div>
// </div>


//     </div>
//   );
// }





"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Home, Send, Search, Bookmark } from "lucide-react";

export default function NotificationPage() {

  const [tab, setTab] = useState("all");
  const [notifications, setNotifications] = useState([]);


  useEffect(() => {

    const loadNotifications = async () => {

      try {

        const token = localStorage.getItem("token");

        if (!token) {
          console.error("No token found");
          return;
        }


        const response = await fetch(
          "http://localhost:8081/api/notifications",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );


        if (!response.ok) {
          console.error(
            "Notification fetch failed:",
            response.status
          );
          return;
        }


        const data = await response.json();

        console.log("NOTIFICATIONS:", data);

        setNotifications(data);


      } catch(error) {

        console.error(
          "Notification error:",
          error
        );

      }

    };


    loadNotifications();

  }, []);



  const filtered =
    tab === "all"
      ? notifications
      : notifications.filter(
          (n) =>
            n.type?.toLowerCase() === tab
        );


  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-4 pb-20 md:pb-4">


      {/* TITLE */}
      <h1 className="text-2xl font-bold mb-4">
        Notifications
      </h1>



      {/* SEARCH */}
      <div className="flex items-center gap-2 border rounded-full px-3 py-2 mb-4 dark:border-gray-700">

        <Search size={18} />

        <input
          placeholder="Search notifications..."
          className="w-full outline-none bg-transparent text-sm"
        />

      </div>




      {/* FILTERS */}
      <div className="flex gap-2 mb-6 flex-wrap">

        {["all", "posts", "projects", "people"].map((t)=>(

          <button
            key={t}
            onClick={()=>setTab(t)}
            className={`px-4 py-1.5 rounded-full text-sm border transition ${
              tab===t
              ? "bg-blue-600 text-white"
              : "border-gray-300 dark:border-gray-700"
            }`}
          >
            {t.toUpperCase()}
          </button>

        ))}

      </div>




      {/* LIST */}
      <div className="space-y-3">


        {filtered.length === 0 && (

          <p className="text-gray-500 text-sm">
            No notifications yet
          </p>

        )}



        {filtered.map((n)=>(


          <div
            key={n.id}
            className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
          >


            <Image

              src={
                n.senderProfileImage ||
                "/assets/user.png"
              }

              alt={
                n.senderUsername ||
                "User"
              }

              width={40}
              height={40}

              className="rounded-full"

            />



            <div className="text-sm">


              <p className="font-semibold">

                {n.senderUsername}

              </p>



              <p className="text-gray-500 dark:text-gray-400">

                {n.message}

              </p>
              {
 n.type === "CONNECTION_REQUEST" && (
<button
className="mt-2 bg-blue-600 text-white px-3 py-1 rounded-full"
onClick={async()=>{

const token = localStorage.getItem("token");


const response = await fetch(
`http://localhost:8081/api/connection/accept/${n.referenceId}`,
{
method:"PUT",
headers:{
Authorization:`Bearer ${token}`
}
}
);


if(response.ok){

  // remove accepted notification from UI
  setNotifications((prev)=>
    prev.filter(
      (item)=>item.id !== n.id
    )
  );

}


}}
>
Accept
</button>
 )
}


            </div>


          </div>


        ))}


      </div>





      {/* MOBILE BOTTOM NAV */}

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">


        <div className="flex justify-around items-center py-3 text-gray-600 dark:text-gray-300">


          <a
            href="/main"
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <Home size={22}/>
          </a>



          <a
            href="/messages"
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <Send size={22}/>
          </a>



          <a
            href="/search"
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <Search size={22}/>
          </a>



          <a
            href="/saved"
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <Bookmark size={22}/>
          </a>


        </div>


      </div>



    </div>
  );
}