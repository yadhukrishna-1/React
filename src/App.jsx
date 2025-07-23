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
// 23-07-2025
import Mycomponent from './Mycomponent'
import User from './User'
import Counters from './Counters'
import LiveClock from './LiveClock'

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

      {/* <Input />
      <SimpleLogin />
      <DataOnclick />
      <ProfileEditor />
      <TodoList/> */}


{/* 23-07-2025 */}

{/* <Mycomponent/> */}
{/* <User/> */}
{/* <Counters/> */}
<LiveClock/>


    </div>
  )
}

export default App
