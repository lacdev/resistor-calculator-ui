import { useEffect, useState } from 'react'

import { Tolerance } from '../types'

import { fetchTolerances } from '../api/tolerances'

export const useGetTolerances = () => {
  const [tolerances, setTolerances] = useState<Tolerance[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setError] = useState<boolean>(false)

  useEffect(() => {
    const getTolerancesData = async () => {
      try {
        const data = await fetchTolerances()
        setTolerances(data)
      } catch (err) {
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }

    getTolerancesData()
  }, [])

  return { tolerances, isLoading, isError }
}
