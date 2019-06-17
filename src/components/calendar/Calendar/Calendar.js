import React from 'react';
import CalendarCaption from '../CalendarCaption';
import CalendarPanel from '../CalendarPanel';
import s from './Calendar.module.css';

const Calendar = ({ calendar, dayNames }) => (
  <div className={s.wrapper}>
    <div className={s.dashboard}>
      <button className={s.controlButton} type='button'>
        Назад
      </button>
      <button className={s.controlButton} type='button'>
        Сегодня
      </button>
      <button className={s.controlButton} type='button'>
        Вперед
      </button>
    </div>
    <div className={s.calendar}>
      <CalendarCaption dayNames={dayNames} />
      <CalendarPanel calendar={calendar} />
    </div>
  </div>
);

export default Calendar;
