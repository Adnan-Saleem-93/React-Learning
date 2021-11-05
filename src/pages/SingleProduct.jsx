import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useFetch} from '../useFetch'

const SingleProduct = () => {
  const [name, setName] = useState('')
  let url = 'https://course-api.com/react-prop-types-example'
  let {isLoading, data} = useFetch(url)
  let {id} = useParams()

  useEffect(() => {
    if (data.length > 0) {
      let person = data.filter((person) => person.id === id)
      setName(person[0].name)
    }
  }, [data, name])
  return (
    <div className="container page">
      <h1 className="mx-auto">{isLoading ? 'Loading' : name}</h1>
    </div>
  )
}

export default SingleProduct
