import React, { useEffect, useState } from 'react'

const FilterBtn = ({ products, setFilterProducts, setIsTrue }) => {
  const [uniqueProducts, setUniqueProducts] = useState([])

  useEffect(() => {
    setUniqueProducts(
      [...new Set(products.map((item) => item.category))]
    )
  }, [products])

  const handleCategory = (ctg) => {
    setIsTrue(false)
    const filteredProducts = products.filter((product) => product.category === ctg)
    setFilterProducts(filteredProducts)
    console.log(filteredProducts);
  }

  return (
    <div className='grid grid-cols-6'>
      <div className='p-1 m-4 gap-3 bg-blue-900 text-white font-semibold rounded-md' onClick={() => setIsTrue(true)}>All</div>


      {uniqueProducts.map((item, index) => (

        <div className='p-1 m-4 gap-3 bg-green-900 text-white font-semibold rounded-md' key={index} onClick={() => handleCategory(item)}>
          {item}
        </div>
      ))}
    </div>


  )
}

export default FilterBtn
