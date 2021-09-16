import React, {useReducer, useState} from 'react'
import './index.css'

const reducer = (state, {type, payload}) => {
  if (type === 'ADD_ITEM') {
    let updatedData = [...state.data, payload]
    return {...state, data: updatedData, showMessage: true, message: 'Item Added'}
  } else if (type === 'VALUE_ERROR') {
    return {...state, showMessage: true, message: 'Please enter a value'}
  } else {
    return {...state, showMessage: true, message: 'Invalid Action'}
  }
}

const Practice = () => {
  const initialState = {data: [], showMessage: false, message: ''}
  const [value, setValue] = useState('')
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleAddItem = () => {
    if (value) {
      dispatch({type: 'ADD_ITEM', payload: {id: state.data.length + 1, name: value}})
      setValue('')
    } else {
      dispatch({type: 'VALUE_ERROR'})
    }
  }

  return (
    <div className="mx-auto container mt-5 text-center">
      {state.showMessage && <p className="text-danger">{state.message}</p>}
      <input
        type="text"
        className="form-control"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="mt-5">
        {state.data.map((item, index) => {
          return <h4 key={index}>{item.name}</h4>
        })}
      </div>
      <button className="btn btn-secondary" onClick={handleAddItem}>
        Add
      </button>
    </div>
  )
}

export default Practice
