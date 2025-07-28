import React, { createContext, useState } from 'react'
import Home from './Home';

export const AuthContext = createContext();

const Logg = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <div>
            <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
                <Home />
            </AuthContext.Provider>
        </div>
    )
}
export default Logg
