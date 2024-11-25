import React from 'react'
import Redux1 from './project/Redux1'
import { Provider } from 'react-redux'
import { store } from './Redux/store'

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Redux1 />
      </Provider>
    </div>
  )
}

export default App
