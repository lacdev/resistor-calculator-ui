import { describe, it, expect, beforeEach, vi } from 'vitest'
import UserEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

import ToleranceSelector from '.'

import * as hook from '../../hooks/useGetTolerances'

vi.mock('../../hooks/useGetTolerances.tsx')

describe('ToleranceSelector', () => {
  beforeEach(() => {
    vi.spyOn(hook, 'useGetTolerances').mockReturnValue({
      tolerances: [
        { id: 1, color: 'black', tolerance: '1%' },
        { id: 2, color: 'brown', tolerance: '2%' },
      ],
      isLoading: false,
      isError: false,
    })
  })

  const handleChange = vi.fn()

  it('Renders the Selector with options correctly', async () => {
    render(<ToleranceSelector onChange={handleChange} />)

    const selectControl = screen.getByRole('combobox')
    await UserEvent.click(selectControl)

    const option = await screen.findByText('black (1%)')

    expect(option).toBeDefined()
  })
})
