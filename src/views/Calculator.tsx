import { useState } from 'react'
import { SingleValue } from 'react-select'

import {
  COLOR_CODE_MAP,
  FIRST_BANDS_OPTIONS,
  MULTIPLIER_MAP,
} from '../constants/calculator'

import { ResistorOhmCalculator } from '../models/ResistorOhmCalculator'
import { ColourOption, MultiplierOrToleranceOption } from '../types'

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
    useState<MultiplierOrToleranceOption | null>(null)

  const [selectedTolerance, setSelectedTolerance] =
    useState<MultiplierOrToleranceOption | null>(null)

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

  return (
    <div>
      <h1>Resistor Calculator</h1>
      <BandSelector
        options={FIRST_BANDS_OPTIONS}
        label="1st band of color"
        placeholder="Select band A Color"
        onChange={(newValue) => {
          setSelectedBandA(newValue as SingleValue<ColourOption>)
        }}
      />
      <BandSelector
        options={FIRST_BANDS_OPTIONS}
        label="2nd band of color"
        placeholder="Select band B Color"
        onChange={(newValue) => {
          setSelectedBandB(newValue as SingleValue<ColourOption>)
        }}
      />
      <MultiplierSelector onChange={setSelectedMultiplier} />
      <ToleranceSelector onChange={setSelectedTolerance} />
      <div className="card">
        <CalculateButton
          label="Calculate Resistance"
          onClick={handleCalculateResistanceButtonClick}
        />
        <ResultContainer
          resistance={resistance}
          tolerance={selectedTolerance}
        />
      </div>
    </div>
  )
}
