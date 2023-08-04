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


type Props = {
  events: Event[]
}

const Slider = ({events}: Props) => {

  return (
    <div className={s.slider}>
      <SlidePrevButton/>
      <Swiper

        // @ts-ignore
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={50}
        slidesPerView={3}
        // navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >

        {events.map(event => <SwiperSlide key={event.id}><SlideItem date={event.date} description={event.description}/></SwiperSlide>)}
        <SlideNextButton/>


      </Swiper>

    </div>
  );
};


 export function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
  );
}

export default Slider;