import React from 'react';
import s from './CalendarCaption.module.css';

const CalendarCaption = ({ dayNames }) => (
  <>
    {dayNames.map(item => (
      <div key={item} className={s.dayName}>
        {item}
      </div>
    ))}
  </>
);

export default CalendarCaption;
