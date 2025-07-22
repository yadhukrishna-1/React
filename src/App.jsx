import { useState } from 'react'
import "./App.css"
import Hai from './Hai'
import Color from './Color'
import Counter from './Counter'
import Toggle from './Toggle'
import ShowHide from './ShowHide'
import LikeButton from './LikeButton'
// 22-07-2025
import Input from './Input'
import SimpleLogin from './SimpleLogin'
import DataOnclick from "./DataOnclick"
import ProfileEditor from './ProfileEditor'
import TodoList from './TodoList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <LikeButton/>
    <ShowHide/>
    <Toggle/>
    <Counter/>
    <Color/> */}


{/* 22-07-2025 */}


      {/* <Input /> */}
      {/* <SimpleLogin /> */}
      <DataOnclick />
      {/* <ProfileEditor /> */}
      <TodoList/>

    </div>
  )
}

export default App
