


"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { UserPen } from "lucide-react";
import EditCommunityModal from "./EditCommunityModal";
import { updateCommunity } from "@/services/communityService";
export default function CommunityInfo({
  community,
  isOwner,
}) {
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

          {/* <button
  onClick={() => {
    console.log("EDIT CLICKED");
    setShowEdit(true);
  }}
>
  <UserPen size={22} />
</button>
        </div> */}


         {isOwner && (
    <button
      onClick={() => setShowEdit(true)}
      className="transition hover:text-red-600"
    >
      <UserPen size={22} />
    </button>
  )}

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
  // <EditCommunityModal
  //   open={showEdit}
  //   community={community}
    // onClose={() => setShowEdit(false)}
    // onSave={(data) => {
    //   console.log(data);
    //   setShowEdit(false);
    // }}
<EditCommunityModal
  open={showEdit}
  community={community}
  onClose={() => setShowEdit(false)}
    onSave={async (data) => {
  try {

    // await updateCommunity(
    //   community.communityId,
    //   {
    //     communityName: data.communityName,
    //     maxMembers: Number(data.maxMembers),
    //     description: data.description,
    //     rules: data.rules,
    //     communityImage: community.communityImage
    //   }
    // );

    await updateCommunity(
  community.communityId,
  {
    communityName: data.communityName,
    maxMembers: Number(data.maxMembers),
    description: data.description,
    rules: data.rules,
    imageFile: data.imageFile
  }
);

    alert("Community updated successfully");

    setShowEdit(false);

    // Optional: refresh the page so new data appears
    window.location.reload();

  } catch (err) {

    alert(err.message);

  }
}}
  />
)}
    </>
  );
}