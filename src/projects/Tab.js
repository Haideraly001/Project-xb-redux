import React, { useState } from 'react'

const Tab = () => {
  const [tabData, setTabData] = useState(null)

  const Data = [
    {
      id: 1,
      name: "Haider",
      professtion: "Front-End",
    },
    {
      id: 2,
      name: "mySelf",
      professtion: "Software Enginner"
    },
    {
      id: 3,
      name: "Ali",
      professtion: "MERN Stack devloper"
    }
  ]

  const handleTab = (id) => {
    setTabData(tabData === id ? null : id)
  }

  return (
    <div>
      <h2>Tab's</h2>
      {Data.map((tab) => (
        <div key={tab.id} >
          <h2 onClick={() => handleTab(tab.id)}>{tab.name}</h2>
          {tabData === tab.id && (
            <h4>{tab.professtion}</h4>
          )}
        </div>

      ))}
    </div>
  )
}

export default Tab
