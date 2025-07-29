import React, { useContext } from 'react'
import { AuthContext } from './Logg'

const Home = () => {

  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  return (
    <div>
      <h2>{isLoggedIn ? 'Welcome back!' : 'Please Log in..'}</h2>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  )
}

export default Home
