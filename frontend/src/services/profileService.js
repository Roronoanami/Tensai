import { API_URL } from "./api";

const getHeaders = () => ({
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

export const getMyProfile = async () => {
  const response = await fetch(`${API_URL}/profile/me`, {
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch profile");
  }

  return response.json();
};

export const getPublicProfile = async (username) => {
  const response = await fetch(
    `${API_URL}/profile/public/username/${username}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch profile");
  }

  return response.json();
};

export const getFollowersCount = async (username) => {
  const response = await fetch(
    `${API_URL}/follow/followers/${username}`,
    {
      headers: getHeaders(),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch followers");
  }

  return response.json();
};

export const getConnectionsCount = async (username) => {
  const response = await fetch(
    `${API_URL}/connection/count/${username}`,
    {
      headers: getHeaders(),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch connections");
  }

  return response.json();
};


export const getMyNetwork = async () => {

  const token = localStorage.getItem("token");


  const response = await fetch(
    `${API_URL}/profile/network`,
    {
      headers:{
        Authorization:`Bearer ${token}`,
      },
    }
  );


  if(!response.ok){
    throw new Error("Failed to fetch network");
  }


  return response.json();

};