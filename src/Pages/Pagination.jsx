import { useEffect, useState } from "react";

function Pagination() {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10&skip=10&select=title,price")
      .then((res) => res.json())
      .then(console.log);
  }, []);
  return (
    <div>
      <h1 className="font-medium text-3xl underline">
        Pagination in React Ecommerce
      </h1>
    </div>
  );
}

export default Pagination;
