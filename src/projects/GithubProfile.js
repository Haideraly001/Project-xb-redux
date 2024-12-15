import React, { useEffect, useState } from 'react'

const GithubProfile = () => {
  const [user, setUser] = useState("")
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)

  async function fetchGitUserData() {
    setLoading(false)
    const response = await fetch(`https://api.github.com/users/${user}`)
    const data = await response.json()
    console.log(data);
    setUserData(data)
    setLoading(true)
  }

  useEffect(() => {
    fetchGitUserData()
  },)

  const handleInput = (e) => {
    e.preventDefault()
    console.log(user);
    fetchGitUserData()
  }

  const { avatar_url,
    // bio, created_at
  } = userData

  return (
    <div className='w-full'>
      <h2>GitHub Profile </h2>
      <div className='flex justify-center'>
        < input type="text" value={user} className='border px-2' placeholder='Enter UserName' onChange={(e) => setUser(e.target.value)} />
        <button button onClick={handleInput} > Search</button >
      </div >
      {loading && (
        <div className='flex justify-center border p-4'>
          <img src={avatar_url} width={100} alt="bio" />
        </div>

      )}

    </div >
  )
}

export default GithubProfile
