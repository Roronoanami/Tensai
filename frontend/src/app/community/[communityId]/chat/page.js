"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CommunityBottomNav from "@/app/components/community/CommunityBottomNav";
import CommunityChat from "@/app/components/community/CommunityChat";

import {
  getCommunity,
  getCommunityMembers,
  getCommunityStatus,
} from "@/services/communityService";


export default function ChatPage({ params }) {

  const router = useRouter();

  const [community, setCommunity] = useState(null);

  const [messages, setMessages] = useState([]);

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(true);


  const [communityId, setCommunityId] = useState(null);



  useEffect(() => {

    const loadData = async () => {

      const { communityId } = await params;

      setCommunityId(communityId);


      try {

        const communityData =
          await getCommunity(communityId);


        // optional: load members/status if needed later
        await getCommunityMembers(communityId);

        await getCommunityStatus(communityId);


        setCommunity(communityData);


      } catch(err) {

        console.error(
          "CHAT LOAD ERROR:",
          err
        );

      }
      finally {

        setLoading(false);

      }

    };


    loadData();


  }, []);



  if(loading){

    return (
      <div className="flex h-screen items-center justify-center">
        Loading Chat...
      </div>
    );

  }



  if(!community){

    return (
      <div className="flex h-screen items-center justify-center">
        Community not found
      </div>
    );

  }


return (

  <div className="h-screen bg-white dark:bg-black">

    <CommunityChat
      community={community}
      messages={messages}
      message={message}
      setMessage={setMessage}
      onBack={() => router.back()}
      mobileMode={true}
    />


    <CommunityBottomNav />

  </div>

);



}