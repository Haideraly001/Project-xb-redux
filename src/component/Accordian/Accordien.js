import React, { useState } from 'react'
import accordionData from './AccordienData'

const Accordien = () => {
  const [accData, setAccData] = useState(false)
  const [active, setActive] = useState(null)


  const toggleEvent = () => {
    setAccData(!accData)
    setActive(true)
  }

  return (
    <div className='flex justify-center m-20'>
      <div className='max-w-xl text-center flex-col justify-center mx-10 p-9 items-center bg-green-500 border-none rounded-md w-[600px]' >
        <div className='flex gap-10 w-full justify-center'>
          <div className=' bg-green-800 flex justify-center items-center text-white text-lg px-4 py-1 border-none rounded-md'>All </div>
          <div className='bg-green-800 flex justify-center items-center text-white text-lg px-4 py-1 border-none rounded-md'>once </div>
        </div>

        {/* // Accordian */}

        {accordionData.map((infoData, keys) => (
          <div key={infoData.title} className="border w-full mt-3 p-3 items-start rounded-md">
            <div key={infoData.title} className='text-2xl text-yellow-300 text-start' onClick={() => toggleEvent()}>{infoData.title}
              <span>{accData ? "-" : "+"}</span>
            </div>

            {
              accData && (
                <div className='text-lg text-white text-start'>{infoData.content}</div>
              )}
          </div>
        ))}

      </div>
    </div >
  )
}

export default Accordien
