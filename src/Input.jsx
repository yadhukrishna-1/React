import React, { useState } from 'react'

const Input = () => {

const [word, setWord] = useState("")
    
  return (
    <div>
      <h1>Input Data</h1>

      <input type="text"

      onChange={(e) => setWord(e.target.value)}
      placeholder='type something....' />

      <p>{word}</p>
    </div>
  )
}

export default Input
