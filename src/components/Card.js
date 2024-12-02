import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../app/cartslice';

const Card = () => {

  const cart = useSelector((state) => state.cart.items);
  console.log("Cart state:", cart);


  const dispatch = useDispatch()

  const [isPlus, setIsPlus] = useState("")

  const handleProduct = (value, id) => {
    setIsPlus((plusValue) => plusValue + value)
  }

  const handleRemove = (id) => {
    dispatch(removeItem(id))
  }




  return (
    <div>
      <h2>Card's</h2>

      <div className='flex'>

        {cart.map((item,) => (
          <div class=" gap-5 bg-white border p-2 m-2 w-2/5 border-gray-200 rounded-lg shadow  dark:border-gray-700">
            <a href="#">
              <img class="rounded-t-lg justify-center" src={item.image} alt="" width={200} />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class=" text-2xl font-bold tracking-tight text-gray-900 ">{item.title}</h5>
              </a>
              <div className='flex gap-4 justify-center mt-2'>
                <p class=" font-normal text-gray-700 ">RS.{item.price}</p>
                <a class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => {
                    handleProduct(item.price, item.id)
                  }}
                >

                  Plus Value
                </a>
                <a class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => {

                    handleRemove(item.id)
                  }}
                >Remove Value</a>
              </div>
              <h1>{isPlus}</h1>
            </div>
          </div>
        ))}
      </div>

    </div>

  )
}

export default Card
