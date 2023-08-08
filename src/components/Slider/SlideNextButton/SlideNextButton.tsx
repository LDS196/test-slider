import React from 'react';
import {useSwiper} from 'swiper/react';
import s from './SlideNextButton.module.scss'


export const SlideNextButton = () => {

  const swiper = useSwiper();

  return (
    <button
      className={s.buttonNext}
      onClick={() => swiper.slideNext()}
    >
    </button>
  );
}