import {useState, useEffect} from 'react'

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])

  const getData = async () => {
    let response = await fetch(url)
    let data = await response.json()
    setIsLoading(false)
    setData(data)
  }

  useEffect(() => {
    getData()
  }, [url])

  return {isLoading, data}
}
