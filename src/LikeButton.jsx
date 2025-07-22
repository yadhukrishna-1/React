import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const LikeButton = () => {

    const [like,Changelike] = useState("❤️")

  return (
    <div>
      <h1 className='btn btn-dark h' onClick={()=> {Changelike(like === "❤️" ? "🤍" : "❤️")}}>{like}</h1>
    </div>
  )
}

export default LikeButton
