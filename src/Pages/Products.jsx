import axios from "axios";
import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1>Products</h1>
    </div>
  );
}

export default Products;
