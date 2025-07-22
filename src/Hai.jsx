import React, { useState} from 'react'

const Hai = () => {

    const [name, setName] = useState("yadhu")
    
    const changeName = () => {
        setName("krishna")
    }
  return (
    <div>
        <p>{name}</p>
        {/* inline */}
        {/* <button onClick={() => setName("krishna")}>Click me</button> */}
    
        {/* normal function */}
        <button onClick={changeName}>Change to </button>
    </div>
  )
}

export default Hai
