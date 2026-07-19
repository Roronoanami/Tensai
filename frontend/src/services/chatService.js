import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
import { API_URL, SOCKET_URL } from "./api";

const CHAT_API_URL = `${API_URL}/chat`;

const getToken = () => {
  return localStorage.getItem("token");
};

const getHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${getToken()}`,
});

// =======================
// GET ALL CONVERSATIONS
// =======================

export const getConversations = async () => {
  const response = await fetch(`${CHAT_API_URL}/conversations`, {
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to load conversations");
  }

  return response.json();
};

// =======================
// GET ROOM
// =======================

export const getRoom = async (username) => {
  const response = await fetch(
    `${CHAT_API_URL}/room/${username}`,
    {
      headers: getHeaders(),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to load room");
  }

  return response.json();
};

// =======================
// GET CHAT HISTORY
// =======================

export const getChatHistory = async (roomId) => {
  const response = await fetch(
    `${CHAT_API_URL}/history/${roomId}`,
    {
      headers: getHeaders(),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to load chat history");
  }

  return response.json();
};

// =======================
// SEND MESSAGE (REST)
// =======================

export const sendMessage = async (
  receiverUsername,
  content
) => {
  const response = await fetch(
    `${CHAT_API_URL}/send`,
    {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify({
        receiverUsername,
        content,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to send message");
  }

  return response.json();
};

// =======================
// WEBSOCKET
// =======================

let stompClient;

// CONNECT SOCKET
export const connectSocket = (token, callback) => {
  const socket = new SockJS(`${SOCKET_URL}/chat`);

  stompClient = new Client({
    webSocketFactory: () => socket,

    reconnectDelay: 5000,

    onConnect: () => {
      console.log("Socket connected");
      callback();
    },
  });

  stompClient.activate();
};

// SUBSCRIBE ROOM

export const subscribeRoom = (
  roomId,
  callback
) => {
  return stompClient.subscribe(
    `/topic/${roomId}`,
    (message) => {
      callback(
        JSON.parse(message.body)
      );
    }
  );
};

// SEND SOCKET MESSAGE

export const sendMessageSocket = (
  roomId,
  message
) => {
  stompClient.publish({
    destination: `/app/sendMessage/${roomId}`,

    body: JSON.stringify({
      content: message,
    }),
  });
};

export const getNetworkUsers = async () => {
  const response = await fetch(
    `${API_URL}/profile/network`,
    {
      headers: getHeaders(),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to load network users");
  }

  return response.json();
};