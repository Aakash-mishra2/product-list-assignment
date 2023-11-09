import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filter_components/filterSlice";

export const store = configureStore({
    reducer: {
        filter: filterReducer,
    }
});
