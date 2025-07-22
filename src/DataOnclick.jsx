import React, { useState } from 'react'

const DataOnclick = () => {

    const [word, setWord] = useState("")
    const [subData, setSubmit] = useState("")

    const dataDisplay = (e) => {
        e.preventDefault();
        setSubmit(word)
        setWord("");

    }
    return (
        <div>
            <input type="text"
                value={word}
                onChange={(typed) => setWord(typed.target.value)}
                placeholder='Enter something...' />

            <button onClick={dataDisplay} >click me</button>

            <div>{subData}</div>

        </div>
    )
}

export default DataOnclick
