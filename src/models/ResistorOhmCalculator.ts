export interface IOHMValueCalculator {
  calculateOhmValue(
    bandAColor: string,
    bandBColor: string,
    bandCColor: string
  ): number
}

export class ResistorOhmCalculator implements IOHMValueCalculator {
  private colorCodeMap: Map<string, number>
  private multiplierMap: Map<string, number>

  constructor(
    colorCodeMap: Map<string, number>,
    multiplierMap: Map<string, number>
  ) {
    this.colorCodeMap = colorCodeMap
    this.multiplierMap = multiplierMap
  }

  public calculateOhmValue(
    bandAColor: string,
    bandBColor: string,
    bandCColor: string
  ): number {
    const firstDigit = this.colorCodeMap.get(bandAColor.toLowerCase())
    const secondDigit = this.colorCodeMap.get(bandBColor.toLowerCase())
    const multiplier = this.multiplierMap.get(bandCColor.toLowerCase())

    if (
      firstDigit === undefined ||
      secondDigit === undefined ||
      multiplier === undefined
    ) {
      throw new Error('Invalid color code')
    }

    const resistance = (firstDigit * 10 + secondDigit) * multiplier

    return resistance
  }
}
