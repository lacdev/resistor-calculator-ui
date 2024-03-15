import { Multiplier, Tolerance } from '../types'

export const mapMultiplierOptions = (multipliers: Multiplier[] = []) => {
  return multipliers.map((option) => ({
    value: option.color,
    label: `${option.color} (x${option.multiplier})`,
  }))
}

export const mapToleranceOptions = (tolerances: Tolerance[] = []) => {
  return tolerances.map((option) => ({
    value: option.tolerance,
    label: `${option.color} (${option.tolerance})`,
  }))
}
