import Select, { ActionMeta, SingleValue } from 'react-select'

type Option = {
  label: string
  value: string
  color?: string
}

type BandSelectorProps = {
  label: string
  options: Option[]
  isDisabled?: boolean
  onChange: (
    newValue: SingleValue<Option>,
    actionMeta: ActionMeta<Option>
  ) => void | undefined
  placeholder: string
}

const BandSelector = (props: BandSelectorProps) => {
  const { options, placeholder, label, isDisabled, onChange } = props

  return (
    <div className="select-option-container">
      {label && <label>{label}</label>}
      <Select
        options={options}
        placeholder={placeholder}
        onChange={onChange}
        isDisabled={isDisabled}
      />
    </div>
  )
}

export default BandSelector
