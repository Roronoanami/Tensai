// import SockJS from "sockjs-client";
// import { Client } from "@stomp/stompjs";
// import { API_URL, SOCKET_URL } from "./api";

// const CHAT_API_URL = `${API_URL}/chat`;

// const getToken = () => {
//   return localStorage.getItem("token");
// };

// const getHeaders = () => ({
//   "Content-Type": "application/json",
//   Authorization: `Bearer ${getToken()}`,
// });

// // =======================
// // GET ALL CONVERSATIONS
// // =======================


// // =======================
// // GET ROOM
// // =======================

// export const getRoom = async (username) => {
//   const response = await fetch(
//     `${CHAT_API_URL}/room/${username}`,
//     {
//       headers: getHeaders(),
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Failed to load room");
//   }

//   return response.json();
// };

// // =======================
// // GET CHAT HISTORY
// // =======================

// // =======================
// // SEND MESSAGE (REST)
// // =======================

// // =======================
// // WEBSOCKET
// // =======================
// let stompClient;
// let connecting = false;

// export const connectSocket = (token, callback) => {

//   // Already connected
//   if (stompClient?.connected) {
//     callback?.();
//     return;
//   }

//   // Already trying to connect
//   if (connecting) return;

//   connecting = true;

//   const socket = new SockJS(`${SOCKET_URL}/chat`);

//   stompClient = new Client({
//     webSocketFactory: () => socket,

//     reconnectDelay: 5000,

//     connectHeaders: {
//       Authorization: `Bearer ${token}`,
//     },

//     onConnect: () => {
//       connecting = false;
//       console.log("Socket connected");
//       callback?.();
//     },

//     onStompError: (frame) => {
//       console.error(frame);
//     },
//   });

//   stompClient.activate();
// };


// // SUBSCRIBE ROOM
// export const subscribeRoom = (roomId, callback) => {

//   if (!stompClient || !stompClient.connected) {
//     return null;
//   }

//   return stompClient.subscribe(
//     `/topic/chat/${roomId}`,
//     (message) => {
//       callback(JSON.parse(message.body));
//     }
//   );
// };
// // =======================
// // SUBSCRIBE CONVERSATIONS
// // =======================

// // export const subscribeConversations = (
// //   username,
// //   callback
// // ) => {

// //   if (!stompClient || !stompClient.connected) {
// //     return null;
// //   }

// //   return stompClient.subscribe(
// //     `/topic/conversations/${username}`,
// //     callback
// //   );
// // };
// // SEND SOCKET MESSAGE
// export const sendMessageSocket = (
//   receiverUsername,
//   content
// ) => {

//   if (!stompClient || !stompClient.connected) {
//     console.log("Socket not connected");
//     return;
//   }

//   stompClient.publish({
//     destination: "/app/chat.send",
//     body: JSON.stringify({
//       receiverUsername,
//       content,
//     }),
//   });
// };

// export const getNetworkUsers = async () => {
//   const response = await fetch(
//     `${API_URL}/profile/network`,
//     {
//       headers: getHeaders(),
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Failed to load network users");
//   }

//   return response.json();
// };

// export const isSocketConnected = () => {
//   return stompClient?.connected ?? false;
// };






// import SockJS from "sockjs-client";
// import { Client } from "@stomp/stompjs";
// import { API_URL, SOCKET_URL } from "./api";

// const CHAT_API_URL = `${API_URL}/chat`;

// const getToken = () => {
//   return localStorage.getItem("token");
// };

// const getHeaders = () => ({
//   "Content-Type": "application/json",
//   Authorization: `Bearer ${getToken()}`,
// });

// // =======================
// // GET ALL CONVERSATIONS
// // =======================

// export const getConversations = async () => {
//   const response = await fetch(`${CHAT_API_URL}/conversations`, {
//     headers: getHeaders(),
//   });

//   if (!response.ok) {
//     throw new Error("Failed to load conversations");
//   }

//   return response.json();
// };

// // =======================
// // GET ROOM
// // =======================

// export const getRoom = async (username) => {
//   const response = await fetch(
//     `${CHAT_API_URL}/room/${username}`,
//     {
//       headers: getHeaders(),
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Failed to load room");
//   }

//   return response.json();
// };

// // =======================
// // GET CHAT HISTORY
// // =======================

// export const getChatHistory = async (roomId) => {
//   const response = await fetch(
//     `${CHAT_API_URL}/history/${roomId}`,
//     {
//       headers: getHeaders(),
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Failed to load chat history");
//   }

//   return response.json();
// };

// // =======================
// // SEND MESSAGE (REST)
// // =======================

// export const sendMessage = async (
//   receiverUsername,
//   content
// ) => {
//   const response = await fetch(
//     `${CHAT_API_URL}/send`,
//     {
//       method: "POST",
//       headers: getHeaders(),
//       body: JSON.stringify({
//         receiverUsername,
//         content,
//       }),
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Failed to send message");
//   }

//   return response.json();
// };

// // =======================
// // WEBSOCKET
// // =======================

// let stompClient;

// // CONNECT SOCKET
// export const connectSocket = (token, callback) => {
//   const socket = new SockJS(`${SOCKET_URL}/chat`);

//   stompClient = new Client({
//     webSocketFactory: () => socket,

//     reconnectDelay: 5000,

//     onConnect: () => {
//       console.log("Socket connected");
//       callback();
//     },
//   });

//   stompClient.activate();
// };

// // SUBSCRIBE ROOM

// export const subscribeRoom = (
//   roomId,
//   callback
// ) => {
//   return stompClient.subscribe(
//     `/topic/${roomId}`,
//     (message) => {
//       callback(
//         JSON.parse(message.body)
//       );
//     }
//   );
// };

// // SEND SOCKET MESSAGE

// export const sendMessageSocket = (
//   roomId,
//   message
// ) => {
//   stompClient.publish({
//     destination: `/app/sendMessage/${roomId}`,

//     body: JSON.stringify({
//       content: message,
//     }),
//   });
// };

// export const getNetworkUsers = async () => {
//   const response = await fetch(
//     `${API_URL}/profile/network`,
//     {
//       headers: getHeaders(),
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Failed to load network users");
//   }

//   return response.json();
// };


// import SockJS from "sockjs-client";
// import { Client } from "@stomp/stompjs";
// import { API_URL, SOCKET_URL } from "./api";

// const CHAT_API_URL = `${API_URL}/chat`;

// let stompClient = null;

// // =======================
// // HELPERS
// // =======================

// const getToken = () => localStorage.getItem("token");

// const getHeaders = () => ({
//   "Content-Type": "application/json",
//   Authorization: `Bearer ${getToken()}`,
// });

// // =======================
// // GET ALL CONVERSATIONS
// // =======================

// export const getConversations = async () => {
//   const response = await fetch(`${CHAT_API_URL}/conversations`, {
//     headers: getHeaders(),
//   });

//   if (!response.ok) {
//     throw new Error("Failed to load conversations");
//   }

//   return response.json();
// };

// // =======================
// // GET ROOM
// // =======================

// export const getRoom = async (username) => {
//   const response = await fetch(
//     `${CHAT_API_URL}/room/${username}`,
//     {
//       headers: getHeaders(),
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Failed to load room");
//   }

//   return response.json();
// };

// // =======================
// // GET CHAT HISTORY
// // =======================

// export const getChatHistory = async (roomId) => {
//   const response = await fetch(
//     `${CHAT_API_URL}/history/${roomId}`,
//     {
//       headers: getHeaders(),
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Failed to load chat history");
//   }

//   return response.json();
// };

// // =======================
// // SEND MESSAGE (REST)
// // =======================

// export const sendMessage = async (
//   receiverUsername,
//   content
// ) => {
//   const response = await fetch(
//     `${CHAT_API_URL}/send`,
//     {
//       method: "POST",
//       headers: getHeaders(),
//       body: JSON.stringify({
//         receiverUsername,
//         content,
//       }),
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Failed to send message");
//   }

//   return response.json();
// };

// // =======================
// // WEBSOCKET
// // =======================

// export const connectSocket = (callback) => {

//   if (stompClient?.connected) {
//     callback?.();
//     return;
//   }

//   const token = getToken();

//   const socket = new SockJS(`${SOCKET_URL}/chat`);

//   stompClient = new Client({
//     webSocketFactory: () => socket,

//     reconnectDelay: 5000,

//     connectHeaders: {
//       Authorization: `Bearer ${token}`,
//     },

//     debug: (str) => {
//       console.log(str);
//     },

//     onConnect: () => {
//       console.log("✅ WebSocket Connected");
//       callback?.();
//     },

//     onDisconnect: () => {
//       console.log("❌ WebSocket Disconnected");
//     },

//     onStompError: (frame) => {
//       console.error("STOMP Error:", frame.headers["message"]);
//       console.error(frame.body);
//     },

//     onWebSocketError: (error) => {
//       console.error("WebSocket Error:", error);
//     },
//   });

//   stompClient.activate();
// };

// // =======================
// // SUBSCRIBE ROOM
// // =======================

// export const subscribeRoom = (
//   roomId,
//   callback
// ) => {

//   if (!stompClient || !stompClient.connected) {
//     console.error("Socket not connected");
//     return null;
//   }

//   return stompClient.subscribe(
//     `/topic/${roomId}`,
//     (message) => {
//       callback(JSON.parse(message.body));
//     }
//   );
// };

// // =======================
// // SEND SOCKET MESSAGE
// // =======================

// export const sendMessageSocket = (
//   roomId,
//   message
// ) => {

//   if (!stompClient || !stompClient.connected) {
//     console.error("Socket not connected");
//     return;
//   }

//   stompClient.publish({
//     destination: `/app/sendMessage/${roomId}`,

//     body: JSON.stringify({
//       content: message,
//     }),
//   });
// };

// // =======================
// // DISCONNECT SOCKET
// // =======================

// export const disconnectSocket = () => {

//   if (stompClient) {
//     stompClient.deactivate();
//     stompClient = null;
//   }
// };

// // =======================
// // SOCKET STATUS
// // =======================

// export const isSocketConnected = () => {
//   return stompClient?.connected || false;
// };

// // =======================
// // NETWORK USERS
// // =======================

// export const getNetworkUsers = async () => {

//   const response = await fetch(
//     `${API_URL}/profile/network`,
//     {
//       headers: getHeaders(),
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Failed to load network users");
//   }

//   return response.json();
// };




import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
import { API_URL, SOCKET_URL } from "./api";

const CHAT_API_URL = `${API_URL}/chat`;

let stompClient = null;

// =======================
// HELPERS
// =======================

const getToken = () => localStorage.getItem("token");

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
// CONNECT SOCKET
// =======================

export const connectSocket = (callback) => {

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

    debug: (str) => {
      console.log(str);
    },

    onConnect: () => {
      console.log("✅ WebSocket Connected");
      callback?.();
    },

    onDisconnect: () => {
      console.log("❌ WebSocket Disconnected");
    },

    onStompError: (frame) => {
      console.error("STOMP Error:", frame.headers.message);
      console.error(frame.body);
    },

    onWebSocketError: (error) => {
      console.error("WebSocket Error:", error);
    },

  });

  stompClient.activate();
};

// =======================
// SUBSCRIBE TO ROOM
// =======================

export const subscribeRoom = (
  roomId,
  callback
) => {

  if (!stompClient || !stompClient.connected) {
    console.error("Socket not connected");
    return null;
  }

  return stompClient.subscribe(
    `/topic/${roomId}`,
    (message) => {
      callback(JSON.parse(message.body));
    }
  );
};

// =======================
// SEND SOCKET MESSAGE
// =======================

export const sendMessageSocket = (
  roomId,
  receiverUsername,
  content
) => {

  if (!stompClient || !stompClient.connected) {
    console.error("Socket not connected");
    return;
  }

  stompClient.publish({

    destination: `/app/sendMessage/${roomId}`,

    body: JSON.stringify({
      receiverUsername,
      content,
    }),

  });
};

// =======================
// DISCONNECT SOCKET
// =======================

export const disconnectSocket = () => {

  if (stompClient) {
    stompClient.deactivate();
    stompClient = null;
  }

};

// =======================
// SOCKET STATUS
// =======================

export const isSocketConnected = () => {
  return !!stompClient?.connected;
};

// =======================
// NETWORK USERS
// =======================

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