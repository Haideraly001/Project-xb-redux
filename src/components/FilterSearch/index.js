import React, { useEffect, useState } from 'react'

const FilterSearch = () => {

  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState(null)
  const [searchParam, setSearchParam] = useState([])
  const [filterUser, setFilterUser] = useState([])


  const handleInput = (e) => {
    const query = e.target.value.toLowerCase()
    console.log("query", query);

    setSearchParam(query)

    if (query.length) {
      const filterData = user.filter((userData) => userData.toLowerCase().includes(query))
      setFilterUser(filterData)
    } else {
      setFilterUser([])
    }

  }


  async function FilterFetchUser() {
    try {
      setLoading(false)
      const resp = await fetch(`https://dummyjson.com/users`)
      const data = await resp.json()
      console.log(data.users.map((item) => item.firstName));
      setUser(data.users.map((item) => item.firstName))
      setLoading(true)
    } catch (e) {
      setIsError(e.messege)
    }
  }

  useEffect(() => {
    FilterFetchUser()
  }, [])


  return (
    <div>
      <h1>Filter Search with Input</h1>
      <input type="text" placeholder='Enter the User' value={searchParam} onChange={handleInput} className='border px-2' />
      {loading && (
        <div>
          {filterUser.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      )}
      {isError && <div> {isError} </div>}
      {loading === false && (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default FilterSearch
