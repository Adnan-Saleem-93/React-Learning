import React, {useContext, createContext} from 'react'
import {data} from './constants'
import './index.css'

const dataContext = createContext()

const Practice = () => {
  return (
    <dataContext.Provider value={data}>
      <div className="mx-auto container mt-5 text-center">
        <ChildComponent />
      </div>
    </dataContext.Provider>
  )
}

const ChildComponent = () => {
  return (
    <>
      <h3>Child Component</h3>
      <SubChildComponent />
    </>
  )
}

const SubChildComponent = () => {
  let people = useContext(dataContext)

  return (
    <>
      <h4>Sub Child Component</h4>
      {people.map(({id, name}, index) => {
        return (
          <p key={index}>
            {id}. <b>{name}</b>
          </p>
        )
      })}
    </>
  )
}

export default Practice
