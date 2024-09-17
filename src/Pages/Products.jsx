import axios from "axios";
import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
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
  return (
    <div className="container mx-auto">{
        loading ? (
        <h1 className="text-center text-3xl">Loading...</h1>
         ) : (
        <h1 className="text-center text-3xl">Data Fetched Succesfully</h1>
    )}

    </div>
  );
}

export default Products;
