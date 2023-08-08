import React from "react"
import { useSwiper } from "swiper/react"
import s from "./SlidePrevButton.module.scss"
type Props = {
  onHideNextButton: () => void
}
export const SlidePrevButton = ({ onHideNextButton }: Props) => {
  const swiper = useSwiper()
  return (
    <button
      className={s.buttonPrev}
      onClick={() => {
        onHideNextButton()
        swiper.slidePrev()
      }}
    ></button>
  )
}
