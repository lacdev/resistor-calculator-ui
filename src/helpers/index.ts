import { DROPDOWN_COLORS_MAP } from '../constants/calculator'
import { Multiplier, Tolerance } from '../types'

export const mapMultiplierOptions = (multipliers: Multiplier[] = []) => {
  return multipliers.map((option) => ({
    value: option.color,
    label: `${option.color} (x${option.multiplier})`,
    color: DROPDOWN_COLORS_MAP[option.color],
  }))
}

export const mapToleranceOptions = (tolerances: Tolerance[] = []) => {
  return tolerances.map((option) => ({
    value: option.tolerance,
    label: `${option.color} (${option.tolerance})`,
    color: DROPDOWN_COLORS_MAP[option.color],
  }))
}
