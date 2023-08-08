import React from "react"
import { useSwiper } from "swiper/react"
import s from "./SlidePrevButton.module.scss"

export const SlidePrevButton = () => {
  const swiper = useSwiper()
  return <button className={s.buttonPrev} onClick={() => swiper.slidePrev()}></button>
}
