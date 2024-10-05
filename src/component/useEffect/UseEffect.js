import React, { useEffect, useState } from 'react'

const UseEffect = () => {
  const [count, setCount] = useState(0)
  const [isCount, setIsCount] = useState(0)

  useEffect(() => {
    console.log("useEffect is called")
  }, [count])


  useEffect(() => {
    // alert("isCount is Call")
    fetchUrl()
  }, [isCount])

  const fetchUrl = () => {
    fetch("https://dummyjson.com/quotes")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.quotes[0].quote)
        const randomQoutes = data.quotes[Math.floor(Math.random() * data.quotes.length)].quote
        alert(randomQoutes);
      })
      .catch((err) => console.error(err)
      );
  }

  return (
    <div>
      <h1 className='text-3xl'>use Effect Hook Pracitce </h1>
      <h2 className='text-2xl'> count {count} and this is Is Count {isCount}</h2>
      <button className='text-1xl border-2 border-red-900 rounded-md p-3 mt-3' onClick={() => setCount(count + 1)}>Click Me</button>
      <button className='text-1xl border-2 border-red-900 rounded-md p-3 mt-3' onClick={() => setIsCount(isCount + 1)}>Click Me for isCount</button>

    </div >
  )
}

export default UseEffect
