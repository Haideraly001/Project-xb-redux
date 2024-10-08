import React, { useState } from 'react'
import "./style.css"
import data from './data'

const YtAccordion = () => {
  const [isSelect, setIsSelect] = useState(null)

  const handleSingleSelection = (dataID) => {
    console.log(dataID)
    setIsSelect(dataID)
  }


  return (
    <div>
      <h1>Accordion</h1>
      <div className="accordion">
        {data && data.length > 0 ?
          data.map((item, index) =>
          (
            <div className='accordion-container' key={index} onClick={() => handleSingleSelection(item.id)}>
              <h1 >{item.question} <span>{isSelect === item.id ? "+" : "-"}</span></h1>
              {isSelect === item.id ? (
                <p>{item.Answer}</p>
              ) : null
              }

            </div>
          )
          ) : (
            <div>no Data is here</div>
          )}

      </div>
    </div>
  )
}

export default YtAccordion
