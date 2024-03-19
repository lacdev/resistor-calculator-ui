import Select, {
  ActionMeta,
  MultiValue,
  SingleValue,
  StylesConfig,
} from 'react-select'
import chroma from 'chroma-js'
import clsx from 'clsx'

import { ColourOption } from '../../types'

import styles from './BandSelector.module.scss'

type BandSelectorProps = {
  label: string
  options: ColourOption[]
  isDisabled?: boolean
  onChange:
    | ((
        newValue: SingleValue<ColourOption> | MultiValue<ColourOption>,
        actionMeta: ActionMeta<ColourOption>
      ) => void)
    | undefined
  placeholder: string
}

const BandSelector = (props: BandSelectorProps) => {
  const { options, placeholder, label, isDisabled, onChange } = props

  // This code comes from the library itself.
  // https://react-select.com/styles

  const dot = (color = 'transparent') => ({
    alignItems: 'center',
    display: 'flex',

    ':before': {
      backgroundColor: color,
      borderRadius: 10,
      content: '" "',
      display: 'block',
      marginRight: 8,
      height: 10,
      width: 10,
    },
  })

  const colourStyles: StylesConfig<ColourOption> = {
    control: (styles) => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color)
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? data.color
          : isFocused
          ? color.alpha(0.1).css()
          : undefined,
        color: isDisabled
          ? '#ccc'
          : isSelected
          ? chroma.contrast(color, 'white') > 2
            ? 'white'
            : 'black'
          : data.color,
        cursor: isDisabled ? 'not-allowed' : 'default',

        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled
            ? isSelected
              ? data.color
              : color.alpha(0.3).css()
            : undefined,
        },
      }
    },
    input: (styles) => ({ ...styles, ...dot() }),
    placeholder: (styles) => ({ ...styles, ...dot('#fff') }),
    singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
  }

  return (
    <div className={clsx(styles.selectOptionContainer)}>
      {label && <label>{label}</label>}
      <Select
        options={options}
        placeholder={placeholder}
        onChange={onChange}
        isDisabled={isDisabled}
        styles={colourStyles}
      />
    </div>
  )
}

export default BandSelector
