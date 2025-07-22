import React, { useState } from 'react'

const ShowHide = () => {
    const [show, setShow] = useState(true)

const toggleMessage = () => {
    setShow(!show)
}

  return (
    <div>
      <button onClick={toggleMessage}>
        {show ? "hide": "show"} Message
      </button>

      {show && <p>This is a toggled Message</p>}
    </div>
  )
}

export default ShowHide
