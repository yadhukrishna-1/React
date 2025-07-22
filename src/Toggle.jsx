import React, { useState } from 'react'

const Toggle = () => {

    const [status , setStatus] = useState("OFF")
    const toggleStatus= () => {
        setStatus(status === "OFF"  ? "ON" : "OFF")
    }
  return (
    <div>
        <h1>Status : {status}</h1>
        <button onClick={toggleStatus}>Toggle</button>
    </div>
  )
}

export default Toggle
