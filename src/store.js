import { configureStore } from "@reduxjs/toolkit";
import CartReducers from './features/cartSlice'

export const store = configureStore({
    reducer: {
        cart : CartReducers
    }
})