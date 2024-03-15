import { useEffect, useState } from 'react'

import { Tolerance } from '../types'

import {
  LOCAL_BACKEND_URL,
  RESISTOR_VALUES_API_PATH,
  TOLERANCE_VALUES_API_PATH,
} from '../constants/api'

export const useGetTolerances = () => {
  const [tolerances, setTolerances] = useState<Tolerance[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setError] = useState<boolean>(false)

  useEffect(() => {
    const fetchTolerances = async () => {
      try {
        const response = await fetch(
          `${LOCAL_BACKEND_URL}/${RESISTOR_VALUES_API_PATH}/${TOLERANCE_VALUES_API_PATH}`
        )

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`)
        }

        const data = await response.json()

        setTolerances(data)
      } catch (err) {
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTolerances()
  }, [])

  return { tolerances, isLoading, isError }
}
