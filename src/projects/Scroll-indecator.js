import React, { useState, useEffect } from 'react'
import "../style/scrollnav.css"

const ScrollIndecator = ({ url }) => {
  const [isdata, setData] = useState([])
  const [isError, setIsError] = useState("")
  const [loading, setIsLoading] = useState(false)
  const [isPercentage, setIsPercentage] = useState(0)

  async function fetchProducts(url) {
    try {
      setIsLoading(true)
      const resp = await fetch(url)
      const data = await resp.json()

      if (data.products.length > 0 && data.products) {
        setData(data.products)
        setIsLoading(false)
      }

    }
    catch (e) {
      setIsError(e.message)
    }
  }


  useEffect(() => {
    fetchProducts(url)
  }, [url])

  const handleScrollPage = () => {
    console.log(document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight);

    const handleScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    setIsPercentage((handleScroll / height) * 100)

  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPage)

    return () => {
      window.removeEventListener("scroll", () => { })
    }
  })


  console.log(isPercentage);



  return (
    <div className='top-progress-bar'>
      <h1 className='text-2xl'>Scroll Indecator</h1>
      <div className='progress-bar'>
        <div className='current-scroll-bar' style={{ width: `${isPercentage}%` }}></div>
      </div>
      <div className='data-container'>
        {
          isdata.map((item) => (
            <div key={item.id}>
              {item.title}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ScrollIndecator
