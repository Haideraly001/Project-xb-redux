import React, { useState } from 'react'
import "./App.css"
import InputBox from './component/CustomeHook/InputBox'
import UseCurrencyuser from './hooks/UseCurrencyuser'

const App = () => {

  const [ammount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("pkr")
  const [convertAmount, setConvertAmount] = useState(0)

  const currencyinfo = UseCurrencyuser(from)
  const option = object.key(currencyinfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertAmount(ammount)
    setAmount(convertAmount)
  }

  const convert = () => {
    setConvertAmount(ammount * currencyinfo[to])
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/28974077/pexels-photo-28974077/free-photo-of-close-up-of-two-polar-bears-on-rocky-terrain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()

            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={ammount}
                currencyOptions={option}
                onCurrencyChange={(currency) => {
                  setAmount(ammount)
                }}

              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"

              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"

              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
