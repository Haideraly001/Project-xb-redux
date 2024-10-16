import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Risingstar = ({ maxRating }) => {

  const [star, setStar] = useState(0)
  const [hover, setHover] = useState(0)

  const handleMouseEnter = (handleIndex) => {
    setHover(handleIndex + 1)
    console.log(handleIndex + 1);

  }

  const handleMouseLeave = (handleIndex) => {
    setHover(0)
    console.log(0);

  }

  const handleClick = (handleIndex) => {
    setStar(handleIndex + 1)
    console.log(handleIndex + 1);
  }

  return (
    <div>
      <h1>Rising Star</h1>
      {
        [...Array(maxRating)].map((_, index) => (
          <FontAwesomeIcon
            icon={faStar}
            key={index}
            className={` cursor-pointer ${(star || hover) > index ? 'text-yellow-300' : "text-slate-300"}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            onClick={() => handleClick(index)}
            style={{ fontSize: 40 }}
          />
        ))

      }
    </div>
  )
}

export default Risingstar
