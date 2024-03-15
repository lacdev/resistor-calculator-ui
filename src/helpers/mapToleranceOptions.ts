import { Tolerance } from '../types'

export const mapToleranceOptions = (tolerances: Tolerance[] = []) => {
  return tolerances.map((option) => ({
    value: option.tolerance,
    label: `${option.color} (${option.tolerance})`,
  }))
}
