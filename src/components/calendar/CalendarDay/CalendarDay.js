import React from 'react';
import s from './CalendarDay.module.css';

const CalendarDay = ({ isCurrent, monthType, date, data, editor }) => (
  <button
    className={[s[monthType], s.day, isCurrent ? s.current : ''].join(' ')}
    onClick={() => editor(date, data)}
  >
    <div className={s.info}>
      <div className={s.caption}>{date.getDate()}</div>
      <div className={[s.data, data ? s.filled : ''].join(' ')}>
        <pre className={s.formatter}>{data}</pre>
      </div>
    </div>
  </button>
);

export default CalendarDay;
