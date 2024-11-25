import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  user: []
}


const slice = createSlice({
  name: "Haider ",
  initialState,
  reducers: {
    userInputAdd: (state, action) => {
      const data = {
        id: nanoid(),
        name: action.payload
      }
      state.user.push(data)
      console.log(data);
    }

  }
})

export const { userInputAdd } = slice.actions

export default slice.reducer;