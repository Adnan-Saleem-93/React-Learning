import React, {useState} from 'react'
import './index.css'
import {data} from './constants'
import {Button, FormControl, Row, Col} from 'react-bootstrap'

const App = () => {
  return (
    <React.Fragment>
      <Person />
    </React.Fragment>
  )
}

const Person = ({name}) => {
  let [state, setState] = useState({people: data, newPerson: ''}) // array destructuring
  let {people, newPerson} = state

  // function to add a new item
  const onAddNew = () => {
    // add new item after a delay of 3 seconds
    setTimeout(() => {
      // using this method (funtional update form), we'll be updating the latest state value
      setState((prevState) => {
        let newPeople = [...prevState.people]
        let length = newPeople.length
        let count = length ? newPeople[length - 1].id + 1 : 0
        newPeople.push({id: count, name: newPerson}) // pusing to item to the new array

        return {...prevState, people: newPeople}
      })

      // // using this method, it is possible that we can update an outdated state value
      // let newPeople = [...people]
      // newPeople.push({id: people[people.length - 1].id + 1, name: newPerson}) // pusing to item to the new array
      // setState({...state, people: newPeople})
    }, 3000)
  }

  // function to clear all items
  const onClear = () => {
    setState({...state, people: []})
  }

  // function to remove a specific item
  const onRemoveItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id) // filtering array
    setState({...state, people: newPeople})
  }

  // function to update the newPerson state
  const onChange = (event) => {
    let newObject = {...state}
    newObject.newPerson = event.target.value
    setState(newObject)
  }

  return (
    <div className="people">
      <FormControl placeholder="Enter Person" onChange={onChange} />

      {people.map(({id, name}, index) => {
        return (
          <Row key={index}>
            <Col md={2}>
              <button
                className="removeItem"
                onClick={() => {
                  onRemoveItem(id)
                }}
              >
                x
              </button>
            </Col>
            <b>
              {index + 1} . {name}
            </b>
          </Row>
        )
      })}
      <Button onClick={onAddNew}>Add Person</Button>
      <Button className="ml-1" variant="danger" onClick={onClear}>
        Clear Items
      </Button>
    </div>
  )
}

export default App
