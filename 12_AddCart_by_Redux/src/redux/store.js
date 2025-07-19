import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Product.slice"
import cartReducer from "./cart.slice"

export const store = configureStore({
    reducer: {
        products: productReducer,
        carts:  cartReducer
    }
})