import React, { useEffect, useState } from 'react'

const SearchFilter2 = () => {

  const [isUser, setIsUser] = useState([])
  const [isInput, setIsInput] = useState("")
  const [isError, setIsError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isQuery, setIsQuery] = useState([])

  async function fetchUser() {
    try {
      setIsLoading(false)
      const resp = await fetch('https://dummyjson.com/users')
      const data = await resp.json()
      console.log(data.users.map((item) => item.firstName))
      setIsUser(data.users.map((item) => item.firstName))
      setIsLoading(true)
    }
    catch (error) {
      setIsError(error.message)
      setIsLoading(false)
    }
  }

  const handleInput = (e) => {
    const query = e.target.value.toLowerCase()
    console.log("query", query);
    setIsInput(query)

    if (query.length > 0) {
      const filterUser = isUser.filter((filteredUser) => filteredUser.toLowerCase().includes(query))
      setIsQuery(filterUser)
      console.log("filter", isQuery);
    } else {
      setIsQuery([])
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div>
      <div>
        <h2>Search Filter 2</h2>
        <input type="text" placeholder='Please Enter your Name' className='px-3 border text-1xl' value={isInput} onChange={handleInput} />
      </div>
      <div>
        {isLoading ? (
          <div>
            {isQuery.map((item) => (
              <div className='border'>{item}</div>
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
        {isError && (
          <div>
            {Error}
          </div>
        )}
      </div>

    </div>
  )
}

export default SearchFilter2
