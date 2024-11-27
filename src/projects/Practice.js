import React from 'react'

const Practice = () => {

  const data = {
    name: "John",
    age: 30,
    city: "New York",
    hobbies: ["reading", "swimming", "coding"],
  }

  const { name, age, city } = data

  const data2 = {
    user: name,
    userAge: age,
    usercity: city
  }

  const { user, userAge, usercity } = data2

  console.log(user, userAge, usercity);


  return (
    <div>
      <h2>Practice</h2>
    </div>
  )
}

export default Practice
