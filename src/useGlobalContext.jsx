import React, {useContext, createContext} from 'react'
import {useFetch} from './useFetch'

export const AppContext = createContext(null)

export const AppProvider = ({children}) => {
  let url = 'https://course-api.com/javascript-store-products'
  const {isLoading, data} = useFetch(url)

  return <AppContext.Provider value={{data, isLoading}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
