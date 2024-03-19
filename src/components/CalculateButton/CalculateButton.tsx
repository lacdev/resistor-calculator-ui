import clsx from 'clsx'

import styles from './CalculateButton.module.scss'

type CalculateButtonProps = {
  disabled?: boolean
  onClick: () => void
  label: string
}

export const CalculateButton = (props: CalculateButtonProps) => {
  const { disabled, onClick, label } = props
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(styles.calculateButton)}
    >
      {label}
    </button>
  )
}
