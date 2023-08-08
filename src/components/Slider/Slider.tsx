import React, {useState} from 'react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Event} from "../../data/data";
import './Slider.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SlideItem from "./SlideItem/SlideItem";
import {SlidePrevButton} from "./SlidePrevButton/SlidePrevButton";
import {SlideNextButton} from "./SlideNextButton/SlideNextButton";



type Props = {
  events: Event[]
}


const Slider = ({events}: Props) => {
const[hidePrevButton,setHidePrevButton]=useState(true)
const[hideNextButton,setHideNextButton]=useState(false)
  const onReachBeginningHandler=()=>{
  setHideNextButton(false)
    setHidePrevButton(true)
  }
  const  onReachEndHandler=()=>{
    setHideNextButton(true)
    setHidePrevButton(false)
  }

  const slides = events.map(event => <SwiperSlide key={event.id}>
    <SlideItem date={event.date} description={event.description}/>
  </SwiperSlide>)

  return (

    <div className='slider'>
      <Swiper

        // @ts-ignore
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        onReachBeginning={()=>onReachBeginningHandler()}
        onReachEnd={()=> onReachEndHandler()}
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
        {!hidePrevButton && <div className='prevButton'>
          <SlidePrevButton/>
        </div>}

        {slides}


        { !hideNextButton && <div className='nextButton'>
          <SlideNextButton/>
        </div>}


      </Swiper>
    </div>


  );
};


export default Slider;