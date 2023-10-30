import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./accountSlice";
export const store = configureStore({
    reducer: {
        userAccount: userReducer,
    }
});