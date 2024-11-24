import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  users: []
}

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const data = {
        id: nanoid(),
        name: action.payload,
      }
      state.users.push(data)
    }

  }
})

export const { addUser } = slice.actions
export default slice.reducer