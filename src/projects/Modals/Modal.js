import React from 'react'

const Modal = ({ isVisible, onClose }) => {

  if (!isVisible) return null

  const handleWrapper = (e) => {
    if (e.target.id === "wrapper") {
      return onClose()
    }
  }

  return (
    <div className='fixed inset-0 bg-blue-950 bg-opacity-10 backdrop-blur-sm flex justify-center items-center' id='wrapper' onClick={handleWrapper}>

      <div className=' w-3/6 h-4/6'>
        <h1 className='place-self-end' onClick={onClose}>X</h1>
        <h2 className='bg-white'>Modal</h2>
      </div>
    </div>
  )
}

export default Modal
