import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Risingstar = ({ maxRating = 5 }) => {

  const [star, setStar] = useState(0)
  const [hover, setHover] = useState(0)


  const handleClick = (getCurrentIndex) => {
    console.log(getCurrentIndex);
    setStar(getCurrentIndex + 1)
  }

  const handleMouseLeave = (getCurrentIndex) => {
    console.log(getCurrentIndex);
    setHover(0)
  }

  const handleMouseEnter = (getCurrentIndex) => {
    console.log(getCurrentIndex);
    setHover(getCurrentIndex + 1)
  }

  return (
    <div className="flex flex-col items-center border m-4 p-4">
      <h3 className="text-4xl mb-4">Rising Star</h3>
      <div className="flex space-x-2">
        {
          [...Array(maxRating)].map((_, index) => {
            return <FontAwesomeIcon
              key={index}
              icon={faStar}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              size="2x"
              className={`cursor-pointer ${(hover || star) > index ? 'text-yellow-500' : 'text-gray-400'
                }`}
            />
          })
        }
      </div>
    </div>
  )
}

export default Risingstar
