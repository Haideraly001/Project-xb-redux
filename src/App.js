import React from 'react'
import AddTodo from './components/AddTodo'
import { Provider } from 'react-redux'
import { store } from './app/store'
import Todo from './components/Todo'


const App = () => {
  return (
    <Provider store={store}>

      <div className='w-full text-center m-5 '>
        <h2 className='text-2xl font-semibold'>React Redux Todo App</h2>
        <AddTodo />
        <Todo />
      </div>
    </Provider>
  )
}

export default App
