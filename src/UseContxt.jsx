import React from 'react'
import { Mycontext } from './CreateContxt'
import { useContext } from 'react'



const UseContxt = () => {
  const value = useContext(Mycontext)
  return (
    <div>
      <h2>{value}</h2>
    </div>
  )
}

export default UseContxt
