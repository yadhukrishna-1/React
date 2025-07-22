import React, { useState } from 'react'

const SimpleLogin = () => {
 
    const [name, setName] = useState("")
    const [password, setpassword ] = useState("")

  return (
    <div>
      <input type="text"
      onChange={(e) => setName(e.target.value)} 
      placeholder='User Name'/>
<br />
<br />
      <input type="password"
      onChange={(e) => setpassword (e.target.value)}
      placeholder='Enter password' />

      <p>{name}</p>
      <p>{password}</p>
    </div>
  )
}

export default SimpleLogin
