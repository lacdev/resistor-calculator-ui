import { describe, it, expect, beforeEach, vi } from 'vitest'
import UserEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

import * as hook from '../../hooks/useGetMultipliers'

import MultiplierSelector from '.'

vi.mock('../../hooks/useGetMultipliers.tsx')

describe('MultiplierSelector', () => {
  beforeEach(() => {
    vi.spyOn(hook, 'useGetMultipliers').mockReturnValue({
      multipliers: [
        { id: 1, color: 'black', multiplier: 1 },
        { id: 2, color: 'brown', multiplier: 10 },
      ],
      isLoading: false,
      isError: false,
    })
  })

  const handleChange = vi.fn()

  it('Renders the Selector with options correctly', async () => {
    render(<MultiplierSelector onChange={handleChange} />)

    const selectControl = screen.getByRole('combobox')
    await UserEvent.click(selectControl)

    const option = await screen.findByText('black (x1)')

    expect(option).toBeDefined()
  })
})
