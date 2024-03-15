export type Multiplier = {
  color: string
  multiplier: number
}

export type Tolerance = {
  color: string
  tolerance: string
}

export interface ColourOption {
  readonly value: string
  readonly label: string
  readonly color: string
  readonly isFixed?: boolean
  readonly isDisabled?: boolean
}

export type BandOption = {
  value: number
  label: string
  color: string
}

export type MultiplierOrToleranceOption = {
  value: string
  label: string
}
