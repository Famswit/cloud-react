import {createContext, useState, useContext} from 'react';

const AuthContext = createContext(null);


export const AuthProvider = ({children} ) => {
    const [isLogged, setLoggedIn] = useState(false)


    const toggleAuth = () => setLoggedIn(prev => !prev)

    const value = {
        isLoggedIn: isLogged,
        toggleAuth
    }


    return (

        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>

    )
}

export const useAuthContext = () => {
    const values = useContext(AuthContext)
    return values
}