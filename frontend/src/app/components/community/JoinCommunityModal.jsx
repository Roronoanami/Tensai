// "use client";

// import { useState } from "react";
// import { X } from "lucide-react";
// import { joinCommunity } from "@/services/communityService";

// export default function JoinCommunityModal({
//   open,
//   onClose,
//   onJoined,
// }) {

//   const [communityId, setCommunityId] = useState("");
//   const [loading, setLoading] = useState(false);

//   if (!open) return null;

//   const handleJoin = async () => {

//     if (!communityId.trim()) return;

//     try {

//       setLoading(true);

//       const data = await joinCommunity(communityId);

//       alert("Joined successfully!");

//       onJoined?.(data);

//       setCommunityId("");

//       onClose();

//     } catch (err) {

//       alert(err.message);

//     } finally {

//       setLoading(false);

//     }

//   };

//   return (

//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

//       <div className="w-full max-w-md rounded-xl bg-white dark:bg-gray-900 p-6">

//         <div className="flex items-center justify-between mb-5">

//           <h2 className="text-xl font-semibold">
//             Join Community
//           </h2>

//           <button onClick={onClose}>
//             <X size={22} />
//           </button>

//         </div>

//         <input
//           value={communityId}
//           onChange={(e) => setCommunityId(e.target.value)}
//           placeholder="Community ID"
//           className="w-full rounded-lg bg-gray-100 dark:bg-gray-800 p-3 outline-none"
//         />

//         <button
//           onClick={handleJoin}
//           disabled={loading}
//           className="mt-5 w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700"
//         >
//           {loading ? "Joining..." : "Join Community"}
//         </button>

//       </div>

//     </div>

//   );

// }


// "use client";

// import { useState } from "react";
// import { X, Eye, EyeOff } from "lucide-react";
// import { joinCommunity } from "@/services/communityService";

// export default function JoinCommunityModal({
//   open,
//   onClose,
//   onJoined,
// }) {

//   const [communityId, setCommunityId] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);


//   if (!open) return null;




// const handleJoin = async () => {

//   if (!communityId.trim()) {
//     alert("Community ID is required");
//     return;
//   }


//   try {

//     setLoading(true);


//     const token = localStorage.getItem("token");


//     // check user status
//     const statusRes = await fetch(
//       `http://localhost:8081/api/community/status/${communityId}`,
//       {
//         headers:{
//           Authorization:`Bearer ${token}`
//         }
//       }
//     );


//     const status = await statusRes.json();



//     let data;


//     // OWNER
//     if(status.owner){

//       data = await joinCommunity(
//         communityId,
//         ""
//       );

//     }

//     // NORMAL USER
//     else {

//       if(!password.trim()){
//         alert("Password is required");
//         return;
//       }


//       data = await joinCommunity(
//         communityId,
//         password
//       );

//     }



//     alert("Joined successfully!");

//     onJoined?.(data);


//     setCommunityId("");
//     setPassword("");

//     onClose();


//   } catch(err){

//     alert(
//       err.message || "Failed to join community"
//     );

//   } finally {

//     setLoading(false);

//   }

// };
//   return (

//     <div
//       className="
//       fixed inset-0 z-50
//       flex items-center justify-center
//       bg-black/60
//       "
//     >


//       <div
//         className="
//         w-full max-w-md
//         rounded-xl
//         bg-white
//         dark:bg-gray-900
//         p-6
//         "
//       >



//         {/* HEADER */}

//         <div
//           className="
//           flex items-center justify-between
//           mb-5
//           "
//         >

//           <h2 className="text-xl font-semibold">
//             Join Community
//           </h2>


//           <button
//             onClick={onClose}
//             className="
//             p-1 rounded-lg
//             hover:bg-gray-200
//             dark:hover:bg-gray-800
//             "
//           >

//             <X size={22}/>

//           </button>


//         </div>





//         {/* COMMUNITY ID */}

//         <input

//           value={communityId}

//           onChange={(e)=>
//             setCommunityId(e.target.value)
//           }

//           placeholder="Community ID"

//           className="
//           w-full
//           rounded-lg
//           bg-gray-100
//           dark:bg-gray-800
//           p-3
//           outline-none
//           "
//         />





// {/* PASSWORD */}

// <div className="relative mt-3">

//   <input

//     value={password}

//     onChange={(e)=>
//       setPassword(e.target.value)
//     }

//     placeholder="Community Password"

//     type={
//       showPassword
//       ? "text"
//       : "password"
//     }

//     className="
//     w-full
//     rounded-lg
//     bg-gray-100
//     dark:bg-gray-800
//     p-3
//     pr-10
//     outline-none
//     "

//   />


//   <button

//     type="button"

//     onClick={() =>
//       setShowPassword(!showPassword)
//     }

//     className="
//     absolute
//     right-3
//     top-1/2
//     -translate-y-1/2
//     text-gray-500
//     hover:text-gray-800
//     dark:hover:text-white
//     "

//   >

//     {
//       showPassword
//       ? <EyeOff size={20}/>
//       : <Eye size={20}/>
//     }


//   </button>


// </div>


//         {/* JOIN BUTTON */}

//         <button

//           onClick={handleJoin}

//           disabled={loading}

//           className="
//           mt-5
//           w-full
//           rounded-lg
//           bg-blue-600
//           py-3
//           text-white
//           hover:bg-blue-700
//           disabled:opacity-50
//           "

//         >

//           {
//             loading
//             ? "Joining..."
//             : "Join Community"
//           }


//         </button>



//       </div>


//     </div>

//   );

// }



// "use client";

// import { useState } from "react";
// import { X, Eye, EyeOff } from "lucide-react";
// import { joinCommunity } from "@/services/communityService";

// export default function JoinCommunityModal({
//   open,
//   onClose,
//   onJoined,
// }) {

//   const [communityId, setCommunityId] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [needsPassword, setNeedsPassword] = useState(false);


//   if (!open) return null;



//   // const handleJoin = async () => {

//   //   if (!communityId.trim()) {
//   //     alert("Community ID is required");
//   //     return;
//   //   }


//   //   try {

//   //     setLoading(true);


//   //     const token = localStorage.getItem("token");


//   //     // CHECK COMMUNITY STATUS
//   //     const statusRes = await fetch(
//   //       `http://localhost:8081/api/community/status/${communityId}`,
//   //       {
//   //         headers: {
//   //           Authorization: `Bearer ${token}`
//   //         }
//   //       }
//   //     );


//   //     if(!statusRes.ok){
//   //       throw new Error("Community not found");
//   //     }


//   //     const status = await statusRes.json();



//   //     let data;



//   //     // OWNER
//   //     if(status.owner){

//   //       data = await joinCommunity(
//   //         communityId,
//   //         ""
//   //       );

//   //     }


//   //     // MEMBER
//   //     else {


//   //       if(!password.trim()){

//   //         setNeedsPassword(true);

//   //         alert(
//   //           "Password is required"
//   //         );

//   //         return;
//   //       }


//   //       data = await joinCommunity(
//   //         communityId,
//   //         password
//   //       );

//   //     }



//   //     alert(
//   //       "Joined successfully!"
//   //     );


//   //     onJoined?.(data);



//   //     // RESET

//   //     setCommunityId("");
//   //     setPassword("");
//   //     setNeedsPassword(false);


//   //     onClose();



//   //   } catch(err){

//   //     alert(
//   //       err.message || 
//   //       "Failed to join community"
//   //     );


//   //   } finally {

//   //     setLoading(false);

//   //   }

//   // };



//   const handleJoin = async () => {

//   if (!communityId.trim()) {
//     alert("Community ID is required");
//     return;
//   }


//   try {

//     setLoading(true);


//     // Try joining directly
//     const data = await joinCommunity(
//       communityId,
//       password
//     );


//     alert("Joined successfully!");


//     onJoined?.(data);


//     setCommunityId("");
//     setPassword("");
//     setNeedsPassword(false);


//     onClose();


//   } catch(err) {


//     const message = err.message;


//     if(
//       message.includes("Password")
//       ||
//       message.includes("password")
//     ){

//       setNeedsPassword(true);

//     }


//     alert(
//       message || "Failed to join community"
//     );


//   } finally {

//     setLoading(false);

//   }

// };


//   return (

//     <div
//       className="
//       fixed inset-0 z-50
//       flex items-center justify-center
//       bg-black/60
//       "
//     >


//       <div
//         className="
//         w-full max-w-md
//         rounded-xl
//         bg-white
//         dark:bg-gray-900
//         p-6
//         "
//       >


//         {/* HEADER */}

//         <div
//           className="
//           flex items-center justify-between
//           mb-5
//           "
//         >

//           <h2 className="text-xl font-semibold">
//             Join Community
//           </h2>


//           <button
//             onClick={onClose}
//             className="
//             p-1 rounded-lg
//             hover:bg-gray-200
//             dark:hover:bg-gray-800
//             "
//           >

//             <X size={22}/>

//           </button>


//         </div>





//         {/* COMMUNITY ID */}

//         <input

//           value={communityId}

//           onChange={(e)=>
//             setCommunityId(e.target.value)
//           }

//           placeholder="Community ID"

//           className="
//           w-full
//           rounded-lg
//           bg-gray-100
//           dark:bg-gray-800
//           p-3
//           outline-none
//           "
//         />






//         {/* PASSWORD ONLY FOR NON OWNER */}

//         {needsPassword && (

//         <div className="relative mt-3">


//           <input

//             value={password}

//             onChange={(e)=>
//               setPassword(e.target.value)
//             }

//             placeholder="Community Password"

//             type={
//               showPassword
//               ? "text"
//               : "password"
//             }

//             className="
//             w-full
//             rounded-lg
//             bg-gray-100
//             dark:bg-gray-800
//             p-3
//             pr-10
//             outline-none
//             "

//           />


//           <button

//             type="button"

//             onClick={() =>
//               setShowPassword(!showPassword)
//             }

//             className="
//             absolute
//             right-3
//             top-1/2
//             -translate-y-1/2
//             text-gray-500
//             hover:text-gray-800
//             dark:hover:text-white
//             "

//           >

//             {
//               showPassword
//               ? <EyeOff size={20}/>
//               : <Eye size={20}/>
//             }


//           </button>


//         </div>

//         )}




//         {/* JOIN BUTTON */}

//         <button

//           onClick={handleJoin}

//           disabled={loading}

//           className="
//           mt-5
//           w-full
//           rounded-lg
//           bg-blue-600
//           py-3
//           text-white
//           hover:bg-blue-700
//           disabled:opacity-50
//           "

//         >

//           {
//             loading
//             ? "Joining..."
//             : "Join Community"
//           }


//         </button>



//       </div>


//     </div>

//   );

// }





"use client";

import { useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";
import { joinCommunity } from "@/services/communityService";

export default function JoinCommunityModal({
  open,
  onClose,
  onJoined,
}) {

  const [communityId, setCommunityId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  if (!open) return null;



  const handleJoin = async () => {


    if (!communityId.trim()) {

      alert("Community ID is required");
      return;

    }


try {

  setLoading(true);


  const data = await joinCommunity(
    communityId,
    password
  );


  console.log("JOIN RESPONSE:", data);


  alert("Joined successfully!");


  onJoined?.(data);


  setCommunityId("");
  setPassword("");


  onClose();


} catch(err) {


  alert(
    err.message ||
    "Failed to join community"
  );


} finally {


  setLoading(false);


}

  };



  return (

    <div
      className="
      fixed inset-0 z-50
      flex items-center justify-center
      bg-black/60
      "
    >


      <div
        className="
        w-full max-w-md
        rounded-xl
        bg-white
        dark:bg-gray-900
        p-6
        "
      >


        {/* HEADER */}

        <div
          className="
          flex items-center justify-between
          mb-5
          "
        >

          <h2 className="text-xl font-semibold">
            Join Community
          </h2>


          <button
            onClick={onClose}
            className="
            p-1 rounded-lg
            hover:bg-gray-200
            dark:hover:bg-gray-800
            "
          >

            <X size={22}/>

          </button>


        </div>




        {/* COMMUNITY ID */}

        <input

          value={communityId}

          onChange={(e)=>
            setCommunityId(e.target.value)
          }

          placeholder="Community ID"

          className="
          w-full
          rounded-lg
          bg-gray-100
          dark:bg-gray-800
          p-3
          outline-none
          "

        />




        {/* PASSWORD */}

        <div className="relative mt-3">


          <input

            value={password}

            onChange={(e)=>
              setPassword(e.target.value)
            }

            placeholder="Community Password (if private)"

            type={
              showPassword
              ? "text"
              : "password"
            }


            className="
            w-full
            rounded-lg
            bg-gray-100
            dark:bg-gray-800
            p-3
            pr-10
            outline-none
            "

          />



          <button

            type="button"

            onClick={() =>
              setShowPassword(!showPassword)
            }

            className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-gray-500
            "

          >

            {
              showPassword
              ? <EyeOff size={20}/>
              : <Eye size={20}/>
            }


          </button>


        </div>





        {/* BUTTON */}

        <button

          onClick={handleJoin}

          disabled={loading}

          className="
          mt-5
          w-full
          rounded-lg
          bg-blue-600
          py-3
          text-white
          hover:bg-blue-700
          disabled:opacity-50
          "

        >

          {
            loading
            ? "Joining..."
            : "Join Community"
          }


        </button>


      </div>


    </div>

  );

}