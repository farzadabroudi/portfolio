import React, {useEffect, useState} from 'react';

interface ApiResponse<T> {
  data: T | null;
  error: Error | null;
  loading: boolean
}

const useAsync = <T>(url: string): ApiResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(url)
        const json = await response.json()
        setData(json)
        setError(null)
      } catch (error) {
        console.log(error)
        setError(error)
      }
      setLoading(false)
    }
    fetchData().then()
  }, [url])

  return {data, error, loading}
};

export default useAsync;
