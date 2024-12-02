import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartslice"
// import productReducer from "./apiSlice"
import productSlice from './apiSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productSlice
  }

})