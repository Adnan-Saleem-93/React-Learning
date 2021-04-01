import React from 'react'

// JSX Rules

const Greetings = () => {
  return (
    // 1. Must return one element in return statement, adjacent elements are not allowed
    // 2. Wrap adjacent elements in a parent element (section, article, div or React Fragment)
    <React.Fragment>
      <div>
        <h1>Greetings User</h1>
      </div>

      {/* 3. Code or comments inside HTML must be wrapped in {} (curly braces} */
      /* 4. inline style attribute is used as an object. */
      /* 5. html attributes must be written in camelCase syntax, e.g., fontWeight in style below */}
      <div style={{fontWeight: 600}}>How are you?</div>
    </React.Fragment>
  )
}

export default Greetings
