import React, { createContext } from 'react'
import UseContxt from './UseContxt';


export const Mycontext = createContext();

const CreateContxt = () => {
  return (
    <div>
      <Mycontext.Provider value='yadhu'>
        <UseContxt />
      </Mycontext.Provider>
    </div>
  )
}

export default CreateContxt
