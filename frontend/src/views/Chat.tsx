import { useState } from "react";
import { Socket, io } from "socket.io-client";

const socket: Socket = io(
    // サーバーのURLを指定
    "http://localhost:5000"
);

export const Chat = () => {
    const [message, setMessage] = useState("");
    const [list, setList] = useState<any[]>([]);

    const handleSubmit = () => {
        // サーバーへ送信
        socket.emit("message", { message: message });
        setMessage("");
    };

    // サーバーから受信
    socket.on("receivedMessage", (data) => {
        console.log(data);
        setList([...list, data]);
    });

    return (
        <>
            <h1>Chat-Page</h1>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={() => handleSubmit()}>送信</button>
            <div>
                {list.map((chat) => (
                    <div key={chat.message}>{chat.message}</div>
                ))}
            </div>
        </>
    );
};
