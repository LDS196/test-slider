import React, {useState} from 'react';
import s from './Round.module.scss'
import {data, Event} from '../../data/data'
import Control from "../Control/Control";
import Counter from "../Counter/Counter";
import Date from "../Date/Date";
import Slider from "../Slider/Slider";

const shift = 30 //первоначальное смещение
const fullRound = 360 // 360 градусов полный круг

const Round = () => {
  const countPeriod = data.length
  const [currentPeriodId, setCurrentPeriodId] = useState(1)
  const [prevPeriodId, setPrevPeriodId] = useState(1)
  const [onMouseOverId, setOnMouseOverId] = useState<null | number>(null)
  const [rotateRound, setRotateRound] = useState(0) // поворот круга при клике

  const currentPeriod = data.find(el => el.id === currentPeriodId)
  const events = currentPeriod?.events as Event[]

  const nextStartDate = currentPeriod?.startDate as number
  const nextEndDate = currentPeriod?.endDate as number

  const prevPeriod = data.find(el => el.id === prevPeriodId)
  const prevStartDate = prevPeriod?.startDate as number
  const prevEndDate = prevPeriod?.endDate as number
  const onMouseOverHandler = (id: number) => {
    if (!onMouseOverId && id !== currentPeriodId) {
      setOnMouseOverId(id)
    }
  }

  const setNextPeriod = () => {
    if (currentPeriodId < countPeriod) {
      setRotateRound(-fullRound / countPeriod * currentPeriodId)
      setCurrentPeriodId(prevState => prevState + 1)
      setPrevPeriodId(currentPeriodId)
    }
  }

  const setPrevPeriod = () => {
    if (1 < currentPeriodId) {
      setRotateRound(-fullRound / countPeriod * (currentPeriodId - 2))
      setCurrentPeriodId(prevState => prevState - 1)
      setPrevPeriodId(currentPeriodId)

    }
  }

  const onClickHandler = (id: number) => {
    setRotateRound(-fullRound / countPeriod * (id - currentPeriodId) + rotateRound)
    setCurrentPeriodId(id)
    setPrevPeriodId(currentPeriodId)
  }
  const styleRotateContainer = {transform: `rotate(${rotateRound}deg)`, transition: "all 600ms linear"} // стиль для поворота круга при клике

  const periodForRender = data.map((p, index) => {

    const delta = fullRound / countPeriod   //

    const rotate = index * delta + shift   // поворот каждого блока

    const styleBlock = {transform: `rotate(${rotate}deg)`}//стиль для поворота блока

    const styleActiveBlockText = {transform: `rotate(-${shift}deg)`} //стиль для поворота поворот текта в активном блоке

    const styleBlockText = {transform: `rotate(${-(shift + delta * (p.id - 1) + rotateRound)}deg)`} // стиль для поворота текта в неативных блоках


    return (

      <div
        onClick={() => onClickHandler(p.id)}
        onMouseLeave={() => setOnMouseOverId(null)}
        onMouseOver={() => onMouseOverHandler(p.id)}
        key={p.id}
        className={s.block}
        style={styleBlock}>
        {
          currentPeriodId === p.id
            ? <p style={styleActiveBlockText}>{p.id}<span className={s.title}>{p.title}</span></p>
            : p.id === onMouseOverId
              ? <p className={s.animeHover} style={styleBlockText}>{p.id}</p>
              : <div className={s.emptyBlock}></div>
        }

      </div>
    )
  })

  return (
    <div className={s.round}>
      <div className={s.wrapperDate}>
        <div className={s.date}>
          <Date
            nextStartDate={nextStartDate}
            nextEndDate={nextEndDate}
            prevStartDate={prevStartDate}
            prevEndDate={prevEndDate}
          />
        </div>
        <div className={s.container} style={styleRotateContainer}>
          {periodForRender}
        </div>
      </div>
      <div className={s.wrapperControl}>
        <Counter currentPeriodId={currentPeriodId} countPeriod={countPeriod}/>
        <Control currentPeriodId={currentPeriodId} countPeriod={countPeriod} setNextPeriod={setNextPeriod}
                 setPrevPeriod={setPrevPeriod}/>
      </div>


        <Slider events={events}/>

    </div>
  );
};

export default Round;