import React from 'react'
import './App.css'
import GithubProfile from './components/GithubProfile'
// import ScrollIndecator from './projects/Scroll-indecator'



const App = () => {

  return (
    <div className='App'>
      {/* <ScrollIndecator url={'https://dummyjson.com/products?limit=100'} /> */}
      <GithubProfile />
    </div>
  )
}

export default App
