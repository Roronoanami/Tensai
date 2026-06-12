// verion 1

// import SideNav from "../components/SideNav";

// export default function MainPage() {
//   return (
//     <div className="flex h-screen w-screen bg-gray-50 dark:bg-gray-950">
      
//       {/* Sidebar */}
//       <SideNav />

//       {/* Main Content */}
//       <div className="flex-1 p-6 overflow-auto">
//         <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
//           Main Page
//         </h1>

//         <p className="text-gray-600 dark:text-gray-300 mt-2">
//           This is your chat app dashboard layout.
//         </p>
//       </div>
//     </div>
//   );
// }

// version  2 

import FeedCards from "../components/FeedCards";
import SideNav from "../components/SideNav";
import FollowingPeople from "../components/FollowingPeople"; // 👈 Add this
export default function MainPage() {
  return (
    <div className="flex h-screen w-screen bg-gray-50 dark:bg-gray-950">

      {/* Desktop sidebar (hidden on mobile) */}
      <SideNav />

      {/* Main content — padded so it doesn't hide behind mobile bars */}
      <div className="
        flex-1 overflow-auto
        p-6
        pt-20      /* clears the mobile top bar  (14 * 4 = 56px → 80px safe) */
        pb-20      /* clears the mobile bottom bar */
        md:pt-6 md:pb-6
      ">
        <div className="hidden md:flex justify-center">
  <p className="text-xl font-semibold">tensai</p>
</div>
          <div className="mt-6">
          <FollowingPeople />
        </div>

        <FeedCards />

      </div>
    </div>
  );
}