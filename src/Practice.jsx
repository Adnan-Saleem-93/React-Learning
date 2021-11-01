import React from 'react'
import {useFetch} from './useFetch'
import './index.css'
import Product from './Product'

const Practice = () => {
  let url = 'https://course-api.com/react-prop-types-example'
  let {isLoading, data} = useFetch(url)
  return (
    <div className="container mt-5" id="main">
      {isLoading ? (
        <h1 className="mx-auto">Loading...</h1>
      ) : (
        data.map((item, index) => {
          let {id} = item
          return <Product key={`${index}=${id}`} {...item} />
        })
      )}
    </div>
  )
}

export default Practice
