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


const BASE_URL = "http://localhost:8081/api/activity";

// ================= GET MY ACTIVITIES =================
export const getMyActivities = async (userId) => {
  const res = await fetch(`${BASE_URL}/me?userId=${userId}`);
  return res.json();
};

// ================= GET USER ACTIVITIES =================
export const getUserActivitiesByUsername = async (username) => {
  const res = await fetch(`${BASE_URL}/user/${username}`);
  return res.json();
};

// ================= CREATE ACTIVITY =================
export const createActivity = async (userId, formData) => {
  const res = await fetch(`${BASE_URL}?userId=${userId}`, {
    method: "POST",
    body: formData,
  });

  return res.json();
};

// ================= UPDATE ACTIVITY =================
export const updateActivity = async (id, userId, formData) => {
  const res = await fetch(`${BASE_URL}/${id}?userId=${userId}`, {
    method: "PUT",
    body: formData,
  });

  return res.json();
};

// ================= DELETE ACTIVITY =================
export const deleteActivity = async (id, userId) => {
  await fetch(`${BASE_URL}/${id}?userId=${userId}`, {
    method: "DELETE",
  });
};