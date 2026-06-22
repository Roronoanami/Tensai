"use client";
 
import { useState } from "react";
import ProfileLayout from "../pages/ProfileLayout";
import OtherProfileInfo from "../components/profile/OtherProfileInfo";
import ProfileActivity from "../components/profile/ProfileActivity";

export default function ProfilePageOther({ username }) {
  const [profile, setProfile] = useState(null);

  return (
    <ProfileLayout>

      {/* TOP PROFILE SECTION (OTHER USER) */}
      <OtherProfileInfo
        username={username}
        setProfile={setProfile}
      />

      {/* SAME ACTIVITY SECTION */}
      <div className="mt-6 md:mt-8">
<ProfileActivity
  isOwnProfile={false}
  userId={profile?.userId}
  username={profile?.username}
/>
      </div>

    </ProfileLayout>
  );
}