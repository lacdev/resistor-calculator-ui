import { useMemo, useState } from 'react'
import Select from 'react-select'

import { useGetMultipliers } from './hooks/useGetMultipliers'
import { useGetTolerances } from './hooks/useGetTolerances'

import { ResistorOhmCalculator } from './models/ResistorOhmCalculator/'

import {
  COLOR_CODE_MAP,
  FIRST_BANDS_OPTIONS,
  MULTIPLIER_MAP,
} from './constants/calculator'

import { ColourOption, MultiplierOrToleranceOption } from './types'
import { mapMultiplierOptions, mapToleranceOptions } from './helpers/'

import './App.css'

function App() {
  const {
    multipliers,
    isLoading: isLoadingMultipliersData,
    error: isMultipliersFetchError,
  } = useGetMultipliers()

  const {
    tolerances,
    isLoading: isLoadingTolerancesData,
    error: isTolerancesFetchError,
  } = useGetTolerances()

  const [selectedBandA, setSelectedBandA] = useState<ColourOption | null>(null)
  const [selectedBandB, setSelectedBandB] = useState<ColourOption | null>(null)
  const [selectedMultiplier, setSelectedMultiplier] =
    useState<MultiplierOrToleranceOption | null>(null)
  const [selectedTolerance, setSelectedTolerance] =
    useState<MultiplierOrToleranceOption | null>(null)

  const [resistance, setResistance] = useState<number | null>(null)

  const multipliersOptions = useMemo(
    () => multipliers && mapMultiplierOptions(multipliers),
    [multipliers]
  )

  const tolerancesOptions = useMemo(
    () => tolerances && mapToleranceOptions(tolerances),
    [tolerances]
  )

  const handleCalculateButtonClick = () => {
    if (
      selectedBandA &&
      selectedBandB &&
      selectedMultiplier &&
      selectedTolerance
    ) {
      const calculator = new ResistorOhmCalculator(
        COLOR_CODE_MAP,
        MULTIPLIER_MAP
      )

      const result = calculator.calculateOhmValue(
        selectedBandA.label,
        selectedBandB.label,
        selectedMultiplier.value
      )

      setResistance(result)
    } else {
      alert('Please select all bands before calculating')
    }
  }

  const isDropdownOrButtonDisabled =
    isLoadingMultipliersData ||
    isMultipliersFetchError ||
    isLoadingTolerancesData ||
    isTolerancesFetchError

  return (
    <>
      <h1>Resistor Calculator</h1>

      <div className="select-option-container">
        <Select
          options={FIRST_BANDS_OPTIONS}
          placeholder="Please Select Band A Color"
          onChange={setSelectedBandA}
          isDisabled={isDropdownOrButtonDisabled}
        />
      </div>
      <div className="select-option-container">
        <Select
          options={FIRST_BANDS_OPTIONS}
          placeholder="Please Select Band B Color"
          onChange={setSelectedBandB}
          isDisabled={isDropdownOrButtonDisabled}
        />
      </div>
      <div className="select-option-container">
        <Select
          options={multipliersOptions}
          placeholder="Select Multiplier"
          onChange={setSelectedMultiplier}
          isDisabled={isDropdownOrButtonDisabled}
        />
      </div>
      <div className="select-option-container">
        <Select
          options={tolerancesOptions}
          placeholder="Select Tolerance"
          onChange={setSelectedTolerance}
          isDisabled={isDropdownOrButtonDisabled}
        />
      </div>
      <div className="card">
        <button
          disabled={isDropdownOrButtonDisabled}
          onClick={handleCalculateButtonClick}
        >
          Calculate Resistance
        </button>
        <div>
          <h4>Resistor Value:</h4>
          {resistance && selectedTolerance ? (
            <span> {`${resistance} Ohms ${selectedTolerance.value}`}</span>
          ) : null}
        </div>
      </div>
    </>
  )
}

export default App
