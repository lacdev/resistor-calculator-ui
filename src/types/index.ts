export type Multiplier = {
  id: number
  color: string
  multiplier: number
}

export type Tolerance = {
  id: number
  color: string
  tolerance: string
}

export type ColourOption = {
  value: string
  label: string
  color: string
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
