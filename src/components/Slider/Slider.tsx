import React, {  useState } from "react"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { Event } from "../../data/data"
import "./Slider.scss"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import SlideItem from "./SlideItem/SlideItem"
import { SlidePrevButton } from "./SlidePrevButton/SlidePrevButton"
import { SlideNextButton } from "./SlideNextButton/SlideNextButton"

type Props = {
  events: Event[]
  id: number
}

const Slider = ({ events, id }: Props) => {
  const [hidePrevButton, setHidePrevButton] = useState(true)
  const [hideNextButton, setHideNextButton] = useState(false)

  const onReachBeginningHandler = () => {
    setHideNextButton(false)
    setHidePrevButton(true)
  }

  const onReachEndHandler = () => {
    setHideNextButton(true)
    setHidePrevButton(false)
  }

  const onHidePrevButton = () => {
    setHidePrevButton(false)
  }
  const onHideNextButton = () => {
    setHideNextButton(false)
  }

  const slides = events.map((event) => (
    <SwiperSlide key={event.id}>
      <SlideItem date={event.date} description={event.description} />
    </SwiperSlide>
  ))

  return (
    <div className="slider" key={id}>
      <Swiper
        modules={[Pagination]}
        speed={1000}
        onReachBeginning={() => onReachBeginningHandler()}
        onReachEnd={() => onReachEndHandler()}
        spaceBetween={20}
        slidesPerView={1.5}
        pagination={{ clickable: true }}
        breakpoints={{
          400: {
            spaceBetween: 25,
            slidesPerView: 2,
          },
          768: {
            spaceBetween: 40,
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        }}
      >
        {!hidePrevButton && (
          <div className="prevButton">
            <SlidePrevButton onHideNextButton={onHideNextButton} />
          </div>
        )}

        {slides}

        {!hideNextButton && (
          <div className="nextButton">
            <SlideNextButton onHidePrevButton={onHidePrevButton} />
          </div>
        )}
      </Swiper>
    </div>
  )
}

export default Slider
