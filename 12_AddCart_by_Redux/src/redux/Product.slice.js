import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("fetchProducts", async() => {
          const response = await axios.get("https://fakestoreapi.com/products")

          return response.data
})

 const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        isLoading:true,
        isError: null
    },
    extraReducers:(builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.products = action.payload
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false
            state.isError = action.error
        })
        
    }

 })

 export default productSlice.reducer