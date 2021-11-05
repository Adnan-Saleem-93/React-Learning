import React, {useContext, createContext} from 'react'

export const AppContext = createContext(null)

export const AppProvider = ({children}) => {
  return <AppContext.Provider value={''}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
