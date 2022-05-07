import { ThemeObjectTypes, PointerProps } from '../types/types'

export const pointers: PointerProps = {
  ascending: '\u2191',
  descending: '\u2193',
}

export const themes: ThemeObjectTypes = {
  dark: {
    '--main-bg-color': '#212529',
    '--main-text-color': 'white',
    '--main-bs-class': 'black',
    '--main-input-text': 'black',
  },
  light: {
    '--main-bg-color': '#FFEBCD',
    '--main-text-color': 'black',
    '--main-bs-class': 'white',
    '--main-input-text': '#E9ECEF',
  },
}
