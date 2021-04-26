import React, {useState} from 'react'
import './index.css'

const App = () => {
  return (
    <React.Fragment>
      <Person />
    </React.Fragment>
  )
}

const Person = ({name}) => {
  let [count, setCount] = useState(0) // array destructuring

  return (
    <div className="counter">
      <h1 className="person">{count}</h1>
      <button type="button" style={{color: 'blue'}} onClick={() => setCount(count + 1)}>
        <b>+</b>
      </button>
      <button type="button" style={{color: 'green'}} onClick={() => setCount(0)}>
        <b>RESET</b>
      </button>
      <button type="button" style={{color: 'red'}} onClick={() => setCount(count - 1)}>
        <b>-</b>
      </button>
    </div>
  )
}

export default App
