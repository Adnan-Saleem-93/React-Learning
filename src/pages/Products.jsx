import React, {useState, useCallback} from 'react'
import Product from './Product'
import {useGlobalContext} from '../useGlobalContext'

const Products = () => {
  let {data, isLoading} = useGlobalContext()
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState(0)

  // addToCart is a function object.
  // when passed down to child component (Product) as prop
  // it gets re-created everytime "count" state is changed, causing
  // unnecessary re-rendering of "Product" component.
  // useCallback prevents re-creating of this function if cart state is not updated
  const addToCart = useCallback(() => {
    setCart(cart + 1)
  }, [cart])

  return (
    <>
      <div className="count-section">
        <h2>Count: {count}</h2>
        <button className="btn-primary" onClick={() => setCount(count + 1)}>
          Update Count
        </button>

        <h2 className="mt-3">Items in Cart: {cart}</h2>
      </div>
      <div className=" mt-5 page">
        {isLoading ? (
          <h1 className="mx-auto">Loading...</h1>
        ) : (
          <>
            {data.map((item, index) => {
              let {id, fields} = item
              return <Product key={`${index}=${id}`} id={id} {...fields} addToCart={addToCart} />
            })}
          </>
        )}
      </div>
    </>
  )
}

export default Products
