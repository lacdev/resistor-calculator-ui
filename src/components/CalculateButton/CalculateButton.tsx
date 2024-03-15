type CalculateButtonProps = {
  disabled?: boolean
  onClick: () => void
  label: string
}

export const CalculateButton = (props: CalculateButtonProps) => {
  const { disabled, onClick, label } = props
  return (
    <button disabled={disabled} onClick={onClick} className="calculate-button">
      {label}
    </button>
  )
}
