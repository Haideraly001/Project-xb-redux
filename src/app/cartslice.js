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
    },
    removeItem(state, action) {
      state.items = state.items.filter((id) => id.id !== action.payload)
    }
  }
})

export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer