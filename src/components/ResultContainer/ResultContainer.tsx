type ResultContainerProps = {
  resistance: number | null
  tolerance?: string | null
}

export const ResultContainer = ({
  resistance,
  tolerance,
}: ResultContainerProps) => {
  return (
    <div className="result-container">
      {resistance && tolerance ? (
        <>
          <span className="result-label">Resistor Value: </span>
          <span className="result">{`${resistance} Ω ${tolerance}`}</span>
        </>
      ) : null}
    </div>
  )
}
