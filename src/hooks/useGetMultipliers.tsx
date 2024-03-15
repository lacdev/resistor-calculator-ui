import { useEffect, useState } from 'react'
import { Multiplier } from '../types'
import {
  LOCAL_BACKEND_URL,
  MULTIPLIER_VALUES_API_PATH,
  RESISTOR_VALUES_API_PATH,
} from '../constants/api'

export const useGetMultipliers = () => {
  const [multipliers, setMultipliers] = useState<Multiplier[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const fetchMultipliers = async () => {
      try {
        const response = await fetch(
          `${LOCAL_BACKEND_URL}/${RESISTOR_VALUES_API_PATH}/${MULTIPLIER_VALUES_API_PATH}`
        )

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`)
        }

        const data = await response.json()

        setMultipliers(data)
      } catch (err) {
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMultipliers()
  }, [])

  return { multipliers, isLoading, error }
}
