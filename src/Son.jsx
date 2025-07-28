import React, { useContext } from 'react'
import { MyContext } from './UserContext'
import Dad from './Dad'



const Son = () => {

    const user = useContext(MyContext)

  return (
    <div>
      <h3>User info</h3>
      <p>Name: {user.name}</p>
      <p>Name: {user.role}</p>
    </div>
  )
}

export default Son
