import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Button, Image } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

function CartPage() {
  const { cartItems, removeItemCart, addItemToCart, lessQuanityFromCart } = useContext(CartContext);

  const totalAmount = cartItems.reduce((total, obj)=> total + obj.quantity * obj.price , 0)
  const totalQuantity = cartItems.reduce((total, obj)=> total + obj.quantity , 0)

  return (
    <div className="contianer mx-auto my-5">
      <h1 className="font-medium text-3xl underline">Cart Items</h1>
      <div className="flex gap-5 my-2">
        <div className="flex-grow flex flex-col border p-4 justify-center items-center">
        <h1 className="text-xl">Total Quantity</h1>
        <h1 className="text-xl">{totalQuantity}</h1>
        </div>
        <div className="flex-grow flex flex-col border p-4 justify-center items-center">
        <h1 className="text-xl">Total Amount</h1>
        <h1 className="text-xl">{Math.round(totalAmount)}</h1>
        </div>
        <div className="flex-grow flex flex-col border p-4 justify-center items-center">
        <h1 className="text-xl">Checkout</h1>
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
              <Button  onClick={()=> addItemToCart(data)} icon={<PlusOutlined/>}>

              </Button>
                
                <h1 className="text-xl">{data.quantity}</h1>
                <Button danger
                onClick={() => lessQuanityFromCart(data.id)}
                 icon={<MinusOutlined/>} disabled={data.quantity === 1} >
                  
                  </Button> 

                
                
            </div>
            <button onClick={()=> removeItemCart(data.id)} className="w-40 my-4">Remove item</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartPage;
