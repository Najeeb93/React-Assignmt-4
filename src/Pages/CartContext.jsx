import { createContext, useState } from "react";

export const Context = createContext();

function CartContext(children) {
  const [cartItems, setCartItems] = useState([]);

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

  function removeItemCart(id) {
    const arr = cartItems;
    const itemIndex = cartItems.findIndex((data) => data.id == item.id);
    arr.splice(itemIndex, 1);
    setCartItems([...arr]);
  }

  function isItemAdded(id) {
    const arr = cartItems;
    const itemIndex = cartItems.findIndex((data) => data.id == item.id);
   if(itemIndex == -1) {
    return null;
   } else {
    return arr[itemIndex];
   }
  }
  return (
    <CartContext.Provider
     value={{cartItems, addItemToCart, removeItemCart, isItemAdded}}>
        {children}
    </CartContext.Provider>
  );
}

export default CartContext;
