import React, { useState } from 'react'
import Modal from './Modal'

const CModal1 = () => {
  const [isModal, setIsModal] = useState(false)

  const handleModal = () => {
    setIsModal(true)
  }

  return (
    <div>
      <h1>Custome Modal one</h1>
      <div className='m-2'>
        <button className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 mx-2.5' onClick={() => handleModal()}>Text Modal</button>
        <button className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 mx-2.5'>Video</button>
        <button className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 mx-2.5'>Form</button>
      </div>
      <Modal isVisible={isModal} onClose={() => setIsModal(false)} />
    </div>
  )
}

export default CModal1
