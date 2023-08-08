import React from "react"
import { useSwiper } from "swiper/react"
import s from "./SlideNextButton.module.scss"
type Props = {
  onHidePrevButton: () => void
}
export const SlideNextButton = ({ onHidePrevButton }: Props) => {
  const swiper = useSwiper()

  return (
    <button
      className={s.buttonNext}
      onClick={() => {
        onHidePrevButton()
        swiper.slideNext()
      }}
    ></button>
  )
}
