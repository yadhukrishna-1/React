import { useState } from 'react'
import "./App.css"
import Hai from './Hai'
import Color from './Color'
import Counter from './Counter'
import Toggle from './Toggle'
import ShowHide from './ShowHide'
import LikeButton from './LikeButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <LikeButton/>
    <ShowHide/>
    <Toggle/>
    <Counter/>
    <Color/>
    </div>
  )
}

export default App
