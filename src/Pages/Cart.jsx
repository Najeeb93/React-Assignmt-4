import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Image } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

function CartPage() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="contianer mx-auto my-5">
      <h1 className="font-medium text-3xl underline">Cart Items</h1>
      <div className="flex gap-5">
        <div className="flex-grow flex flex-col border p-4 justify-center items-center">
        <h1>Total Quantity</h1>
        </div>
        <div className="flex-grow flex flex-col border p-4 justify-center items-center">
        <h1>Total Amount</h1>
        </div>
        <div className="flex-grow flex flex-col border p-4 justify-center items-center">
        <h1>Checkout</h1>
        </div>

      </div>
      {cartItems.map((data) => (
        <div key={data.id} className="flex border items-center my-2 p-3">
          <Image src={data.thumbnail} height={100} width={250} />
          <div className="flex flex-col pl-5">
            <h1 className="font-medium text-xl mb-2">{data.title} {`(${data.category})`}</h1>
            <h1 className="font-normal text-lg mb-2">{data.description}</h1>
            <h1 className="font-normal text-lg mb-2">Price : {data.price}</h1>

            <div className="flex gap-3 items-center">
                <PlusOutlined className="bg-blue-400 p-2 rounded-full text-white cursor-pointer"/>
                <h1 className="text-xl">{data.quantity}</h1>
                <MinusOutlined
                disabled={data.quantity <= 1}
                 className="bg-red-400 p-2 rounded-full text-white cursor-pointer"/>
            </div>
            <button className="w-40 my-4">Remove Item</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartPage;
