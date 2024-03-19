import { describe, expect, it } from 'vitest'

import { mapMultiplierOptions, mapToleranceOptions } from '..'
import { DROPDOWN_COLORS_MAP } from '../../constants/calculator'
import { Multiplier, Tolerance } from '../../types'

describe('Dropdown map options helpers', () => {
  describe('mapMultiplierOptions', () => {
    it('should correctly map multipliers to dropdown options', () => {
      const multipliers: Multiplier[] = [
        { color: 'black', multiplier: 1 },
        { color: 'brown', multiplier: 10 },
      ]

      const expected = [
        {
          value: 'black',
          label: 'black (x1)',
          color: DROPDOWN_COLORS_MAP['black'],
        },
        {
          value: 'brown',
          label: 'brown (x10)',
          color: DROPDOWN_COLORS_MAP['brown'],
        },
      ]

      expect(mapMultiplierOptions(multipliers)).toEqual(expected)
    })

    describe('malToleranceOptions', () => {
      it('should correctly map tolerances to dropdown options', () => {
        const tolerances: Tolerance[] = [
          { color: 'black', tolerance: '+1%' },
          { color: 'brown', tolerance: '+2%' },
        ]

        const expected = [
          {
            value: '+1%',
            label: 'black (+1%)',
            color: DROPDOWN_COLORS_MAP['black'],
          },
          {
            value: '+2%',
            label: 'brown (+2%)',
            color: DROPDOWN_COLORS_MAP['brown'],
          },
        ]

        expect(mapToleranceOptions(tolerances)).toEqual(expected)
      })
    })
  })
})
