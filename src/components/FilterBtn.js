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
    <div className='grid grid-cols-4'>
      {uniqueProducts.map((item, index) => (
        <div className='p-2 m-4 gap-3 bg-green-400 rounded-md' key={index} onClick={() => handleCategory(item)}>
          {item}
        </div>
      ))}

    </div >
  )
}

export default FilterBtn
