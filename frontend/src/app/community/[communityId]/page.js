
import CommunityLayout from "@/app/pages/CommunityLayout";
export default async function Page({params}){

 const {communityId}=await params;

 return (
   <CommunityLayout 
      communityId={communityId}
   />
 );

}