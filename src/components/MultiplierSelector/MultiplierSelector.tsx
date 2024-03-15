import { Dispatch, SetStateAction, useMemo } from 'react'

import { mapMultiplierOptions } from '../../helpers'
import { MultiplierOrToleranceOption } from '../../types'

import { useGetMultipliers } from '../../hooks/useGetMultipliers'

import BandSelector from '../BandSelector'

type MultiplierSelectorProps = {
  onChange: Dispatch<SetStateAction<MultiplierOrToleranceOption | null>>
}

export const MultiplierSelector = ({ onChange }: MultiplierSelectorProps) => {
  const {
    multipliers,
    isLoading: isLoadingMultipliersData,
    isError: isMultipliersFetchError,
  } = useGetMultipliers()

  const multiplierOptions = useMemo(
    () => (multipliers ? mapMultiplierOptions(multipliers) : []),
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
