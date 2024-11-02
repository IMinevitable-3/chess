import { io } from "socket.io-client";
export const url =  "http://localhost:5000";
export const socket = io.connect(url);
