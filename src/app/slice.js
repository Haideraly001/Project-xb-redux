import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: []
}


const todoSlice = createSlice({
  name: todo,
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      }
      state.todos.push(todo)
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },

    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, text: action.payload }

        }
      })
    }

  }
})

export const { addTodo, updateTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer