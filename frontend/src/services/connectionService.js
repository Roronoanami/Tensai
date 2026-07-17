import { API_URL } from "./api";

const getHeaders = () => ({
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

export const acceptConnection = async (connectionId) => {
  const response = await fetch(
    `${API_URL}/connection/accept/${connectionId}`,
    {
      method: "PUT",
      headers: getHeaders(),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to accept connection");
  }

  return response;
};