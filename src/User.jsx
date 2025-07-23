import React, { useEffect, useState } from 'react'

const User = () => {

    const [users, setUser] = useState([])

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUser(json))
},[])

  return (
    <div>
      <ul>
        {users.map(bla => (
            <li key={bla.id}> {bla.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default User
