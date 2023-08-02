import React, {useEffect, useState} from 'react';
import s from './Date.module.scss'

type Props = {
  nextStartDate: number
  nextEndDate: number
  prevStartDate: number
  prevEndDate: number
}
const timeAnimation = 600

const Date = ({nextStartDate, nextEndDate, prevStartDate, prevEndDate}: Props) => {

  const time = Math.floor(timeAnimation / Math.abs(nextStartDate - prevStartDate))

  const [currentStartDate, setCurrentStartDate] = useState(prevStartDate)
  const [currentEndDate, setCurrentEndDate] = useState(prevEndDate)


  useEffect(() => {

    let timeoutId: ReturnType<typeof setInterval>
    if (currentStartDate === nextStartDate) {
      return
    }
    if (currentStartDate < nextStartDate) {
      timeoutId = setTimeout(() => {
        setCurrentStartDate(prevState => prevState + 1)
      }, time)
    }

    if (nextStartDate < currentStartDate) {
      timeoutId = setTimeout(() => {
        setCurrentStartDate(prevState => prevState - 1)
      }, time)
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [currentStartDate, nextStartDate,time])

  useEffect(() => {

    let timeoutId2: ReturnType<typeof setInterval>
    if (currentEndDate === nextEndDate) {
      return
    }
    if (currentEndDate < nextEndDate) {
      timeoutId2 = setTimeout(() => {
        setCurrentEndDate(prevState => prevState + 1)
      }, time)
    }

    if (nextEndDate < currentEndDate) {
      timeoutId2 = setTimeout(() => {
        setCurrentEndDate(prevState => prevState - 1)
      }, time)
    }

    return () => {
      clearTimeout(timeoutId2)
    }
  }, [currentEndDate, nextEndDate,time])

  return (
    <div className={s.date}>
      <span className={s.startDate}>{currentStartDate}</span>
      <span className={s.endDate}>{currentEndDate}</span>
    </div>
  );
};

export default Date;