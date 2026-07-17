// "use client";
 
// import { useState } from "react";
// import ProfileLayout from "../pages/ProfileLayout";
// import OtherProfileInfo from "../components/profile/OtherProfileInfo";
// import ProfileActivity from "../components/profile/ProfileActivity";

// export default function ProfilePageOther({ username }) {
//   const [profile, setProfile] = useState(null);

//   return (
//     <ProfileLayout>

//       {/* TOP PROFILE SECTION (OTHER USER) */}
//       <OtherProfileInfo
//         username={username}
//         setProfile={setProfile}
//       />

//       {/* SAME ACTIVITY SECTION */}
//       <div className="mt-6 md:mt-8">
// <ProfileActivity
//   isOwnProfile={false}
//   userId={profile?.userId}
//   username={profile?.username}
// />
//       </div>

//     </ProfileLayout>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import ProfileLayout from "../pages/ProfileLayout";
import OtherProfileInfo from "../components/profile/OtherProfileInfo";
import ProfileActivity from "../components/profile/ProfileActivity";
import { getPublicProfile } from "@/services/profileService";
export default function ProfilePageOther({ username }) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (!username) return;

        // const res = await fetch(
        //   `http://localhost:8081/api/profile/public/username/${username}`
        // );

        // if (!res.ok) {
        //   throw new Error("Failed to fetch profile");
        // }

        // const data = await res.json();
        // setProfile(data);



        const data = await getPublicProfile(username);
        setProfile(data);
        
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [username]);

  if (loading) {
    return (
      <ProfileLayout>
        <div className="p-6">Loading...</div>
      </ProfileLayout>
    );
  }

  return (
    <ProfileLayout>

      <OtherProfileInfo profile={profile} />

      <div className="mt-6 md:mt-8">
    <ProfileActivity
  isOwnProfile={false}
  username={profile?.username}
  userId={profile?.userId || profile?.id}
/>
      </div>

    </ProfileLayout>
  );
}