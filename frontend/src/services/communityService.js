// import { API_URL } from "./api";

// const COMMUNITY_API_URL = `${API_URL}/community`;

// // =====================================
// // HELPERS
// // =====================================

// const getToken = () => localStorage.getItem("token");

// const getHeaders = () => ({
//   "Content-Type": "application/json",
//   Authorization: `Bearer ${getToken()}`,
// });

// // =====================================
// // CREATE COMMUNITY
// // =====================================

// export const createCommunity = async (communityData) => {

//   const response = await fetch(
//     `${COMMUNITY_API_URL}/create`,
//     {
//       method: "POST",
//       headers: getHeaders(),
//       body: JSON.stringify(communityData),
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Failed to create community");
//   }

//   return response.json();

// };

// // =====================================
// // JOIN COMMUNITY
// // =====================================

// export const joinCommunity = async (communityId) => {

//   const response = await fetch(
//     `${COMMUNITY_API_URL}/join`,
//     {
//       method: "POST",
//       headers: getHeaders(),
//       body: JSON.stringify({
//         communityId,
//       }),
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Failed to join community");
//   }

//   return response.json();

// };



import { API_URL } from "./api";

const COMMUNITY_API_URL = `${API_URL}/community`;


// =====================================
// HELPERS
// =====================================

const getToken = () => localStorage.getItem("token");


const getHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${getToken()}`,
});



// =====================================
// CREATE COMMUNITY
// =====================================

export const createCommunity = async (communityData) => {

  const response = await fetch(
    `${COMMUNITY_API_URL}/create`,
    {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(communityData),
    }
  );


  if (!response.ok) {
    throw new Error("Failed to create community");
  }


  return response.json();

};




// =====================================
// JOIN COMMUNITY
// =====================================

export const joinCommunity = async (communityId,password) => {

  const response = await fetch(
    `${COMMUNITY_API_URL}/join`,
    {
      method: "POST",
      headers: getHeaders(),

      body: JSON.stringify({
        communityId,
        password
      }),
    }
  );


  if (!response.ok) {
    throw new Error("Failed to join community");
  }


  return response.json();

};




// =====================================
// GET COMMUNITY INFO
// =====================================

export const getCommunity = async (communityId) => {


  const response = await fetch(
    `${COMMUNITY_API_URL}/${communityId}`,
    {
      method:"GET",
      headers:getHeaders(),
    }
  );


  if(!response.ok){

    throw new Error(
      "Failed to fetch community"
    );

  }


  return response.json();


};

// =====================================
// GET COMMUNITY MEMBERS
// =====================================

export const getCommunityMembers = async (communityId) => {

  const response = await fetch(
    `${COMMUNITY_API_URL}/${communityId}/members`,
    {
      method: "GET",
      headers: getHeaders(),
    }
  );


  if(!response.ok){

    throw new Error(
      "Failed to fetch community members"
    );

  }


  return response.json();

};