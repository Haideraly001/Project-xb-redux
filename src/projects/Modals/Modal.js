import React, { useRef } from 'react'

const Modal = ({ isClose, children }) => {

  const handleClose = () => {
    isClose();
  }

  const Refwrap = useRef()

  const handlewraper = (e) => {
    if (Refwrap.current === e.target) {
      isClose()
    }
  }

  return (

    <div ref={Refwrap} onClick={handlewraper} className='inset-0 fixed bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
      <div className='bg-white w-3/6 h-3/6'>
        <div className='place-self-end text-2xl curser-pointer' onClick={handleClose}>X</div>
        {children}
      </div>
    </div>
  )
}

export default Modal
