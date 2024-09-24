import { createContext } from "react";




export const Context = createContext();


function CartContextProvider(children) {
    return (
        <CartContextProvider.Provider>
            {children}
        </CartContextProvider.Provider>
    )
}

export default CartContextProvider;