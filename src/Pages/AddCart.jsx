

import { useContext, useEffect, useState } from "react";
import { Badge, Pagination } from 'antd';
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";


function AddCart() {

  const {cartItems, addItemToCart, isItemAdded} = useContext(CartContext);
  console.log('cartItems-->', cartItems);
  
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(20);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      .then((res) => res.json())
      .then((res)=> {
        console.log('respones-->', res);
        
        setProducts(res.products);
        setTotal(res.total);
        setLoading(false);
      })
  }, [limit, skip]);
  

  // console.log('products length=>', products.length, total );
  
  return (
    <div className="contianer mx-auto">
        <div className="flex justify-between my-5">

      <h1 className="font-medium text-3xl underline">
        Add to Cart in React Ecommerce
      </h1>
      <Link to={'/cart'} >
      <Badge count={cartItems.length}>
      <ShoppingCartOutlined style={{fontSize: 40}}/>
      </Badge>
      </Link>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4 gap-3 my-10">
          { loading ? <h1 className="text-center my-2">Loading... </h1> : null} 
        {
            products.map((data)=> 
            <div  key={data.id} className="border shadow flex justify-center flex-col items-center">
                <img src={data.thumbnail} height={200} width={200}/>
                <div className="flex justify-between p-2 w-full">
                <h5 className="font-semibold">{data.title}</h5>
                <h5 className="font-semibold">{data.price}</h5>
                </div>
                <div>
                    <button className="bg-red-300 px-5 py-2 rounded w-full m-2"
                    onClick={()=> addItemToCart(data)}>
                      {isItemAdded(data.id)
                       ? `Added ${isItemAdded(data.id).quantity}`
                        : `Add to Cart`}</button>
                </div>
            </div> 
            )}
      </div>
             <Pagination 
             onChange={(num)=> setSkip((num - 1 ) * 20)}
             defaultCurrent={1} total={total} pageSize={limit} />
    </div>
  );
}

export default AddCart;
