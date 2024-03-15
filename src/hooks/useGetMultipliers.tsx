import { useEffect, useState } from 'react'

import { Multiplier } from '../types'

import { fetchMultipliers } from '../api/multipliers'

export const useGetMultipliers = () => {
  const [multipliers, setMultipliers] = useState<Multiplier[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setError] = useState<boolean>(false)

  useEffect(() => {
    const getMultipliersData = async () => {
      try {
        const data = await fetchMultipliers()
        setMultipliers(data)
      } catch (err) {
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }

    getMultipliersData()
  }, [])

  return { multipliers, isLoading, isError }
}
