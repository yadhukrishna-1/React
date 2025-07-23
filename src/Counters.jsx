import React, { useEffect, useState } from 'react'

const Counters = () => {

    const [count, setCount] = useState(0);

    // useEffect runs after render
    useEffect(()=> {console.log(`Counter updated to: ${count}`);
    document.title = `count : ${count}` ;
    } ,[10]); // dependency array - runs only when count changes


  return (
    <div>
      <h2>counter : {count}</h2>

      <button onClick={()=> setCount(count+1)}>Increment</button>
    </div>
  )
}

export default Counters
