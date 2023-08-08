import React from "react"
import s from "./Control.module.scss"

type Props = {
  setNextPeriod: () => void
  setPrevPeriod: () => void
  countPeriod: number
  currentPeriodId: number
}
const Control = ({ setNextPeriod, setPrevPeriod, currentPeriodId, countPeriod }: Props) => {
  const disableNextButton = countPeriod === currentPeriodId
  const disablePrevButton = currentPeriodId === 1

  return (
    <div className={s.control}>
      <button disabled={disablePrevButton} onClick={setPrevPeriod} className={s.buttonPrev}></button>
      <button disabled={disableNextButton} onClick={setNextPeriod} className={s.buttonNext}></button>
    </div>
  )
}

export default Control
