import React from 'react'
import './App.css'
import FilterSearch from './components/FilterSearch'
// import ScrollIndecator from './projects/Scroll-indecator'



const App = () => {

  return (
    <div className='App'>
      {/* <ScrollIndecator url={'https://dummyjson.com/products?limit=100'} /> */}
      <FilterSearch />
    </div>
  )
}

export default App
