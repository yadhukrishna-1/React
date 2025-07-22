import React, { useState } from 'react'

const ProfileEditor = () => {
    const [name , setName] = useState('')
    const [age , setAge] = useState('')
    const [bio , setBio] = useState('')

  return (
    <div>
      <h2>Profile editor:</h2>
<br />
      <input type="text"
      value={name}
      placeholder='Enter your name'
      onChange={(e) => setName(e.target.value)} />
<br /><br />
      <input type="number"
      value={age}
      placeholder='Enter your age'
      onChange={(e) => setAge(e.target.value)} />
<br /><br />
      <input type="text" value={bio}
      placeholder='Enter something...'
      onChange={(e) => setBio(e.target.value)} />


<br /><br />
      <div className="profile" style={{borderTop: '1px solid #ccc', paddingTop: '10px', backgroundColor :"rgb(178, 227, 211)"}}>

    <h2 style={{color : 'rgba(37, 85, 68, 1)', textDecoration:'underline'}}>{name}</h2>
    <h4 >{age}</h4>
    <br />
    <p style={{color: 'grey'}}>{bio}</p>
</div>
    </div>
    
  )
}

export default ProfileEditor
