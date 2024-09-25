import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PaginationProuct from './Pages/Pagination.jsx'
import AddCart from './Pages/AddCart.jsx'
import CartContextItem from './Pages/CartContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartContextItem>
    <App />
    </CartContextItem>
    {/* <AddCart/> */}
    {/* <PaginationProuct/> */}
  </StrictMode>,
)
