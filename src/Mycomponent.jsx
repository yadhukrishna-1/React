import React, { useEffect } from 'react'

const Mycomponent = () => {
    
    useEffect(() => {console.log("component mounted or updated");}
    , [] 
    )


  return (
    <div>
      <h1>Hello react</h1>
    </div>
  )
}

export default Mycomponent
