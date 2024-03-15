import {
  LOCAL_BACKEND_URL,
  MULTIPLIER_VALUES_API_PATH,
  RESISTOR_VALUES_API_PATH,
} from '../constants/api'

import { Multiplier } from '../types'

export const fetchMultipliers = async (): Promise<Multiplier[]> => {
  const response = await fetch(
    `${LOCAL_BACKEND_URL}/${RESISTOR_VALUES_API_PATH}/${MULTIPLIER_VALUES_API_PATH}`
  )

  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`)
  }

  const data = await response.json()

  return data
}
