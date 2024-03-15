import { useMemo } from 'react'
import { ActionMeta, MultiValue, SingleValue } from 'react-select'

import { mapToleranceOptions } from '../../helpers'
import { useGetTolerances } from '../../hooks/useGetTolerances'
import { ColourOption } from '../../types'

import BandSelector from '../BandSelector'

type ToleranceSelectorProps = {
  onChange:
    | ((
        newValue: SingleValue<ColourOption> | MultiValue<ColourOption>,
        actionMeta: ActionMeta<ColourOption>
      ) => void)
    | undefined
}

export const ToleranceSelector = ({ onChange }: ToleranceSelectorProps) => {
  const {
    tolerances,
    isLoading: isLoadingTolerancesData,
    isError: isTolerancesFetchError,
  } = useGetTolerances()

  const toleranceOptions = useMemo(
    () => (tolerances.length > 0 ? mapToleranceOptions(tolerances) : []),
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
