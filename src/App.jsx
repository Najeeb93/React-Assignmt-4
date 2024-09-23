import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './Pages/Products'
import Home from './Pages/Home'
import ProductDetail from './Pages/ProductDetail'
import AddCart from './Pages/AddCart'
import Cart from './Pages/Cart'
import CartPage from './Pages/Cart'

function App() {

  return (
    // <BrowserRouter>
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/product" element={<Products />} />
    //   <Route path="/products/:id" element={<ProductDetail />} />
    // </Routes>
    // </BrowserRouter>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddCart/>}  />
      <Route path='/cart' element={<CartPage/>}  />
    </Routes>
    </BrowserRouter>
  )
}

export default App
