import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext({})

export const UserProvider = ({children}) =>{
    const [user, setUser] = useState({
        name: 'user_000',
        points: 0
    })

    const updateUser = other => {
        setUser(other)
    }

    return (
        <UserContext.Provider value={{
            user,
            updateUser
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default function useProfile () {
    return useContext(UserContext)
}
