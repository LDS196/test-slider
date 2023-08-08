import React from "react"
import s from "./Period.module.scss"
import Round from "../Round/Round"
import LineGradient from "../LineGradient/LineGradient"
import Title from "../Title/Title"

const Period = () => {
  return (
    <div className={s.container}>
      <div className={s.lineHorizontal}></div>
      <div className={s.lineVertical}></div>
      <div className={s.lineGradient}>
        <LineGradient />
      </div>
      <div className={s.title}>
        <Title />
      </div>

      <Round />
    </div>
  )
}

export default Period
