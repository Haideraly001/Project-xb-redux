import React, { useState } from 'react'
import Modal from './Modal'

const CModal1 = () => {
  const [isModal, setIsModal] = useState(false)
  const [isModal1, setIsModal1] = useState(false)
  const [isInput, setIsInput] = useState(
    {
      name: '',
      email: '',
    },
  )

  const handleInputName = (e) => {
    setIsInput({ ...isInput, name: e.target.value })
  }
  const handleInputEmail = (e) => {
    setIsInput({ ...isInput, email: e.target.value })
  }

  console.log("input", isInput);


  const handleModal = () => {
    setIsModal(!isModal)
  }

  return (
    <>
      <div>
        <h2>Model with Form</h2>
        <button onClick={() => handleModal()} className='bg-blue-700 hover:bg-blue-800 px-7 py-2 mt-5 text-lg mx-2 rounded-md text-white'>Text</button>
        <button onClick={() => setIsModal1(!isModal1)} className='bg-blue-700 hover:bg-blue-800 px-7 py-2 mt-5 text-lg mx-2 rounded-md text-white'>video</button>
        <button className='bg-blue-700 hover:bg-blue-800 px-7 py-2 mt-5 text-lg mx-2 rounded-md text-white'>input</button>
      </div>
      {isModal && (
        <Modal isClose={() => setIsModal(false)} >
          <h3 className='text-2xl'>Modal</h3>
          <p className='place-self-start'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam necessitatibus neque, harum voluptate illo accusamus fugiat porro, quod rem voluptatum veritatis voluptas, nesciunt eaque ea suscipit error temporibus mollitia a?</p>
        </Modal>
      )}
      {isModal1 && (
        <Modal isClose={() => setIsModal1(false)} >
          <h3 className='text-2xl'>Form</h3>
          <input type="Name" placeholder='Enter Name' value={isInput.name} onChange={handleInputName} className='p-2 w-96 h-10 rounded-md' />
          <input type="Email" placeholder='Enter Email' value={isInput.email} onChange={handleInputEmail} className='p-2 w-96 h-10 rounded-md' />
        </Modal>
      )}
    </>
  )
}

export default CModal1
