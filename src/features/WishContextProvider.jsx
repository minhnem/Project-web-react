import React, { createContext, useReducer } from 'react'
import WishReducer, { INIT_STATE } from './WishReducer'

export const WishContext = createContext()

const WishContextProvider = ({children}) => {
    const[productsWish, dispatch] = useReducer(WishReducer, INIT_STATE)
  return (
    <WishContext.Provider value={{productsWish, dispatch}}>
      {children}
    </WishContext.Provider>
  )
}

export default WishContextProvider
