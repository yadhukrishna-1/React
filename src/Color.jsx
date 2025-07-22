import React,{ useState } from 'react'


const Color = () => {

const [color , changeColor] = useState('Red')

const toggleColor = ()=>{
    changeColor(color === 'red' ? 'blue': 'red')
}
  return (
    <div>
      <p>{color}</p>

      <button onClick={toggleColor}>Click me</button>
    </div>
  )
}

export default Color
