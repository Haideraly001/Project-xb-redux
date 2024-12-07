import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Slice1"
import productApiReducer from "./Slice1"

export const store = configureStore({
  reducer: {
    product: ProductReducer,
    cart: productApiReducer
  }
})