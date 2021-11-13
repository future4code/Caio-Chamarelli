import axios from "axios";
import { useEffect, useState } from "react";

export default function useRequestData(url) {
  const [data, setData] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    setIsLoading(true)

    axios.get(url)
      .then(response => {
        setIsLoading(false)
        setData(response.data.trips)
      })
      .catch(error => {
        setIsLoading(false)
        setError(error)
        console.log(error.message)
    })
  }, [url])
  
  return [data, setData, isLoading, error]
}