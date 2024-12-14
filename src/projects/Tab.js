import React, { useState } from 'react'

const Tab = () => {
  const [tabActice, isTabActive] = useState(1)
  const Data = [
    {
      id: 1,
      Name: "Haider Aly",
      Dec: "Front-End Developer"
    },
    {
      id: 2,
      Name: "Professionl Stack",
      Dec: "MERN Stack"
    },
    {
      id: 35,
      Name: "Entistist",
      Dec: "Ai / ML Python"
    }

  ]

  const handleTab = (idx) => {
    isTabActive(tabActice === idx ? null : idx)
  }
  return (
    <div>
      <h2>single Page Tab's</h2>
      {Data.map((item) => (
        <div key={item.id} className='flex w-full'>
          <div className='border w-6/12'>
            <h1 className='text-2xl' onClick={() => handleTab(item.id)}>{item.Name}</h1>
          </div>

        </div>

      ))}
      <div className='w-full '>
        {tabActice !== null && (
          <div className='m-4 border flex justify-center items-center'> {Data.find((item) => item.id === tabActice).Dec}</div>
        )}
      </div>
    </div>
  )
}

export default Tab
