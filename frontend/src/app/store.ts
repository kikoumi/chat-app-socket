import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../feature/reducers";

/**
 * ストアの登録
 */
export const store = configureStore({
    reducer: rootReducer,
});
