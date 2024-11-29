import React from 'react'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import { store } from './app/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <div>
      <Provider store={store}>

        <h1>Redux Toolkit Todo App</h1>
        <AddTodo />
        <Todo />
      </Provider>
    </div>
  )
}

export default App
