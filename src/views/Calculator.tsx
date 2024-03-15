import { useState } from 'react'
import { MultiValue, SingleValue } from 'react-select'

import {
  COLOR_CODE_MAP,
  FIRST_BANDS_OPTIONS,
  MULTIPLIER_MAP,
} from '../constants/calculator'

import { ResistorOhmCalculator } from '../models/ResistorOhmCalculator'
import { ColourOption } from '../types'

import BandSelector from '../components/BandSelector'
import CalculateButton from '../components/CalculateButton'
import ToleranceSelector from '../components/ToleranceSelector/'
import MultiplierSelector from '../components/MultiplierSelector/'
import ResultContainer from '../components/ResultContainer'

import '../App.css'

export default function Calculator() {
  const [resistance, setResistance] = useState<number | null>(null)

  const [selectedBandA, setSelectedBandA] =
    useState<SingleValue<ColourOption> | null>(null)

  const [selectedBandB, setSelectedBandB] =
    useState<SingleValue<ColourOption> | null>(null)

  const [selectedMultiplier, setSelectedMultiplier] =
    useState<SingleValue<ColourOption> | null>(null)

  const [selectedTolerance, setSelectedTolerance] =
    useState<SingleValue<ColourOption> | null>(null)

  const handleCalculateResistanceButtonClick = () => {
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

  const handleBandASelectorChange = (
    newValue: SingleValue<ColourOption> | MultiValue<ColourOption>
  ) => {
    setSelectedBandA(newValue as SingleValue<ColourOption>)
  }

  const handleBandBSelectorChange = (
    newValue: SingleValue<ColourOption> | MultiValue<ColourOption>
  ) => {
    setSelectedBandB(newValue as SingleValue<ColourOption>)
  }

  const handleMultiplierSelectorChange = (
    newValue: SingleValue<ColourOption> | MultiValue<ColourOption>
  ) => {
    setSelectedMultiplier(newValue as SingleValue<ColourOption>)
  }

  const handleToleranceSelectorChange = (
    newValue: SingleValue<ColourOption> | MultiValue<ColourOption>
  ) => {
    setSelectedTolerance(newValue as SingleValue<ColourOption>)
  }

  return (
    <div>
      <h1>Resistor Calculator</h1>
      <BandSelector
        options={FIRST_BANDS_OPTIONS}
        label="1st band of color"
        placeholder="Select band A Color"
        onChange={handleBandASelectorChange}
      />
      <BandSelector
        options={FIRST_BANDS_OPTIONS}
        label="2nd band of color"
        placeholder="Select band B Color"
        onChange={handleBandBSelectorChange}
      />
      <MultiplierSelector onChange={handleMultiplierSelectorChange} />
      <ToleranceSelector onChange={handleToleranceSelectorChange} />
      <div className="card">
        <CalculateButton
          label="Calculate Resistance"
          onClick={handleCalculateResistanceButtonClick}
        />
        <ResultContainer
          resistance={resistance}
          tolerance={selectedTolerance?.value}
        />
      </div>
    </div>
  )
}
