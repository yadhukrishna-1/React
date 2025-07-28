import React, { useContext } from 'react'
import { AuthContext } from './Logg'

const Home = () => {

const {isLogged, setLogged} = useContext(AuthContext);

  return (
    <div>
      <h2>{isLogged ? 'Welcome back!': 'Please Log in..'}</h2>
      <button onClick={()=> setLogged(!isLogged)}>
        {isLogged ? "Logout" : "Login"}
      </button>
    </div>
  )
}

export default Home
