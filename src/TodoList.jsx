import React, { useState } from 'react'

const TodoList = () => {
    
    const [task, setTask] = useState("")
    const [ todoList, setTodoList] = useState([])

    const submit = () => {
        if (task.trim() ==="") return;
        setTodoList([...todoList, task]);

        setTask("");
}
  return (
    <div>
      <h2>Todo List</h2>

      <input type="text"
      value={task} 
      onChange={(e) => setTask(e.target.value)}
      placeholder='wirte something'
      />

      <button onClick={submit}>submit</button>

       <ul>
        {todoList.map((item, index) => (
          <li key={index}>{item}</li> // ✅ Display each item properly
        ))}
      </ul>
    </div>
  )
}

export default TodoList
