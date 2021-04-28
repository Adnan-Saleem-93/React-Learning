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
  let [people, setPeople] = useState(data) // array destructuring
  let [newPerson, setNewPerson] = useState('')

  // function to add a new item
  const onAddNew = () => {
    let newPeople = [...people]
    newPeople.push({id: people[people.length - 1].id + 1, name: newPerson}) // pusing to item to the new array
    setPeople(newPeople)
  }

  // function to clear all items
  const onClear = () => {
    setPeople([])
  }

  // function to remove a specific item
  const onRemoveItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id) // filtering array
    setPeople(newPeople)
  }

  // function to update the newPerson state
  const onChange = (event) => {
    setNewPerson(event.target.value)
  }

  return (
    <div className="people">
      <FormControl placeholder="Enter Person" onChange={onChange} />

      {people.map(({id, name}, index) => {
        return (
          <Row key={index}>
            <Col md={4}>
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
      <Button variant="danger" onClick={onClear}>
        Clear Items
      </Button>
    </div>
  )
}

export default App
