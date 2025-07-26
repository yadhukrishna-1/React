import React, { createContext } from 'react'
import Child from './Child';


export const Department = createContext();
const Parent = () => {
  return (
    <div>
      <Department.Provider value="EEE">
        <Child/>
      </Department.Provider>
    </div>
  )
}

export default Parent
