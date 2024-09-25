import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Image } from "antd";

function CartPage() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="contianer mx-auto my-5">
      <h1 className="font-medium text-3xl underline">Cart Items</h1>
      {cartItems.map((data) => (
        <div className="flex border my-2 p-3">
          <Image src={data.thumbnail} height={60} width={60} />
          
        </div>
      ))}
    </div>
  );
}

export default CartPage;
