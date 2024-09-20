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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4 gap-3 my-10">
        {
            products.map((data)=> 
            <div  key={data.id} className="border shadow flex justify-center flex-col items-center">
                <img src={data.thumbnail} height={200} width={200}/>
                <div className="flex justify-between p-2 w-full">
                <h5 className="font-semibold">{data.title}</h5>
                <h5 className="font-semibold">{data.price}</h5>
                </div>
            </div> 
            )
        }
      </div>
    </div>
  );
}

export default Pagination;
