import React from 'react';
import s from './Counter.module.scss'
type Props = {
  countPeriod:number
  currentPeriodId: number
}
const  Counter = ({currentPeriodId,countPeriod}: Props) => {

  const counter = `0${currentPeriodId}/0${countPeriod}`
  return (
    <div className={s.counter}>
      {counter}
    </div>
  );
};

export default Counter;