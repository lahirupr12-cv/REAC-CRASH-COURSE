import { createSlice } from "@reduxjs/toolkit";
import Items from '../items'

const initialState = {
    cartItems: Items,
    amount: 1,
    total: 0,
    isLoading: false
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        }
    }
})

export const {clearCart} = cartSlice.actions
export default cartSlice.reducer