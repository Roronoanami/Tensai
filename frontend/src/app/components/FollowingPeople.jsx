// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { getFollowing } from "@/services/followService";


// function FollowingPeople() {

//   const [users,setUsers] = useState([]);


//   useEffect(()=>{

//     const loadFollowing = async()=>{

//       try{

//         const data = await getFollowing();

//         console.log("FOLLOWING:",data);

//         setUsers(data);


//       }catch(error){

//         console.error(error);

//       }

//     };


//     loadFollowing();


//   },[]);



//   return (
//     <div className="w-full overflow-x-auto">

//       <div className="flex gap-4 min-w-max px-2 py-2">


//         {users.map((user)=>(


//           <div
//             key={user.id}
//             className="flex-shrink-0"
//           >

//             <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-700">


//               <Image

//                 src={
//                   user.profileImage ||
//                   "/assets/user.png"
//                 }

//                 alt={user.username}

//                 width={80}
//                 height={80}

//                 className="w-full h-full object-cover"

//               />


//             </div>


//           </div>


//         ))}


//       </div>


//     </div>
//   );
// }


// export default FollowingPeople;


// "use client";

// import Image from "next/image";
// import { useEffect,useState } from "react";
// import { getFollowing } from "@/services/followService";


// function FollowingPeople(){

// const [users,setUsers]=useState([]);


// useEffect(()=>{

//  const load=async()=>{

//   try{

//    const username =
//     localStorage.getItem("username");


//    const data =
//     await getFollowing(username);


//    setUsers(data);


//   }catch(err){

//    console.error(err);

//   }

//  };


//  load();


// },[]);



// return (

// <div className="w-full overflow-x-auto">

// <div className="flex gap-4 min-w-max px-2 py-2">


// {
// users.map(user=>(

// <div
// key={user.id}
// className="flex-shrink-0"
// >

// <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-700">

// <Image

// src={
// user.profileImage ||
// "/assets/user.png"
// }

// alt={user.username}

// width={80}
// height={80}

// className="w-full h-full object-cover"

// />

// </div>


// </div>


// ))
// }


// </div>

// </div>

// );

// }


// export default FollowingPeople;


// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect,useState } from "react";
// import { getFollowingUsers } from "@/services/profileService";


// export default function FollowingPeople(){

// const [users,setUsers]=useState([]);


// useEffect(()=>{

// const load=async()=>{

// try{

// const username =
// localStorage.getItem("username");


// const data =
// await getFollowingUsers(username);


// setUsers(data);


// }catch(err){

// console.log(err);

// }

// };


// load();


// },[]);



// return (

// <div className="w-full overflow-x-auto">

// <div className="flex gap-4 min-w-max px-2 py-2">


// {
// users.map((user)=>(

// <Link
// key={user.username}
// href={`/profile/${user.username}`}
// >

// <div
// className="flex-shrink-0"
// >

// <div
// className="
// w-20 h-20
// rounded-full
// overflow-hidden
// border-2
// border-gray-700
// "
// >


// <Image

// src={
// user.profileImage ||
// "/assets/user.png"
// }

// alt={user.username}

// width={80}
// height={80}

// className="
// w-full
// h-full
// object-cover
// "

// />


// </div>


// </div>


// </Link>


// ))
// }


// </div>

// </div>

// )

// }

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { getMyNetwork } from "@/services/profileService";

// export default function FollowingPeople(){

//   const [users,setUsers] = useState([]);


//   useEffect(()=>{


//     const loadNetwork = async()=>{

//       try{

//         const data = await getMyNetwork();

//         setUsers(data);


//       }catch(error){

//         console.log(
//           "Network loading error:",
//           error
//         );

//       }

//     };


//     loadNetwork();


//   },[]);



//   return (

//     <div className="w-full overflow-x-auto">

//       <div className="flex gap-4 min-w-max px-2 py-2">


//         {
//           users.map((user)=>(


//             <Link
//               key={user.userId}
//               href={`/profile/${user.username}`}
//             >


//               <div className="flex-shrink-0">


//                 <div
//                   className="
//                   w-20 h-20
//                   rounded-full
//                   overflow-hidden
//                   border-2 border-gray-700
//                   "
//                 >


//                   <Image

//                     src={
//                       user.profileImage ||
//                       "/assets/user.png"
//                     }

//                     alt={user.username}

//                     width={80}

//                     height={80}

//                     className="
//                     w-full
//                     h-full
//                     object-cover
//                     "

//                   />


//                 </div>


//               </div>


//             </Link>


//           ))
//         }


//       </div>


//     </div>

//   );

// }



"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getMyNetwork } from "@/services/profileService";

export default function FollowingPeople(){

  const [users,setUsers] = useState([]);


  useEffect(()=>{

    const loadNetwork = async()=>{

      try{

        const data = await getMyNetwork();

        setUsers(data);

      }
      catch(error){

        console.log(
          "Network loading error:",
          error
        );

      }

    };


    loadNetwork();


  },[]);



  return (

    <div className="w-full overflow-x-auto">

      <div className="flex gap-4 min-w-max px-2 py-2">


        {
          users.map((user)=>(


            <Link
              key={user.username}
              href={`/profile/${user.username}`}
            >


              <div className="flex-shrink-0">


                <div
                  className="
                  w-20 h-20
                  rounded-full
                  overflow-hidden
                  border-2 border-gray-700
                  "
                >


                  <Image

                    src={
                      user.profileImage ||
                      "/assets/user.png"
                    }

                    alt={user.username}

                    width={80}

                    height={80}

                    className="
                    w-full
                    h-full
                    object-cover
                    "

                  />


                </div>


              </div>


            </Link>


          ))
        }


      </div>


    </div>

  );

}