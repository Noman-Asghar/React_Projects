import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../../redux/slices/todo/todoSlice";

export const store = configureStore({
    reducer: todoReducer
})