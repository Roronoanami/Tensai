import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
import { API_URL, SOCKET_URL } from "./api";

let stompClient = null;

const getToken = () => localStorage.getItem("token");

const getHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${getToken()}`,
});

// =====================
// GET OLD MESSAGES
// =====================

export const getCommunityMessages = async (communityId) => {
  const response = await fetch(
    `${API_URL}/community/messages/${communityId}`,
    {
      headers: getHeaders(),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to load messages");
  }

  return response.json();
};

// =====================
// CONNECT
// =====================

export const connectCommunitySocket = (callback) => {
  if (stompClient?.active) {
    callback?.();
    return;
  }

  const socket = new SockJS(`${SOCKET_URL}/chat`);

  stompClient = new Client({
    webSocketFactory: () => socket,

    reconnectDelay: 5000,

    connectHeaders: {
      Authorization: `Bearer ${getToken()}`,
    },

    onConnect: () => {
      console.log("✅ Community Socket Connected");
      callback?.();
    },

    onDisconnect: () => {
      console.log("Disconnected");
    },

    onStompError: (frame) => {
      console.log(frame);
    },
  });

  stompClient.activate();
};

// =====================
// SUBSCRIBE
// =====================

export const subscribeCommunity = (
  communityId,
  callback
) => {

  if (!stompClient?.connected) return null;

  return stompClient.subscribe(
    `/topic/community/${communityId}`,
    (message) => {
      callback(JSON.parse(message.body));
    }
  );

};

// =====================
// SEND
// =====================

export const sendCommunityMessage = (
  communityId,
  message
) => {

//   if (!stompClient?.connected) return;


if (!stompClient?.connected) {
  console.log("❌ Socket not connected");
  return;
}

console.log("✅ Sending message");


  stompClient.publish({
    destination: `/app/community/${communityId}`,
    body: JSON.stringify({
      message,
      messageType: "TEXT",
    }),
  });

};

// =====================
// DISCONNECT
// =====================

export const disconnectCommunitySocket = () => {

  if (stompClient) {
    stompClient.deactivate();
    stompClient = null;
  }

};