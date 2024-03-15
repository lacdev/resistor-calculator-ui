import { Dispatch, SetStateAction, useMemo } from 'react'

import { mapToleranceOptions } from '../../helpers'
import { MultiplierOrToleranceOption } from '../../types'

import { useGetTolerances } from '../../hooks/useGetTolerances'

import BandSelector from '../BandSelector'

type ToleranceSelectorProps = {
  onChange: Dispatch<SetStateAction<MultiplierOrToleranceOption | null>>
}

export const ToleranceSelector = ({ onChange }: ToleranceSelectorProps) => {
  const {
    tolerances,
    isLoading: isLoadingTolerancesData,
    isError: isTolerancesFetchError,
  } = useGetTolerances()

  const toleranceOptions = useMemo(
    () => (tolerances ? mapToleranceOptions(tolerances) : []),
    [tolerances]
  )

  return (
    <BandSelector
      options={toleranceOptions}
      label="Tolerance"
      placeholder="Select Tolerance"
      onChange={onChange}
      isDisabled={isLoadingTolerancesData || isTolerancesFetchError}
    />
  )
}
