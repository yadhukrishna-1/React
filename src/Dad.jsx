import React from 'react'
import MyContext from './UserContext'
import Son from './Son';


export const Dad = () => {
  const user = {
    name: 'Megha',
    role: 'Admin'
  };
  return (
    <div>
      
      <MyContext.Provider value={user}>
        <Son />
      </MyContext.Provider>
      
    </div>
  )
}

export default Dad
