import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../../common/user.type";

const initialState: AuthState = {
    currentUser: null,
    Authenticated: false,
};

/**
 * ユーザー登録系処理
 */
export const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<any>) => {
            state.currentUser = action.payload;
            state.Authenticated = true;
        },
        logout: (state) => {
            state.currentUser = null;
            state.Authenticated = false;
        },
    },
});
