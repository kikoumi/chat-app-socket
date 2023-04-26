import { useState } from "react";
import { Socket, io } from "socket.io-client";
import { ChatArea } from "./Components/ChatArea";
import { Header } from "./Components/Header";
import { Sidebar } from "./Components/Sidebar";

// const socket: Socket = io(
//     // サーバーのURLを指定
//     "http://localhost:5000"
// );

export const Chat = () => {
    const [message, setMessage] = useState("");
    const [list, setList] = useState<any[]>([]);

    // const handleSubmit = () => {
    //     // サーバーへ送信
    //     socket.emit("message", { message: message });
    //     setMessage("");
    // };

    // // サーバーから受信
    // socket.on("receivedMessage", (data) => {
    //     console.log(data);
    //     setList([...list, data]);
    // });

    return (
        <>
            <Header />
            <div className="flex m-0 content">
                <Sidebar />
                <ChatArea />
            </div>
        </>
    );
};
