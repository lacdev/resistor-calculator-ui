import { beforeEach, describe, it, expect } from 'vitest'
import { renderHook } from '@testing-library/react-hooks'
import fetchMock from 'fetch-mock'

import {
  LOCAL_BACKEND_URL,
  MULTIPLIER_VALUES_API_PATH,
  RESISTOR_VALUES_API_PATH,
} from '../../constants/api'

import { useGetMultipliers } from '../useGetMultipliers'

beforeEach(() => {
  fetchMock.restore()
})

describe('useGetMultipliers', () => {
  it('should fetch multipliers successfully', async () => {
    const mockMultipliers = [
      { multiplier: 1, color: 'black' },
      { multiplier: 10, color: 'brown' },
    ]

    fetchMock.get(
      `${LOCAL_BACKEND_URL}/${RESISTOR_VALUES_API_PATH}/${MULTIPLIER_VALUES_API_PATH}`,
      {
        status: 200,
        body: mockMultipliers,
      }
    )

    const { result, waitForNextUpdate } = renderHook(() => useGetMultipliers())
    await waitForNextUpdate()

    expect(result.current.multipliers).toEqual(mockMultipliers)
    expect(result.current.isLoading).toBeFalsy()
    expect(result.current.isError).toBeFalsy()
  })
})
