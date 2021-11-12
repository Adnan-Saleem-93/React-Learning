import React from 'react'
import {useFetch} from '../useFetch'
import Product from '../Product'
import {useGlobalContext} from '../useGlobalContext'

const Products = () => {
  let {data, isLoading} = useGlobalContext()
  return (
    <div className="container mt-5 page">
      {isLoading ? (
        <h1 className="mx-auto">Loading...</h1>
      ) : (
        data.map((item, index) => {
          let {id, fields} = item
          return <Product key={`${index}=${id}`} id={id} {...fields} />
        })
      )}
    </div>
  )
}

export default Products
