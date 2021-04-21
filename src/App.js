import React from 'react'
import './index.css'

const App = () => {
  return (
    // 1. Must return one element in return statement, adjacent elements are not allowed
    // 2. Wrap adjacent elements in a parent element (section, article, div or React Fragment)
    <React.Fragment>
      <Person name="John Doe">
        <span>Gender: Male</span>
      </Person>{' '}
      {/* Nested Component */}
      <Message message="How are you today?" />
    </React.Fragment>
  )
}

const Person = (props) => {
  /* props is an object that contains properties (key/value pairs)
  e.g., in this function, props contains the property 'name' whose value is
  'John Doe' */
  return (
    <>
      <h1 className="person">{props.name.toUpperCase()}</h1>
      {/* elements inside components can be extracted using "children" */}
      <h2>{props.children}</h2>
    </>
  )
}

const Message = (props) => {
  let {message} = props // destructuring the "props" object
  return <h3>{message}</h3>
}

export default App
