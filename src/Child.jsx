import React, { useContext } from 'react'
// import { Department } from '../Parent'

const Child = () => {
    const Cource = useContext(Department)
    return (
        <div>
            <h1>{Cource}</h1>
        </div>
    )
}

export default Child
