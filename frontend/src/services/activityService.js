// const BASE_URL = "http://localhost:8081/api/activity";

// // GET MY ACTIVITIES
// export const getMyActivities = async (userId) => {
//   const res = await fetch(`${BASE_URL}/me?userId=${userId}`);
//   return res.json();
// };

// // GET USER ACTIVITIES
// export const getUserActivitiesByUsername = async (username) => {
//   const res = await fetch(`${BASE_URL}/user/${username}`);
//   return res.json();
// };

// // CREATE
// export const createActivity = async (userId, formData) => {
//   const res = await fetch(`${BASE_URL}?userId=${userId}`, {
//     method: "POST",
//     body: formData,
//   });
//   return res.json();
// };

// // DELETE
// export const deleteActivity = async (id, userId) => {
//   await fetch(`${BASE_URL}/${id}?userId=${userId}`, {
//     method: "DELETE",
//   });
// };

// // UPDATE
// export const updateActivity = async (id, userId, formData) => {
//   const res = await fetch(`${BASE_URL}/${id}?userId=${userId}`, {
//     method: "PUT",
//     body: formData,
//   });
//   return res.json();
// };


// const BASE_URL = "http://localhost:8081/api/activity";

// // ================= GET MY ACTIVITIES =================
// export const getMyActivities = async (userId) => {
//   const res = await fetch(`${BASE_URL}/me?userId=${userId}`);
//   return res.json();
// };

// // ================= GET USER ACTIVITIES =================
// export const getUserActivitiesByUsername = async (username) => {
//   const res = await fetch(`${BASE_URL}/user/${username}`);
//   return res.json();
// };

// // ================= CREATE ACTIVITY =================
// export const createActivity = async (userId, formData) => {
//   const res = await fetch(`${BASE_URL}?userId=${userId}`, {
//     method: "POST",
//     body: formData,
//   });

//   return res.json();
// };

// // ================= UPDATE ACTIVITY =================
// export const updateActivity = async (id, userId, formData) => {
//   const res = await fetch(`${BASE_URL}/${id}?userId=${userId}`, {
//     method: "PUT",
//     body: formData,
//   });

//   return res.json();
// };

// // ================= DELETE ACTIVITY =================
// export const deleteActivity = async (id, userId) => {
//   await fetch(`${BASE_URL}/${id}?userId=${userId}`, {
//     method: "DELETE",
//   });
// };










// const BASE_URL = "http://localhost:8081/api/activity";

// // ================= GET MY ACTIVITIES =================
// export const getMyActivities = async (userId) => {
//   const res = await fetch(`${BASE_URL}/me?userId=${userId}`);
//   return res.json();
// };

// // ================= GET USER ACTIVITIES =================
// export const getUserActivitiesByUsername = async (username) => {
//   const res = await fetch(`${BASE_URL}/user/${username}`);
//   return res.json();
// };

// // ================= CREATE ACTIVITY =================
// export const createActivity = async (userId, formData) => {
//   const res = await fetch(`${BASE_URL}?userId=${userId}`, {
//     method: "POST",
//     body: formData,
//   });

//   console.log("Status:", res.status);

//   const text = await res.text();
//   console.log("Response:", text);

//   if (!res.ok) {
//     throw new Error(text || "Failed to create activity");
//   }

//   return text ? JSON.parse(text) : null;
// };

// // ================= UPDATE ACTIVITY =================
// export const updateActivity = async (id, userId, formData) => {
//   const res = await fetch(`${BASE_URL}/${id}?userId=${userId}`, {
//     method: "PUT",
//     body: formData,
//   });

//   console.log("Status:", res.status);

//   const text = await res.text();
//   console.log("Response:", text);

//   if (!res.ok) {
//     throw new Error(text || "Failed to update activity");
//   }

//   return text ? JSON.parse(text) : null;
// };

// // ================= DELETE ACTIVITY =================
// export const deleteActivity = async (id, userId) => {
//   await fetch(`${BASE_URL}/${id}?userId=${userId}`, {
//     method: "DELETE",
//   });
// };






const BASE_URL = "http://localhost:8081/api/activity";

// ================= GET MY ACTIVITIES =================
export const getMyActivities = async (userId) => {
  const token = localStorage.getItem("token");
 



console.log("TOKEN =", token);
console.log("USER ID =", userId); 


  const res = await fetch(`${BASE_URL}/me?userId=${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch activities");
  }

  return res.json();
};

// ================= GET USER ACTIVITIES =================
// export const getUserActivitiesByUsername = async (username) => {
//   const token = localStorage.getItem("token");

//   const res = await fetch(`${BASE_URL}/user/${username}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch user activities");
//   }

//   return res.json();
// };


export const getUserActivitiesByUsername = async (username) => {
  const token = localStorage.getItem("token");

  console.log("Fetching activities for:", username);

  const res = await fetch(`${BASE_URL}/user/${username}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log("Status:", res.status);

  if (!res.ok) {
    throw new Error("Failed to fetch user activities");
  }

  const data = await res.json();

  console.log("Returned activities:", data);

  return data;
};
// ================= CREATE ACTIVITY =================
export const createActivity = async (userId, formData) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}?userId=${userId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  const text = await res.text();

  console.log("CREATE STATUS:", res.status);
  console.log("CREATE RESPONSE:", text);

  if (!res.ok) {
    throw new Error(text || "Failed to create activity");
  }

  return text ? JSON.parse(text) : null;
};

// ================= UPDATE ACTIVITY =================
export const updateActivity = async (id, userId, formData) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/${id}?userId=${userId}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  const text = await res.text();

  console.log("UPDATE STATUS:", res.status);
  console.log("UPDATE RESPONSE:", text);

  if (!res.ok) {
    throw new Error(text || "Failed to update activity");
  }

  return text ? JSON.parse(text) : null;
};

// ================= DELETE ACTIVITY =================
export const deleteActivity = async (id, userId) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/${id}?userId=${userId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to delete activity");
  }
};