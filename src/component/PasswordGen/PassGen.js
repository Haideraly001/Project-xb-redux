import React, { useCallback, useEffect, useRef, useState } from 'react'

const PassGen = () => {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)


  const passwordGenretor = useCallback(() => {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
    let pass = ""

    if (numberAllow) {
      str += '0123456789'
    }
    if (charAllowed) {
      str += '!@#$%^&*()_+'
    }

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)


  }, [length, numberAllow, charAllowed])

  const copyPassword = useCallback(() => {
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenretor()
  }, [length, numberAllow, charAllowed, passwordGenretor])

  return (
    <>
      <div className="bg-gray-800 p-6 rounded-lg shadow-md max-w-lg mx-auto ">
        <h2 className="text-white text-center mb-4">Password generator</h2>
        <div className='flex items-center'>
          <input
            type="text"
            value={password}
            placeholder="Password"
            className="w-full px-4 py-2 text-gray-800 rounded-l-lg focus:outline-none"
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-2 gap-2 shrink-0 rounded-r-lg' onClick={() => copyPassword()}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2 mt-3'>
          <div className='flex items-cneter gap-x-1'>
            <input type="range"
              min={6}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label className='text-orange-400 '>Length :{length}</label>
          </div>
          <div className='flex items-cneter gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberAllow}
              id='numberInput'
              onChange={() => {
                setNumberAllow((prev) => !prev)
              }}

            />
            <label htmlFor="numberInput" className='text-orange-400'>Number</label>
          </div>
          <div className='flex items-cneter gap-x-1'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id='numberInput'
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}

            />
            <label htmlFor="numberInput" className='text-orange-400' >Charactor</label>
          </div>


        </div>
      </div>

    </>
  )
}

export default PassGen

