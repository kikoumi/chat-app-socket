import {
    applyMiddleware,
    configureStore,
    getDefaultMiddleware,
} from "@reduxjs/toolkit";
import rootReducer from "../feature/reducers";
import { socketMiddleware } from "../middleware/socketMiddleware";

// const socket: Socket = io(
//     // サーバーのURLを指定
//     "http://localhost:5000"
// );

/**
 * ストアの登録
 */
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(socketMiddleware),
});
