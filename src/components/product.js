import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../app/slice'

const Product = () => {
  const [data, setData] = useState([])

  const productList = () => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(result => setData(result))
  }

  useEffect(() => {
    productList()
  }, [])

  console.log(data);

  const dispatch = useDispatch()

  const handleProduct = (product) => {
    dispatch(addItem(product))
  }



  return (
    <div>
      <h2>Products Dashboard</h2>
      <div className='grid grid-cols-4'>

        {data.map((item, index) => (
          <div class=" gap-5 bg-white border p-2 m-2 border-gray-200 rounded-lg shadow  dark:border-gray-700">
            <a href="#">
              <img class="rounded-t-lg item-center" src={item.image} alt="" width={200} />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class=" text-2xl font-bold tracking-tight text-gray-900 ">{item.title}</h5>
              </a>
              <div className='flex gap-4 justify-center mt-2'>
                <p class=" font-normal text-gray-700 ">RS.{item.price}</p>
                <a class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleProduct(item)}>
                  Add Cart
                </a>
              </div>

            </div>
          </div>
        ))}


      </div>

    </div>
  )
}

export default Product
