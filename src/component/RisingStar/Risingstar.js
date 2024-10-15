import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Risingstar = ({ maxRating }) => {

  const [star, setStar] = useState(0)
  const [hover, setHover] = useState(0)

  const handleClick = (index) => {
    setStar(index + 1)
    console.log(index + 1);

  }

  const handleMouseHover = (index) => {
    setHover(index + 1)
    console.log(index + 1);
  }

  const handleMouseLeave = () => {
    setHover(0)
    console.log(0);

  }



  return (
    <div className="flex flex-col items-center border m-4 p-4">
      <h3 className="text-4xl mb-4">Rising Star</h3>
      <div className="flex space-x-2">
        {
          [...Array(maxRating)].map((_, index) => {
            return <FontAwesomeIcon icon={faStar}
              key={index}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseHover(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              size='1x'
              className={` cursor-pointer ${(hover || star) > index ? 'text-yellow-500' : 'text-gray'}`}
            />
          })
        }

      </div>
    </div>
  )
}

export default Risingstar
