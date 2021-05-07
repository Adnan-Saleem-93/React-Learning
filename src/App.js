import React, {useState, useEffect} from 'react';
import './index.css';
import {data} from './constants';
import {Button, FormControl, Row, Col} from 'react-bootstrap';

const App = () => {
  return (
    <React.Fragment>
      <Person />
    </React.Fragment>
  );
};

const Person = ({name}) => {
  let [state, setState] = useState({people: data, newPerson: ''}); // array destructuring
  let {people, newPerson} = state;

  useEffect(() => {
    // we will update the title of the page with every re-render
    let len = people.length;
    if (len > 1) {
      document.title = `${people.length} People`;
    } else if (len === 1) {
      document.title = `${people.length} Person`;
    } else {
      document.title = `No People`;
    }
  });

  // function to add a new item
  const onAddNew = () => {
    // using this method (funtional update form), we'll be updating the latest state value
    setState((prevState) => {
      let newPeople = [...prevState.people];
      let length = newPeople.length;
      let count = length ? newPeople[length - 1].id + 1 : 0;
      newPeople.push({id: count, name: newPerson}); // pusing to item to the new array

      return {...prevState, people: newPeople};
    });
  };

  // function to clear all items
  const onClear = () => {
    setState({...state, people: []});
  };

  // function to remove a specific item
  const onRemoveItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id); // filtering array
    setState({...state, people: newPeople});
  };

  // function to update the newPerson state
  const onChange = (event) => {
    let newObject = {...state};
    newObject.newPerson = event.target.value;
    setState(newObject);
  };

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
                  onRemoveItem(id);
                }}
              >
                x
              </button>
            </Col>
            <b>
              {index + 1} . {name}
            </b>
          </Row>
        );
      })}
      <Button onClick={onAddNew}>Add Person</Button>
      <Button className="ml-1" variant="danger" onClick={onClear}>
        Clear Items
      </Button>
    </div>
  );
};

export default App;
