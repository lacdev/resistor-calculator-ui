import clsx from 'clsx'

import styles from './ResultContainer.module.scss'

type ResultContainerProps = {
  resistance: number | null
  tolerance?: string | null
}

export const ResultContainer = ({
  resistance,
  tolerance,
}: ResultContainerProps) => {
  return (
    <div className={clsx(styles.resultContainer)}>
      {resistance && tolerance ? (
        <>
          <span className={styles.resultLabel}>Resistor Value: </span>
          <span
            className={styles.result}
          >{`${resistance} Ω ${tolerance}`}</span>
        </>
      ) : null}
    </div>
  )
}
