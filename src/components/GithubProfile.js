import React, { useEffect, useState } from 'react'

const GithubProfile = () => {
  const [isInput, setIsInput] = useState("")
  const [isUserData, setIsUserData] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  async function fetchProfile() {
    try {
      setIsLoading(false)
      const resp = await fetch(`https://api.github.com/users/${isInput}`)
      const data = await resp.json()
      setIsUserData(data)
      console.log(data);
      setIsLoading(true)
    } catch (e) {
      console.log("Error", e.message)
    }

  }

  useEffect(() => {
    fetchProfile()
  }, [])

  const handleInput = (e) => {
    setIsInput(e.target.value)
  }

  const handleButton = () => {
    fetchProfile()
    console.log(isInput);
  }

  const { avatar_url, name, html_url, bio, created_at, public_repos } = isUserData

  const newData = new Date(created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  })


  return (
    <div>
      <h1>Github Profile Finder</h1>
      <div className='flex justify-center'>
        <input type="text" value={isInput} onChange={handleInput} className='border px-3' placeholder='Enter your Profile' />
        <button className='bg-green-600 px-4 text-white' onClick={handleButton}>Enter</button>
      </div>
      {isUserData && isLoading && (
        <div className='border p-4 mx-10 my-6 text-center'>
          <img src={avatar_url} alt="" width={50} className='flex justify-center ' />
          <div className='border flex'>
            <br />
            {name}
            <br />
            <a href={html_url}>Github Link</a>
            <br />
            BIO :{bio}
            <br />
            CREATED AT: {newData}
            <br />
            public_repos:  {public_repos}
          </div>
        </div>
      )}

    </div>
  )
}

export default GithubProfile
