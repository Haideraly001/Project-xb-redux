import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      state.items.push(item)
    }
  }
})

export const { addItem } = cartSlice.actions
export default cartSlice.reducer