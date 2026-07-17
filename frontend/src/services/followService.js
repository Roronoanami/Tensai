import { API_URL } from "./api";


const getHeaders = () => ({
  Authorization:
    `Bearer ${localStorage.getItem("token")}`,
});


export const getFollowing = async(username)=>{

  const response = await fetch(
    `${API_URL}/follow/following/${username}`,
    {
      headers:getHeaders(),
    }
  );


  if(!response.ok){
    throw new Error("Failed to load following");
  }


  return response.json();

};