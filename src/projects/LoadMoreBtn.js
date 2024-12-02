import React, { useEffect, useState } from 'react'

const LoadMoreBtn = () => {

  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)
  console.log(count);


  async function fetchProduct() {
    setLoading(true)


    try {
      const data = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
      const result = await data.json()
      console.log(result);

      if (result && result.products && result.products.length) {
        // setProducts(result.products)
        setProducts((prev) => [...prev, ...result.products])
        setLoading(false)
      }
    } catch (e) {
      console.log(e);

    } finally {
      setLoading(false);
    }

  }

  useEffect(() => {
    fetchProduct()
  }, [count])

  if (loading === true) {
    return <div>Loading...</div>
  }


  return (
    <div>
      <h2>Load More Button</h2>
      <div className='grid grid-cols-4 border p-4'>
        {products.length ? (
          products.map((item) => (
            <div key={item.id} className='border p-4'>
              <img src={item.thumbnail} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.price}</p>
            </div>
          ))
        ) : null}
      </div>

      <button className='border' onClick={() => setCount(count + 1)}>Load more product</button>
    </div>
  )
}

export default LoadMoreBtn
