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
    <div className="container mx-auto">


    </div>
  );
}

export default Products;
