import React, { useEffect, useState } from 'react'

const FilterBtn = ({ products, setFilterProducts, setIsTrue, setFilterInputs }) => {
  const [uniqueProducts, setUniqueProducts] = useState([])
  const [uniqueInput, setUniqueInput] = useState([])

  useEffect(() => {
    setUniqueProducts(
      [...new Set(products.map((item) => item.category))]
    )
  }, [products])

  const handleCategory = (ctg) => {
    setIsTrue(false)
    const filteredProducts = products.filter((product) => product.category === ctg)
    setFilterProducts(filteredProducts)
  }

  useEffect(() => {
    setUniqueInput([...new Set(products.map((items) => items.title))])
  }, [products])

  const handleInput = (input) => {
    setIsTrue(false)
    const filterInput = products.includes((item) => item.title === input)
    setFilterInputs(filterInput)
  }

  return (
    <div className='grid grid-cols-6'>
      <div className='p-1 m-4 gap-3 bg-blue-900 text-white font-semibold rounded-md' onClick={() => setIsTrue(true)}>All</div>


      {uniqueProducts.map((item, index) => (

        <div className='p-1 m-4 gap-3 bg-green-900 text-white font-semibold rounded-md' key={index} onClick={() => handleCategory(item)}>
          {item}
        </div>
      ))}
      <input type="text" onChange={(e) => handleInput(e.target.value)} className='w-50 h-10 border border-gray-950' />
    </div>


  )
}

export default FilterBtn
