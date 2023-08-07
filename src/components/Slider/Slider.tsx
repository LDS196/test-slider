import React from 'react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import {useSwiper} from 'swiper/react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Event} from "../../data/data";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SlideItem from "./SlideItem/SlideItem";
import s from './Slider.module.scss'
import {SlidePrevButton} from "./SlidePrevButton/SlidePrevButton";
import SlideNextButton from "./SlideNextButton/SlideNextButton";


type Props = {
  events: Event[]
}


const Slider = ({events}: Props) => {
  const swiper = useSwiper();
  console.log(swiper)

  const slides = events.map(event => <SwiperSlide key={event.id}>
    <SlideItem date={event.date} description={event.description}/>
  </SwiperSlide>)

  return (

    <div className={s.slider}>
      <Swiper

        // @ts-ignore
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={80}
        slidesPerView={3}
        // navigation
        breakpoints
        onSwiper={(swiper) => console.log(swiper.activeIndex)}
        onSlideChange={() => console.log('slide change')}
      >
        <div className={s.prevButton}>
          <SlidePrevButton/>
        </div>

       {slides}


        <div className={s.nextButton}>
          <SlideNextButton/>
        </div>


      </Swiper>
    </div>


  );
};


export default Slider;