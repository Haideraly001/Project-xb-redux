import React, { useCallback, useState } from 'react'

const PassGen = () => {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenretor = useCallback(() => {
    let password = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
    if (numberAllow) {
      str += '0123456789'
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+"
    }

    for (let i = 1; i < array.length; i++) {
      let char = Math.floor(Math.random * str.length)
      password += str.charAt(char)
    }

    setPassword(password)


  }, [length, numberAllow, charAllowed, setPassword])


  return (
    <div className='w-full h-screen bg-blue-900'>
      <h2 className='text-4xl text-center mt-4 font-semibold text-white'>Password  Generator</h2>

    </div>
  )
}

export default PassGen

