import React from 'react'
import './index.css'

const App = () => {
  let people = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jon Snow'},
    {id: 3, name: 'Big Show'}
  ]

  return (
    <React.Fragment>
      {people.map((person, index) => {
        // one way to pass props is to use the spread (...object) operator
        return <Person key={person.id} {...person} />
        // when rendering components in a list (map), we need to provide it a unique key
      })}
    </React.Fragment>
  )
}

const Person = ({name}) => {
  /* props is an object that contains properties (key/value pairs)
  e.g., in this function, props contains the property 'name' whose value is
  'John Doe' */
  return (
    <>
      <h1 className="person">{name.toUpperCase()}</h1>
    </>
  )
}

export default App
