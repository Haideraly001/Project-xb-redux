import React from 'react'
import './App.css'
import Product from './components/product'
import { createRoutesFromElements, createBrowserRouter, RouterProvider, Route, BrowserRouter, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Card from './components/Card'
import Navbar from './components/Navbar'

const App = () => {


  // const router = createBrowserRouter(createRoutesFromElements(
  //   <Route>
  //     <Route path="/" element={<Product />} />
  //     <Route path="/card" element={<Card />} />
  //     <Route path="/dashboard" element={<Dashboard />} />
  //   </Route>
  // ))
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Product />} />
          <Route path="/card" element={<Card />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
