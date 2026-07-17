const API_URL = process.env.NEXT_PUBLIC_API_URL;

const SOCKET_URL = API_URL.replace("/api", "");

export { API_URL, SOCKET_URL };