import React, { useEffect, useState } from 'react'

const LoadMoreBtn = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [count, setCount] = useState(0) //10 

  async function productsApiFunction() {
    setLoading(true)
    const resp = await fetch(`https://dummyjson.com/products?limit=10&skip=${count === 0 ? 0 : count * 10}`)
    const data = await resp.json()
    console.log(data.products);
    // setProducts(data.products)
    setProducts((prev) => [...prev, ...data.products]) // here need of chatgpt 
    setLoading(false)
  }

  const handleLoadMoreBtn = () => {
    setCount(count + 1)
  }
  console.log(count);


  useEffect(() => {
    productsApiFunction()
  }, [count])

  if (loading === true) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Load More Btn</h1>
      <div className='grid grid-cols-4 '>
        {products.length > 0 && (
          products.map((item) => (
            <div key={item.id} className='border m-2 p-3'>
              <img src={item.thumbnail} alt="item.title" />
              <h2>{item.title}</h2>
            </div>
          ))
        )}
      </div>
      <button className='border bg-slate-300 p-4 rounded-md' onClick={() => handleLoadMoreBtn()}>Load More Products</button>
    </div>
  )
}

export default LoadMoreBtn
