import {useEffect, useState} from "react";

export const useFetch = (fetchFunction, endpoint, queryParams) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const stringifiedQueryParams = queryParams ? new URLSearchParams(queryParams).toString() : ''

  useEffect(() => {
    let isMounted = true; // Флаг, чтобы не обновлять стейт размонтированного компонента

    (async () => {
      try {
        setIsLoading(true)
        const result = await fetchFunction(endpoint, queryParams)

        if (isMounted) setData(result);
      } catch (error) {
        if (isMounted) setError(error)
      } finally {
        if (isMounted) setIsLoading(false)
      }
    })()

    return () => {
      isMounted = false;
    }
  }, [fetchFunction, endpoint, stringifiedQueryParams])

  return {data, isLoading, error}
}