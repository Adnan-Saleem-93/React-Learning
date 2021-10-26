import React from 'react'
import {useFetch} from './useFetch'
import './index.css'

const Practice = () => {
  let url = 'https://course-api.com/javascript-store-products'
  let {isLoading, data} = useFetch(url)

  return (
    <div className="container mt-5" id="main">
      {isLoading ? (
        <h1 className="mx-auto">Loading...</h1>
      ) : (
        data.map((item, index) => {
          let {id, fields} = item
          let {company, image, name, price} = fields
          return (
            <div key={`${index}=${id}`}>
              <h4>{name}</h4>
              <img src={image[0].url} alt={name} />
              <p style={{marginBottom: 0, fontWeight: 'bold'}}>${price}</p>
              <p>{company}</p>
            </div>
          )
        })
      )}
    </div>
  )
}

export default Practice
