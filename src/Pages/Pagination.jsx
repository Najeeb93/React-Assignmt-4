import { document } from "postcss";
import { useEffect, useState } from "react";
import { Pagination } from 'antd';

function PaginationProuct() {
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
  }, [limit]);
  
//   useEffect(()=>{
//     const handleScroll = ()=>{
//         if(window.innerHeight + document.documentElement.scrollTop == document.documentElement.offsetHeight)
//         {
//             setLimit(limit + 20)
//         }

//     };
//     window.addEventListener('scroll', handleScroll)
//   }, [limit, loading])
  console.log('products length=>', products.length, total );
  
  return (
    <div>
      <h1 className="font-medium text-3xl underline">
        Pagination in React Ecommerce
      </h1>
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
            </div> 
            )}
             <Pagination defaultCurrent={1} total={total} />
      </div>
    </div>
  );
}

export default PaginationProuct;
