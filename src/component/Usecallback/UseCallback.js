import React, { useCallback, useState } from 'react'
import ButtonCallback from './ButtonCallback'


const UseCallback = () => {

  const [age, setAge] = useState(24)
  const [salary, setSalary] = useState(15000)

  const myAge = useCallback(() => {
    setAge((prevAge) => prevAge + 1)
    console.log(age + 1);
  }, [age])

  const mySalary = useCallback(() => {
    setSalary((prevSalary) => prevSalary)
    console.log('New Salary Set', salary);
  }, [salary])


  return (
    <div>
      <h2>Use CallBack practice</h2>
      <button onClick={() => myAge(age)} className='border'>age: {age}</button>
      <br />
      <button onClick={mySalary} className='border'>salary: {salary}</button>
      <ButtonCallback age={age} salary={salary} />
    </div>
  )
}

export default UseCallback
