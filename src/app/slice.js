import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {

  todos: [
  ]
}


const slice = createSlice({
  name: "first todo",
  initialState,

  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        todo: action.payload,
      }
      state.todos.push(newTodo)
      // console.log(newTodo);

    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },

    updateTodo: (state, action) => {
      const { id, text } = action.payload
      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, todo: text }
        }
        return todo
      })
    }
  }
})


export const { addTodo, removeTodo, updateTodo } = slice.actions

export default slice.reducer