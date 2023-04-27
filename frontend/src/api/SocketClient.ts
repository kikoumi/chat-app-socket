import { Socket, io } from "socket.io-client";
import { WEB_SOCKET_HOST } from "../constant/constant";

export class SocketClient {
    socket: Socket | null = null;

    /**
     * 接続
     */
    connect() {
        this.socket = io(WEB_SOCKET_HOST);
    }

    /**
     * 切断
     */
    disconnect() {
        if (this.socket) {
            this.socket.disconnect();
            this.socket = null;
        }
    }

    /**
     * 送信
     * @param eventName
     * @param data
     */
    emit(eventName: string, data: any) {
        if (this.socket) {
            this.socket.emit(eventName, data);
        }
    }

    /**
     * 受信
     * @param eventName
     * @param func
     */
    on(eventName: string, func: () => void) {
        if (this.socket) {
            this.socket.on(eventName, func);
        }
    }
}
