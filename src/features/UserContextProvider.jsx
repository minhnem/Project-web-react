import React, { createContext, useReducer } from 'react'
import UserReducer, { INIT_STATE } from './UserReducer'

export const AuthContext = createContext()

const UserContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(UserReducer, INIT_STATE)
  return (
    <AuthContext.Provider value={{state, dispatch}}>
        {children}
    </AuthContext.Provider>
  )
}

export default UserContextProvider
