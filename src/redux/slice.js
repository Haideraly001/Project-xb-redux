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
      // console.log(data);
    },

    userPass: (state, action) => {
      const isPass = {
        id: nanoid(),
        pass: action.payload
      }
      state.user.push(isPass)
    },

    userRemove: (state, action) => {
      console.log(action);
      const data = state.user.filter((item) => {
        return (item.id !== action.payload)
      })
      state.user = data

    }
  }
})

export const { userInputAdd, userPass, userRemove } = slice.actions

export default slice.reducer;