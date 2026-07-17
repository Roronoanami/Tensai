import { API_URL } from "./api";

const getToken = () => localStorage.getItem("token");

export const getNotifications = async () => {
  const token = getToken();

  console.log("TOKEN =", token);

  const response = await fetch(`${API_URL}/notifications`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
};