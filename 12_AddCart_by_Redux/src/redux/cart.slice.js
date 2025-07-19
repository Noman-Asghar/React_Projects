import { createSlice } from "@reduxjs/toolkit";


export const initialState = {
    items: [],
    totalPrice:0
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{

        addToCart: (state, action) => {


            const existingItems = state.items.find((item) => item.id === action.payload.id)
            if (existingItems) {
                   existingItems.quantity  += 1
                   state.totalPrice += action.payload.price
            }else{
                      state.items.push({...action.payload, quantity:1})
                      state.totalPrice += action.payload.price
            }
    },
      
    removeCart: (state, action) => {
      const itemToRemove = state.items.find(item => item.id === action.payload.id);

      if (itemToRemove) {
        // Update total price
        state.totalPrice -= itemToRemove.price * (itemToRemove.quantity || 1);
        // Remove item
        state.items = state.items.filter(item => item.id !== action.payload.id);
      }
    },
    updateCart:(state, action) => {
        const {id, quantity} = action.payload

        const item = state.items.find((cart) => cart.id === id)

        if (item) {
        const newPrice = (quantity - item.quantity) * item.price;
        item.quantity = quantity;
        state.totalPrice += newPrice
    }
    }

    

}
})

export const {addToCart, removeCart, updateCart}  = cartSlice.actions

export default cartSlice.reducer

