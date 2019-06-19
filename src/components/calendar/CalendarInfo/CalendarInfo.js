import React from 'react';
import monthNames from '../../../services/monthNames';
import s from './CalendarInfo.module.css';

const CalendarInfo = ({ date }) => (
  <div className={s.info}>{`${
    monthNames[date.getMonth()]
  } ${date.getFullYear()}`}</div>
);

export default CalendarInfo;
