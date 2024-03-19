import { DROPDOWN_COLORS_MAP } from '../constants/calculator'
import { Multiplier, Tolerance } from '../types'

export const mapMultiplierOptions = (multipliers: Multiplier[] = []) => {
  return multipliers.map(({ color, multiplier }) => ({
    value: color,
    label: `${color} (x${multiplier})`,
    color: DROPDOWN_COLORS_MAP[color],
  }))
}

export const mapToleranceOptions = (tolerances: Tolerance[] = []) => {
  return tolerances.map(({ tolerance, color }) => ({
    value: tolerance,
    label: `${color} (${tolerance})`,
    color: DROPDOWN_COLORS_MAP[color],
  }))
}
