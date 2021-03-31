import React from 'react'
import ReactDOM from 'react-dom'

const Greetings = () => {
  // return (
  //   <div>
  //     <h1>
  //       Greetings User
  //     </h1>
  //   </div>
  // )
  return React.createElement('div', {}, React.createElement('h1', {}, 'Greetings User'))
}

export default Greetings

ReactDOM.render(
  <React.StrictMode>
    <Greetings />
  </React.StrictMode>,
  document.getElementById('root')
)
