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

// export const joinCommunity = async (communityId,password) => {

//   const response = await fetch(
//     `${COMMUNITY_API_URL}/join`,
//     {
//       method: "POST",
//       headers: getHeaders(),

//       body: JSON.stringify({
//         communityId,
//         password
//       }),
//     }
//   );


//   if (!response.ok) {
//     throw new Error("Failed to join community");
//   }


//   return response.json();

// };




// // =====================================
// // GET COMMUNITY INFO
// // =====================================

// export const getCommunity = async (communityId) => {


//   const response = await fetch(
//     `${COMMUNITY_API_URL}/${communityId}`,
//     {
//       method:"GET",
//       headers:getHeaders(),
//     }
//   );


//   if(!response.ok){

//     throw new Error(
//       "Failed to fetch community"
//     );

//   }


//   return response.json();


// };

// // =====================================
// // GET COMMUNITY MEMBERS
// // =====================================

// export const getCommunityMembers = async (communityId) => {

//   const response = await fetch(
//     `${COMMUNITY_API_URL}/${communityId}/members`,
//     {
//       method: "GET",
//       headers: getHeaders(),
//     }
//   );


//   if(!response.ok){

//     throw new Error(
//       "Failed to fetch community members"
//     );

//   }


//   return response.json();

// };


// // =====================================
// // GET COMMUNITY STATUS
// // =====================================

// export const getCommunityStatus = async (communityId) => {

//   const response = await fetch(
//     `${COMMUNITY_API_URL}/status/${communityId}`,
//     {
//       method: "GET",
//       headers: getHeaders(),
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Failed to fetch community status");
//   }

//   return response.json();

// };


import { API_URL } from "./api";

const COMMUNITY_API_URL = `${API_URL}/community`;


// =====================================
// HELPERS
// =====================================

const getToken = () => {
  if (typeof window === "undefined") return null;

  return localStorage.getItem("token");
};



const getHeaders = () => {

  const token = getToken();

  return {
    "Content-Type": "application/json",

    ...(token && {
      Authorization: `Bearer ${token}`,
    }),
  };

};



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


  const data = await response.json();


  if (!response.ok) {

    throw new Error(
      data.message || "Failed to create community"
    );

  }


  return data;

};




// =====================================
// JOIN COMMUNITY
// =====================================

export const joinCommunity = async (
  communityId,
  password
) => {


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


const text = await response.text();

const data = text ? JSON.parse(text) : {};


if (!response.ok) {

  console.log(
    "JOIN ERROR:",
    data
  );

  throw new Error(
    data.message || "Failed to join community"
  );

}



  return data;

};





// =====================================
// GET COMMUNITY INFO
// =====================================

export const getCommunity = async (
  communityId
) => {


  const response = await fetch(
    `${COMMUNITY_API_URL}/${communityId}`,
    {
      method:"GET",
      headers:getHeaders(),
    }
  );


  const data = await response.json();



  if(!response.ok){

    throw new Error(
      data.message || 
      "Failed to fetch community"
    );

  }


  return data;

};





// =====================================
// GET COMMUNITY MEMBERS
// =====================================

export const getCommunityMembers = async (
  communityId
) => {


  const response = await fetch(
    `${COMMUNITY_API_URL}/${communityId}/members`,
    {
      method:"GET",
      headers:getHeaders(),
    }
  );


const text = await response.text();

let data = {};

try {
    data = text ? JSON.parse(text) : {};
} catch {
    throw new Error(text);
}

if (!response.ok) {
    console.log("JOIN ERROR:", data);

    throw new Error(
        data.message || "Failed to join community"
    );
}

return data;

};





// =====================================
// GET COMMUNITY STATUS
// =====================================

export const getCommunityStatus = async (
  communityId
) => {


  const response = await fetch(
    `${COMMUNITY_API_URL}/status/${communityId}`,
    {
      method:"GET",
      headers:getHeaders(),
    }
  );

const text = await response.text();

console.log("RAW STATUS RESPONSE:", text);

let data = {};

try {
    data = text ? JSON.parse(text) : {};
} catch {
    throw new Error(text);
}

if (!response.ok) {
    console.log("STATUS HTTP CODE:", response.status);
    console.log("STATUS RESPONSE:", data);

    throw new Error(
        data.message || "Failed to fetch community status"
    );
}

return data;

};