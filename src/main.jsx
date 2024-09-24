import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PaginationProuct from './Pages/Pagination.jsx'
import AddCart from './Pages/AddCart.jsx'
import CartContextProvider from './Pages/CartContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartContextProvider>
    <App />

    </CartContextProvider>
    {/* <AddCart/> */}
    {/* <PaginationProuct/> */}
  </StrictMode>,
)
