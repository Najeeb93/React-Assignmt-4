import { useEffect, useState } from "react";

function Pagination() {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(20);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      .then((res) => res.json())
      .then((res)=> {
        setProducts(res.products);
        setTotal(res.total);
      })
  }, []);
  console.log('products-->', products);
  console.log('total-->', total);
  
  return (
    <div>
      <h1 className="font-medium text-3xl underline">
        Pagination in React Ecommerce
      </h1>
    </div>
  );
}

export default Pagination;
