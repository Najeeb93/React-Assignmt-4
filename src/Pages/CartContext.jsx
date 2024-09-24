import { createContext, useState } from "react";




export const Context = createContext();


function CartContextProvider(children) {
    const [cartItems, setCartItems] = useState([]);

    function addItemToCart(item) {

        const itemIndex = cartItems.findIndex((data)=> data.id == item.id)
    }
    return (
        <CartContextProvider.Provider>
            {children}
        </CartContextProvider.Provider>
    )
}

export default CartContextProvider;