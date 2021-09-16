import React, {useReducer, useState, useEffect} from 'react'
import './index.css'

const reducer = (state, {type, payload}) => {
  switch (type) {
    case 'ADD_ITEM':
      let updatedData = [...state.data, payload]
      return {...state, data: updatedData, showMessage: true, message: 'Item Added'}
    case 'REMOVE_ITEM':
      let filteredData = state.data.filter((item) => item.id !== payload)
      return {...state, data: filteredData, showMessage: true, message: 'Item Removed'}
    case 'HIDE_MESSAGE':
      return {...state, showMessage: false, message: ''}
    case 'VALUE_ERROR':
      return {...state, showMessage: true, message: 'Please enter a value'}
    default:
      return {...state, showMessage: true, message: 'Invalid Action'}
  }
}

const Practice = () => {
  const initialState = {data: [], showMessage: false, message: ''}
  const [value, setValue] = useState('')
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if (state.showMessage) {
      setTimeout(() => dispatch({type: 'HIDE_MESSAGE'}), 3000)
    }
  }, [state.showMessage])

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
      <div className="row">
        <input
          type="text"
          className="form-control col-md-8"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter value"
        />
        <button className="btn btn-secondary col-md-2" onClick={handleAddItem}>
          Add
        </button>
      </div>
      <div className="mt-4">
        {state.data.length > 0 ? (
          state.data.map((item, index) => {
            return (
              <div className={`row item_${item.id}`} key={index}>
                <h4 key={index} className="col-md-8">
                  {item.name}
                </h4>
                <button
                  className="btn btn-outline-danger col-md-2"
                  onClick={() => dispatch({type: 'REMOVE_ITEM', payload: item.id})}
                >
                  Remove
                </button>
              </div>
            )
          })
        ) : (
          <h3>No Items</h3>
        )}
      </div>
    </div>
  )
}

export default Practice
