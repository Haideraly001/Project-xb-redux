import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.push(action.payload)
    },
    removeProducts: (state, action) => {
      return state = state.filter((item) => item.id !== action.payload)
    }

  }
})

export const { addProducts, removeProducts } = ProductSlice.actions
export default ProductSlice.reducer
