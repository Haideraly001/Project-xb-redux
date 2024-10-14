import React from 'react'

const ButtonCallback = ({ age, salary, children, onClick }) => {

  console.log({ children });

  return (
    <div>
      <hr />
      <button onClick={onClick}>
        {children}
      </button>
      <h2>{age}</h2>
      <h3>{salary}</h3>
    </div>
  )
}

export default ButtonCallback
