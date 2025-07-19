import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


 export const fetchProducts = createAsyncThunk("fetchProducts", async (search) => {
    const response  = await axios.get(`/api/products?search=${search}`)

    return response.data
 })

export const productSlice = createSlice({
    name:"products",
    initialState:{
        products:[],
        isLoading: false,
        isError: null
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true
                state.isError = null
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