import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './Pages/Products'
import Home from './Pages/Home'
import ProdutDetail from './Pages/ProductDetail'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Products />} />
      <Route path="/products/:id" element={<ProdutDetail />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
