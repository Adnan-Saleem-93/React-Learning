import React from 'react'
import ReactDOM from 'react-dom'

const Greetings = () => {
  return <h2>Greetings User</h2>
}

export default Greetings

ReactDOM.render(
  <React.StrictMode>
    <Greetings />
  </React.StrictMode>,
  document.getElementById('root')
)
