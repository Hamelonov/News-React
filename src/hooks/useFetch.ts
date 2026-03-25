import { useEffect, useState } from 'react'

interface FetchFunction<Params, Type> {
  (endpoint: string, params?: Params): Promise<Type>
}

interface UseFetchResult<Type> {
  data: Type | null
  isLoading: boolean
  error: Error | null
}

export const useFetch = <Type, Params>(
  fetchFunction: FetchFunction<Params, Type>,
  endpoint: string,
  queryParams?: Params,
): UseFetchResult<Type> => {
  const [data, setData] = useState<Type | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  const stringifiedQueryParams = queryParams
    ? new URLSearchParams(queryParams).toString()
    : ''

  useEffect(() => {
    let isMounted = true // Флаг, чтобы не обновлять стейт размонтированного компонента

    const fetchData = async () => {
      try {
        setIsLoading(true)
        const result = await fetchFunction(endpoint, queryParams)

        if (isMounted) setData(result)
      } catch (error) {
        if (isMounted) setError(error as Error)
      } finally {
        if (isMounted) setIsLoading(false)
      }
    }

    void fetchData()

    return () => {
      isMounted = false
    }
  }, [fetchFunction, endpoint, stringifiedQueryParams])

  return { data, isLoading, error }
}
