import React from 'react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import {useSwiper} from 'swiper/react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Event} from "../../data/data";
import './Slider.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SlideItem from "./SlideItem/SlideItem";
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

    <div className='slider'>
      <Swiper

        // @ts-ignore
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1.5}
        pagination={
          {clickable: true,}
        }
        breakpoints={{
          400: {
            spaceBetween: 25,
            slidesPerView:2
          },
          768: {
            spaceBetween: 40,
            slidesPerView:2
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 80,

          },

        }}
      >
        <div className='prevButton'>
          <SlidePrevButton/>
        </div>

        {slides}


        <div className='nextButton'>
          <SlideNextButton/>
        </div>


      </Swiper>
    </div>


  );
};


export default Slider;