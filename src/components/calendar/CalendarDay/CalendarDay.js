import React from 'react';
import s from './CalendarDay.module.css';

const CalendarDay = ({ isCurrent, monthType, day, data }) => (
  <button
    className={[s[monthType], s.day, isCurrent ? s.current : ''].join(' ')}
  >
    <div className={s.info}>
      <div className={s.caption}>{day}</div>
      <div className={s.data}>{data}</div>
    </div>
  </button>
);

export default CalendarDay;
