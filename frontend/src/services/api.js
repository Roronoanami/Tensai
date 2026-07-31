// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// const SOCKET_URL = API_URL.replace("/api", "");

// export { API_URL, SOCKET_URL };


const host =
  typeof window !== "undefined"
    ? window.location.hostname
    : "localhost";

export const API_URL =
  host === "localhost"
    ? "http://localhost:8081/api"
    : `http://${host}:8081/api`;

export const SOCKET_URL = API_URL.replace("/api", "");

