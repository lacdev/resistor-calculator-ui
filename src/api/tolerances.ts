import {
  LOCAL_BACKEND_URL,
  RESISTOR_VALUES_API_PATH,
  TOLERANCE_VALUES_API_PATH,
} from '../constants/api'

import { Tolerance } from '../types'

export const fetchTolerances = async (): Promise<Tolerance[]> => {
  const response = await fetch(
    `${LOCAL_BACKEND_URL}/${RESISTOR_VALUES_API_PATH}/${TOLERANCE_VALUES_API_PATH}`
  )

  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`)
  }

  const data = await response.json()

  return data
}
