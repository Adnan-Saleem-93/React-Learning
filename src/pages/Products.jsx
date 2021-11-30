import React, {useState} from 'react'
import Product from './Product'
import {useGlobalContext} from '../useGlobalContext'

const Products = () => {
  let {data, isLoading} = useGlobalContext()
  const [count, setCount] = useState(0)

  return (
    <div className="container mt-5 page">
      {isLoading ? (
        <h1 className="mx-auto">Loading...</h1>
      ) : (
        <>
          <h2>Count: {count}</h2>
          <button className="btn-primary" onClick={() => setCount(count + 1)}>
            Update Count
          </button>
          {data.map((item, index) => {
            let {id, fields} = item
            return <Product key={`${index}=${id}`} id={id} {...fields} />
          })}
        </>
      )}
    </div>
  )
}

export default Products
