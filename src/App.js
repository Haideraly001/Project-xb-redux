import React from 'react'
import './App.css'
// import FoodApp from './projects/FoodRecipe'
import ScrollIndecator from './projects/Scroll-indecator'


const App = () => {

  return (
    <div className='App'>
      {/* <FoodApp /> */}
      <ScrollIndecator url={'https://dummyjson.com/products?limit=100'} />
    </div>
  )
}

export default App
