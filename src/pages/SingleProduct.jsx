import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useGlobalContext} from '../useGlobalContext'

const SingleProduct = () => {
  const [name, setName] = useState('')
  let {data, isLoading} = useGlobalContext()
  let {id} = useParams()

  useEffect(() => {
    if (data.length > 0) {
      let person = data.filter((person) => person.id === id)
      setName(person[0].fields.name)
    }
  }, [id, name, data])
  return (
    <div className="container page">
      <h1 className="mx-auto">{isLoading ? 'Loading' : name}</h1>
    </div>
  )
}

export default SingleProduct
