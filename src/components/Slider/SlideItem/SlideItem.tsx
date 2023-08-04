import React from 'react';
import s from './SlideItem.module.scss'

type Props = {
  description: string
  date: number
}
const SlideItem = ({description, date}: Props) => {
  return (
    <div className={s.item}>
      <div className={s.itemDate}>{date}</div>
      <div className={s.itemDescription}>
        {description}
      </div>

    </div>
  );
};

export default SlideItem;