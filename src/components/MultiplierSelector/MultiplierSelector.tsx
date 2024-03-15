import { useMemo } from 'react'
import { ActionMeta, MultiValue, SingleValue } from 'react-select'

import { mapMultiplierOptions } from '../../helpers'
import { useGetMultipliers } from '../../hooks/useGetMultipliers'
import { ColourOption } from '../../types'

import BandSelector from '../BandSelector'

type MultiplierSelectorProps = {
  onChange:
    | ((
        newValue: SingleValue<ColourOption> | MultiValue<ColourOption>,
        actionMeta: ActionMeta<ColourOption>
      ) => void)
    | undefined
}

export const MultiplierSelector = ({ onChange }: MultiplierSelectorProps) => {
  const {
    multipliers,
    isLoading: isLoadingMultipliersData,
    isError: isMultipliersFetchError,
  } = useGetMultipliers()

  const multiplierOptions = useMemo(
    () => (multipliers.length > 0 ? mapMultiplierOptions(multipliers) : []),
    [multipliers]
  )

  return (
    <BandSelector
      options={multiplierOptions}
      label="Multiplier"
      placeholder="Select Multiplier"
      onChange={onChange}
      isDisabled={isLoadingMultipliersData || isMultipliersFetchError}
    />
  )
}
