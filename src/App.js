import React from 'react'
import './App.css'
import SearchFilter2 from './projects/SearchFilter2'
// import ScrollIndecator from './projects/Scroll-indecator'



const App = () => {

  return (
    <div className='App'>
      {/* <ScrollIndecator url={'https://dummyjson.com/products?limit=100'} /> */}
      <SearchFilter2 />
    </div>
  )
}

export default App
