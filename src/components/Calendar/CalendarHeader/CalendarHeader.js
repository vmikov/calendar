import React from 'react';
import s from './CalendarHeader.module.css';

const CalendarDayNames = ({ dayNames }) => (
  <>
    {dayNames.map(item => (
      <div key={item} className={s.dayName}>
        {item}
      </div>
    ))}
  </>
);

export default CalendarDayNames;
