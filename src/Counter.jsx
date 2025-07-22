import React, { useState } from 'react'

const Counter = () => {

const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Counter App</h1>
      <p>count: {count}</p>
      <button onClick={() => {setCount(count+1)}}>Increment</button>
      <button onClick={() => {setCount(count-1)}}>Decrement</button>
      <button onClick={()=> {setCount(0)}}>reset</button>
    </div>
  )
}

export default Counter
