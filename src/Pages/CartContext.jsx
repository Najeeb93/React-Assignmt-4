import { createContext, useState } from "react";




export const Context = createContext();


function CartContextProvider(children) {
    const [cartItems, setCartItems] = useState([]);

    function addItemToCart(item) {
        const arr = cartItems

        const itemIndex = cartItems.findIndex((data)=> data.id == item.id)
        if(itemIndex == -1)
            {
                arr.push({ ...item, quantity: 1});
            }  else {
                arr[itemIndex].quantity++;
            }
    }
    return (
        <CartContextProvider.Provider>
            {children}
        </CartContextProvider.Provider>
    )
}

export default CartContextProvider;