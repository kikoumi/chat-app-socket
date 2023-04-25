import express from "express";
import { createServer } from "http";
import { ClientToServerEvents, ServerToClientEvents } from "./models";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server<ClientToServerEvents, ServerToClientEvents>(httpServer, {
    cors: {
        origin: "http://localhost:3000",
    },
});

io.on("connection", (socket) => {
    console.log("クライアントと接続しました");

    //クライアントからの受信
    socket.on("message", (data: string) => {
        console.log(data);

        io.emit("receivedMessage", data);
    });

    socket.on("disconnect", (reason) => {
        console.log(`user disconnected. reason is ${reason}.`);
    });
});

httpServer.listen(5000, () => {
    console.log("Server start on port 5000");
});
