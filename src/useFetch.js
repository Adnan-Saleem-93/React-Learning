import {useState, useEffect, useCallback} from 'react'

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])

  const getData = useCallback(async () => {
    let response = await fetch(url)
    let data = await response.json()
    setIsLoading(false)
    setData(data)
  }, [url])

  useEffect(() => {
    getData()
  }, [url, getData])

  return {isLoading, data}
}
