import { describe, test, expect } from 'vitest'

import { COLOR_CODE_MAP, MULTIPLIER_MAP } from '../../../constants/calculator'
import { ResistorOhmCalculator } from '../ResistorOhmCalculator'

describe('ResistorOhmCalculator', () => {
  const calculator = new ResistorOhmCalculator(COLOR_CODE_MAP, MULTIPLIER_MAP)

  test('calculates correct resistance for given colors', () => {
    expect(calculator.calculateOhmValue('brown', 'black', 'red')).toBe(1000)
    expect(calculator.calculateOhmValue('yellow', 'violet', 'orange')).toBe(
      47000
    )
    expect(calculator.calculateOhmValue('green', 'blue', 'brown')).toBe(560)
  })

  test('throws errors for invalid color codes', () => {
    expect(() => calculator.calculateOhmValue('pink', 'black', 'red')).toThrow(
      'Invalid color code'
    )
    expect(() => calculator.calculateOhmValue('brown', 'cyan', 'red')).toThrow(
      'Invalid color code'
    )
    expect(() =>
      calculator.calculateOhmValue('brown', 'black', 'crimson')
    ).toThrow('Invalid color code')
  })

  test('handles edge cases colors correctly', () => {
    expect(calculator.calculateOhmValue('white', 'white', 'gold')).toBe(9.9)
  })
})
