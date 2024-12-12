import React, { useEffect, useState } from 'react'
import "../style/scrollnav.css"

const ScrollIndecator = ({ url }) => {

  const [isScroll, setIsScroll] = useState(false)
  const [isData, setIsData] = useState([])
  const [isPercantage, setIsPercantage] = useState(0)


  async function handleApi(url) {
    try {
      setIsScroll(false)
      const resp = await fetch(url)
      const data = await resp.json()

      setIsData(data.products)
      setIsScroll(true)
    }
    catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    handleApi(url)
  }, [url])

  const handleScroll = () => {
    console.log(document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight);

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const heightScroll = document.body.scrollTop || document.documentElement.scrollTop;

    setIsPercantage((heightScroll / height) * 100)
    console.log(isPercantage);


  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", () => { })
    }
  })

  return (
    <div className='top-bar'>
      <div className="scroll-container">
        <div className="scroll-indicator" style={{ width: `${isPercantage}%` }}></div>
      </div>
      <div>
        <h2 className='text-2xl'>Scroll Indicator</h2>
        {!isScroll && <p>Loading...</p>}
        {
          isData.map((item) => (
            <div key={item.id}>
              <h3 className='text-black'>{item.title}</h3>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default ScrollIndecator
