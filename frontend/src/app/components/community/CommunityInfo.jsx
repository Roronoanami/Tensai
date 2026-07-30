// "use client";

// export default function CommunityInfo({ community }) {
//   return (
//     <div className="hidden md:block w-1/4 border-l border-gray-200 dark:border-gray-800 p-3">

//       <h2 className="font-bold text-lg">{community.name}</h2>

//       <p className="text-sm text-gray-500 mt-2">
//         This is a community chatroom where developers connect and share ideas.
//       </p>

//       <div className="mt-4 text-sm">
//         <p>👥 {community.members} members</p>
//         <p>🟢 Active now</p>
//       </div>

//       <button className="mt-4 w-full py-2 bg-green-500 text-white rounded-lg">
//         Joined
//       </button>

//     </div>
//   );
// }






// best   advance versiion    


// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";

// export default function CommunityInfo({ community }) {
//   const [isDarkTheme, setIsDarkTheme] = useState(false);

//   useEffect(() => {
//     // Detect current theme from document (works with Tailwind dark mode)
//     const isDark = document.documentElement.classList.contains("dark");
//     setIsDarkTheme(isDark);
//   }, []);

//   return (
//     <div
//       className="h-full overflow-y-auto p-6 transition-colors duration-300"
//       style={{
//         backgroundColor: isDarkTheme ? "#ffffff" : "#000000",
//         color: isDarkTheme ? "#000000" : "#ffffff",
//       }}
//     >
//       <div className="flex flex-col items-center">
//         <Image
//           src={community.image}
//           alt={community.name}
//           width={100}
//           height={100}
//           className="rounded-full object-cover"
//         />

//         <h2 className="mt-4 text-xl font-bold">
//           {community.name}
//         </h2>

//         <p className="mt-1 text-sm opacity-70">
//           {community.members} members
//         </p>
//       </div>

//       <div className="mt-8 space-y-4 text-sm">
//         <div>
//           <h3 className="font-semibold">About</h3>
//           <p className="mt-1 opacity-70">
//             Demo community description. Later this will come from your Spring Boot backend.
//           </p>
//         </div>

//         <div>
//           <h3 className="font-semibold">Rules</h3>
//           <ul className="mt-1 list-disc pl-5 opacity-70">
//             <li>Be respectful.</li>
//             <li>No spam.</li>
//             <li>Help fellow members.</li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="font-semibold">Status</h3>
//           <p className="mt-1 text-green-500">
//             🟢 Community Active
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }





// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";


// export default function CommunityInfo({ community }) {

//   const [isDarkTheme, setIsDarkTheme] = useState(false);


//   useEffect(() => {

//     const isDark =
//       document.documentElement.classList.contains("dark");

//     setIsDarkTheme(isDark);

//   }, []);



//   return (

//     <div
//       className="h-full overflow-y-auto p-6 transition-colors duration-300"
//       style={{
//         backgroundColor: isDarkTheme ? "#ffffff" : "#000000",
//         color: isDarkTheme ? "#000000" : "#ffffff",
//       }}
//     >


//       <div className="flex flex-col items-center">


//         <Image

//           src={
//             community.communityImage
//             &&
//             community.communityImage.trim() !== ""
//               ? community.communityImage
//               : "/assets/user.png"
//           }

//           alt={community.communityName}

//           width={100}

//           height={100}

//           className="rounded-full object-cover"

//         />



//         <h2 className="mt-4 text-xl font-bold">

//           {community.communityName}

//         </h2>



//         <p className="mt-1 text-sm opacity-70">

//           {community.currentMembers} members

//         </p>


//       </div>




//       <div className="mt-8 space-y-4 text-sm">


//         <div>

//           <h3 className="font-semibold">
//             About
//           </h3>


//           <p className="mt-1 opacity-70">

//             {community.description}

//           </p>

//         </div>





//         <div>

//           <h3 className="font-semibold">
//             Rules
//           </h3>


//           <p className="mt-1 opacity-70">

//             {community.rules}

//           </p>


//         </div>





//         <div>

//           <h3 className="font-semibold">
//             Owner
//           </h3>


//           <p className="mt-1 opacity-70">

//             {community.ownerUsername}

//           </p>


//         </div>





//         <div>

//           <h3 className="font-semibold">
//             Status
//           </h3>


//           <p className="mt-1 text-green-500">
//             🟢 Community Active
//           </p>


//         </div>


//       </div>


//     </div>

//   );

// }











// "use client";
// import { UserPen } from "lucide-react";
// import EditCommunityModal from "./EditCommunityModal";

// import Image from "next/image";
// import { useEffect, useState } from "react";

// export default function CommunityInfo({ community }) {

//   const [isDarkTheme, setIsDarkTheme] = useState(false);
//   const [showEdit, setShowEdit] = useState(false);

//   useEffect(() => {

//     setIsDarkTheme(
//       document.documentElement.classList.contains("dark")
//     );

//   }, []);



//   if (!community) {
//     return (
//       <div className="p-6">
//         Loading community...
//       </div>
//     );
//   }



//   return (

//     <div
//       className="h-full overflow-y-auto p-6 transition-colors duration-300"
//       style={{
//         backgroundColor: isDarkTheme ? "#ffffff" : "#000000",
//         color: isDarkTheme ? "#000000" : "#ffffff",
//       }}
//     >
//      {/* HEADER */}
// <div className="flex items-center justify-start mb-4">
// <button
//   onClick={() => setShowEdit(true)}
//   className="p-2 hover:text-red-600"
// >
//   <UserPen size={22} />
// </button>
// </div>

//       {/* COMMUNITY IMAGE */}

//       <div className="flex flex-col items-center">


//         <Image
//           src={
//             community.communityImage &&
//             community.communityImage.trim() !== ""
//               ? community.communityImage
//               : "/assets/user.png"
//           }
//           alt={community.communityName}
//           width={100}
//           height={100}
//           className="rounded-full object-cover"
//         />


//         <h2 className="mt-4 text-xl font-bold">
//           {community.communityName}
//         </h2>


//         <p className="text-sm opacity-70">
//           #{community.communityId}
//         </p>


//         <p className="mt-1 text-sm opacity-70">
//           {community.currentMembers} / {community.maxMembers} members
//         </p>


//       </div>





//       <div className="mt-8 space-y-5 text-sm">


//         {/* ABOUT */}

//         <div>

//           <h3 className="font-semibold">
//             About
//           </h3>


//           <p className="mt-1 opacity-70">
//             {
//               community.description ||
//               "No description added"
//             }
//           </p>

//         </div>





//         {/* RULES */}

//         <div>

//           <h3 className="font-semibold">
//             Rules
//           </h3>


//           <p className="mt-1 opacity-70">
//             {
//               community.rules ||
//               "No rules added"
//             }
//           </p>

//         </div>





//         {/* OWNER */}

//         <div>

//           <h3 className="font-semibold">
//             Owner
//           </h3>


//           <p className="mt-1 opacity-70">
//             {community.ownerUsername}
//           </p>

//         </div>





//         {/* PRIVACY */}

//         <div>

//           <h3 className="font-semibold">
//             Privacy
//           </h3>


//           <p className="mt-1 opacity-70">

//             {
//               community.privateCommunity
//               ? "🔒 Private Community"
//               : "🌎 Public Community"
//             }

//           </p>

//         </div>





//         {/* STATUS */}

//         <div>

//           <h3 className="font-semibold">
//             Status
//           </h3>


//           <p className="mt-1 text-green-500">
//             🟢 Community Active
//           </p>

//         </div>


//       </div>


//     </div>

//   );
// }







"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { UserPen } from "lucide-react";
import EditCommunityModal from "./EditCommunityModal";

export default function CommunityInfo({ community }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    setIsDarkTheme(
      document.documentElement.classList.contains("dark")
    );
  }, []);

  if (!community) {
    return (
      <div className="p-6">
        Loading community...
      </div>
    );
  }

  return (
    <>
      <div
        className="h-full overflow-y-auto p-6 transition-colors duration-300 relative"
        style={{
          backgroundColor: isDarkTheme ? "#ffffff" : "#000000",
          color: isDarkTheme ? "#000000" : "#ffffff",
        }}
      >
        {/* HEADER */}
        <div className="flex items-center justify-start mb-4">
          {/* <button
            onClick={() => setShowEdit(true)}
            className="transition hover:text-red-600"
          >
            <UserPen size={22} />
          </button> */}

          <button
  onClick={() => {
    console.log("EDIT CLICKED");
    setShowEdit(true);
  }}
>
  <UserPen size={22} />
</button>
        </div>

        {/* COMMUNITY IMAGE */}
        <div className="flex flex-col items-center">
          <Image
            src={
              community.communityImage &&
              community.communityImage.trim() !== ""
                ? community.communityImage
                : "/assets/user.png"
            }
            alt={community.communityName}
            width={100}
            height={100}
            className="rounded-full object-cover"
          />

          <h2 className="mt-4 text-xl font-bold">
            {community.communityName}
          </h2>

          <p className="text-sm opacity-70">
            #{community.communityId}
          </p>

          <p className="mt-1 text-sm opacity-70">
            {community.currentMembers} / {community.maxMembers} members
          </p>
        </div>

        <div className="mt-8 space-y-5 text-sm">
          {/* ABOUT */}
          <div>
            <h3 className="font-semibold">About</h3>

            <p className="mt-1 opacity-70">
              {community.description || "No description added"}
            </p>
          </div>

          {/* RULES */}
          <div>
            <h3 className="font-semibold">Rules</h3>

            <p className="mt-1 opacity-70">
              {community.rules || "No rules added"}
            </p>
          </div>

          {/* OWNER */}
          <div>
            <h3 className="font-semibold">Owner</h3>

            <p className="mt-1 opacity-70">
              {community.ownerUsername}
            </p>
          </div>

          {/* PRIVACY */}
          <div>
            <h3 className="font-semibold">Privacy</h3>

            <p className="mt-1 opacity-70">
              {community.privateCommunity
                ? "🔒 Private Community"
                : "🌎 Public Community"}
            </p>
          </div>

          {/* STATUS */}
          <div>
            <h3 className="font-semibold">Status</h3>

            <p className="mt-1 text-green-500">
              🟢 Community Active
            </p>
          </div>
        </div>
      </div>

      {/* EDIT MODAL */}
      {/* {showEdit && (
        <EditCommunityModal
          community={community}
          onClose={() => setShowEdit(false)}
        />
      )} */}


      {showEdit && (
  <EditCommunityModal
    open={showEdit}
    community={community}
    onClose={() => setShowEdit(false)}
    onSave={(data) => {
      console.log(data);
      setShowEdit(false);
    }}
  />
)}
    </>
  );
}