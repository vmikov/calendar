import React from 'react';
import { connect } from 'react-redux';
import CalendarInfo from '../CalendarInfo';
import CalendarDayNames from '../CalendarDayNames';
import CalendarPanel from '../CalendarPanel';
import DataEditor from '../../dataEditor/DataEditor';
import * as calendarSelectors from '../../../store/calendar/selectors';
import * as calendarActions from '../../../store/calendar/actions';
import { openEditor as editor } from '../../../store/dataEditor/actions';
import {
  getCurrMonthDate,
  getPrevMonthDate,
  getNextMonthDate
} from '../../../services/calendar/generator';
import bs from '../../buttons/Button.module.css';
import s from './Calendar.module.css';

const Calendar = ({ date, calendar, dayNames, setDate, editor }) => (
  <div className={s.wrapper}>
    <div className={s.dashboard}>
      <button
        className={[bs.standard, s.controlButton].join(' ')}
        type='button'
        onClick={() => setDate(getPrevMonthDate(date))}
      >
        Назад
      </button>
      <button
        className={[bs.standard, s.controlButton].join(' ')}
        type='button'
        onClick={() => setDate(getCurrMonthDate())}
      >
        Сегодня
      </button>
      <button
        className={[bs.standard, s.controlButton].join(' ')}
        type='button'
        onClick={() => setDate(getNextMonthDate(date))}
      >
        Вперед
      </button>
    </div>
    <CalendarInfo date={date} />
    <div className={s.calendar}>
      <CalendarDayNames dayNames={dayNames} />
      <CalendarPanel calendar={calendar} editor={editor} />
    </div>
    <DataEditor />
  </div>
);

const mapStateToProps = state => ({
  date: calendarSelectors.getDate(state)
});

const mapDispatchToProps = {
  setDate: calendarActions.setCalendarMonth,
  editor
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
