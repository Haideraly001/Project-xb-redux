import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [],
}

const productSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    fetchProducts(state, action) {
      state.items = action.payload;
    }
  }
})



export default productSlice.reducer

export const { fetchProducts } = productSlice.actions;

export function getProducts() {
  return async function getProductThunk(dispatch, getState) {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    dispatch(fetchProducts(data))
  }
}