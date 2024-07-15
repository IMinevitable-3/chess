import { io } from "socket.io-client";
export const url = "https://chess-kl3s.onrender.com" || "http://localhost:3001";
export const socket = io.connect(url);
