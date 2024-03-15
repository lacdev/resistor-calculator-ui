export const DROPDOWN_COLORS_MAP: Record<string, string> = {
  black: '#000000',
  brown: '#8B4513',
  red: '#FF0000',
  orange: '#FFA500',
  yellow: '#F3E01D',
  green: '#008000',
  blue: '#0000FF',
  violet: '#EE82EE',
  grey: '#808080',
  white: '#E7E7E7',
  gold: '#FFD700',
  silver: '#C0C0C0',
}

export const FIRST_BANDS_OPTIONS = [
  { label: 'black', value: '0', color: '#000000' },
  { label: 'brown', value: '1', color: '#8B4513' },
  { label: 'red', value: '2', color: '#FF0000' },
  { label: 'orange', value: '3', color: '#FFA500' },
  { label: 'yellow', value: '4', color: '#F3E01D' },
  { label: 'green', value: '5', color: '#008000' },
  { label: 'blue', value: '6', color: '#0000FF' },
  { label: 'violet', value: '7', color: '#EE82EE' },
  { label: 'grey', value: '8', color: '#808080' },
  { label: 'white', value: '9', color: '#E7E7E7' },
]

export const COLOR_CODE_MAP = new Map<string, number>([
  ['black', 0],
  ['brown', 1],
  ['red', 2],
  ['orange', 3],
  ['yellow', 4],
  ['green', 5],
  ['blue', 6],
  ['violet', 7],
  ['grey', 8],
  ['white', 9],
])

export const MULTIPLIER_MAP = new Map<string, number>([
  ['black', 1],
  ['brown', 10],
  ['red', 100],
  ['orange', 1000],
  ['yellow', 10000],
  ['green', 100000],
  ['blue', 1000000],
  ['violet', 10000000],
  ['gold', 0.1],
  ['silver', 0.01],
])
