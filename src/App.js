import React from 'react'
import './index.css'

const App = () => {
  let people = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jon Snow'},
    {id: 3, name: 'Big Show'}
  ]

  // EVENTS Example
  // Event handlers can be used in 3 ways in React:
  // 1. as inline functions
  // 2. by referencing a functions name
  // 3. if a function requires parameters, we use inline functions to reference a function in pass parameters along

  return (
    <React.Fragment>
      <Person {...people[0]} />
    </React.Fragment>
  )
}

const Person = ({name}) => {
  const onNameClick = () => {
    alert('clicked')
  }
  const onNameClickWithParams = (name) => {
    alert('Hello ' + name)
  }
  return (
    <>
      <h1 className="person" onClick={() => alert(name)}>
        {/* 1. inline function to handle event */}
        1. {name.toUpperCase()}
      </h1>
      <h1 className="person" onClick={onNameClick}>
        {/* 2. reference another function to handle event */}
        2. {name.toUpperCase()}
      </h1>
      <h1 className="person" onClick={() => onNameClickWithParams(name)}>
        {/* 3. use inline function to reference another function and pass arguments */}
        3. {name.toUpperCase()}
      </h1>
    </>
  )
}

export default App
