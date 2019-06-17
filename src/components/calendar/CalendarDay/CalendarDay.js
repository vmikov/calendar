import React from 'react';
// import bs from '../../buttons/Button.module.css';
import s from './CalendarDay.module.css';

const CalendarDay = ({ isCurrent, monthType, day, notes }) => (
  <button
    className={[s[monthType], s.day, isCurrent ? s.current : ''].join(' ')}
  >
    <div className={s.info}>
      <div className={s.caption}>{day}</div>
      <div className={s.notes}>{notes}</div>
    </div>
  </button>
);

export default CalendarDay;
