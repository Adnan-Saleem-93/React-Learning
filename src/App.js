import React from 'react'
import './index.css'

const App = () => {
  return (
    // 1. Must return one element in return statement, adjacent elements are not allowed
    // 2. Wrap adjacent elements in a parent element (section, article, div or React Fragment)
    <React.Fragment>
      <Person /> {/* Nested Component */}
      <Message />
    </React.Fragment>
  )
}

const Person = () => {
  return <h1 className='person'>John Doe</h1>
}

const Message = () => {
  return (
    <>
      {/* Code or comments inside HTML must be wrapped in {} (curly braces} */
      /* inline style attribute is used as an object. */
      /* html or css properties must be written in camelCase syntax, e.g., fontWeight in style below */}
      <h3 style={{fontWeight: 600}}>How are you?</h3>
    </>
  )
}

export default App
