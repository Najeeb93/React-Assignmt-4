import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartContextProvider({children}) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    localStorage.setItem("carItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const itemsFromStorage = localStorage.getItem('cartItems');
    if(itemsFromStorage) {
      setCartItems([...JSON.parse(itemsFromStorage)]);
    }
  })

  function addItemToCart(item) {
    const arr = cartItems;

    const itemIndex = cartItems.findIndex((data) => data.id == item.id);
    if (itemIndex == -1) {
      arr.push({ ...item, quantity: 1 });
    } else {
      arr[itemIndex].quantity++;
    }
    setCartItems([...arr]);
  }

function lessQuanityFromCart(id) {
  const arr = cartItems;
  const itemIndex = cartItems.findIndex((data) => data.id == id);
  arr[itemIndex].quantity--;
  setCartItems([...arr]);
}

  function removeItemCart(id) {
    const arr = cartItems;
    const itemIndex = cartItems.findIndex((data) => data.id == id);
    arr.splice(itemIndex, 1);
    setCartItems([...arr]);
  }

  function isItemAdded(id) {
    const arr = cartItems;
    const itemIndex = cartItems.findIndex((data) => data.id == id);
   if(itemIndex == -1) {
    return null;
   } else {
    return arr[itemIndex];
   }
  }
  return (
    <CartContext.Provider value={{cartItems, addItemToCart, removeItemCart, lessQuanityFromCart, isItemAdded}}>

        {children}
    </CartContext.Provider> 
    


      
  );
}

export default CartContextProvider;
