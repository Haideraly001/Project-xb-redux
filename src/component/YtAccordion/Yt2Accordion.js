import React, { useState } from 'react'
import "./style.css"
import data from './data'

const YtAccordion2 = () => {
  const [isSelect, setIsSelect] = useState(null)
  const [enableMultiSelector, setEnableMultiSelector] = useState(false)
  const [multipule, setMultipule] = useState([])

  const handleSingleSelection = (dataID) => {
    console.log(dataID)
    setIsSelect(dataID === isSelect ? null : dataID)
  }

  const handleMultiSelection = (dataID) => {
    const cpyMultipule = [...multipule]
    const findIndexCpyMultipule = cpyMultipule.indexOf(dataID)
    console.log(findIndexCpyMultipule);

  }


  return (
    <div>
      <h1>Accordion</h1>
      <button onClick={() => setEnableMultiSelector(!enableMultiSelector)}>Enable MultiSelector</button>
      <div className="accordion">
        {data && data.length > 0 ?
          data.map((item, index) =>
          (
            <div className='accordion-container' key={index}
              onClick={enableMultiSelector ?
                () => handleSingleSelection(item.id) :
                () => handleMultiSelection(item.id)}>

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

export default YtAccordion2
