import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Image } from "antd";

function CartPage() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="contianer mx-auto my-5">
      <h1 className="font-medium text-3xl underline">Cart Items</h1>
      {cartItems.map((data) => (
        <div key={data.id} className="flex border my-2 p-3">
          <Image src={data.thumbnail} height={100} width={150} />
          <div className="flex flex-col pl-5">
            <h1 className="font-medium text-xl mb-2">{data.title}</h1>
            <h1 className="font-normal text-lg mb-2">{data.describtion}</h1>
            <h1 className="font-normal text-lg mb-2">{data.category}</h1>

          </div>
        </div>
      ))}
    </div>
  );
}

export default CartPage;
