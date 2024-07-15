import { io } from "socket.io-client";

export const url = process.env.SERVER_URI || "http://localhost:3001";
export const socket = io.connect(url);
