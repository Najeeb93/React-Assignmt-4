import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, SetCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products);
        setLoading(false)
      })
      
      .catch((error) => {
        console.log(error);
        setLoading(false);
        
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => {
        SetCategories(res.data)
        setLoading(false)
      })
      
      .catch((error) => {
        console.log(error);
        setLoading(false);
        
      });
  }, []);
  
  
  return (
    <div className="container mx-auto">{
        loading ? (
        <h1 className="text-center text-3xl">Loading...</h1>
         ) : (
            <div className='flex flex-wrap -m-4 my-4'>
        {products.map((item)=> (<ProductCard item={item} key={item.id}/>))}</div>
    )}

    </div>
  );
}

export default Products;
