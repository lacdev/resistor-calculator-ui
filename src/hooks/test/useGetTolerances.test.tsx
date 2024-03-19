import { beforeEach, describe, it, expect } from 'vitest'
import { renderHook } from '@testing-library/react-hooks'
import fetchMock from 'fetch-mock'

import {
  LOCAL_BACKEND_URL,
  RESISTOR_VALUES_API_PATH,
  TOLERANCE_VALUES_API_PATH,
} from '../../constants/api'

import { useGetTolerances } from '../useGetTolerances'

beforeEach(() => {
  fetchMock.restore() // Reset mocks before each test
})

describe('useGetTolerances', () => {
  it('should fetch tolerances successfully', async () => {
    const mockTolerances = [
      { tolerance: '+1%', color: 'black' },
      { tolerance: '+2%', color: 'brown' },
    ]

    fetchMock.get(
      `${LOCAL_BACKEND_URL}/${RESISTOR_VALUES_API_PATH}/${TOLERANCE_VALUES_API_PATH}`,
      {
        status: 200,
        body: mockTolerances,
      }
    )

    const { result, waitForNextUpdate } = renderHook(() => useGetTolerances())
    await waitForNextUpdate()

    expect(result.current.tolerances).toEqual(mockTolerances)
    expect(result.current.isLoading).toBeFalsy()
    expect(result.current.isError).toBeFalsy()
  })
})
