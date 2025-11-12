import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const MyUserContext = createContext()

const MyUserProvider = ({children}) => {
  const [user, setUser] = useState(null)
  return (
    <MyUserContext.Provider value={{user}}>
      {children}
    </MyUserContext.Provider>
  )
}

export default MyUserProvider
    