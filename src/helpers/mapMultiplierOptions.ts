import { Multiplier } from '../types'

export const mapMultiplierOptions = (multipliers: Multiplier[] = []) => {
  return multipliers.map((option) => ({
    value: option.color,
    label: `${option.color} (x${option.multiplier})`,
  }))
}
