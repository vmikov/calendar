import React from 'react';
import { connect } from 'react-redux';
import CalendarInfo from './CalendarInfo';
import CalendarHeader from './CalendarHeader';
import CalendarPanel from './CalendarPanel';
import DataEditor from '../DataEditor';
import StandardButton from '../buttons/StandardButton';
import * as calendarSelectors from '../../store/calendar/selectors';
import * as calendarActions from '../../store/calendar/actions';
import { openEditor as editor } from '../../store/dataEditor/actions';
import {
  getCurrMonthDate,
  getPrevMonthDate,
  getNextMonthDate
} from '../../services/generator';
import s from './Calendar.module.css';

const Calendar = ({ date, calendar, dayNames, setDate, editor }) => (
  <div className={s.wrapper}>
    <div className={s.dashboard}>
      <StandardButton onClick={() => setDate(getPrevMonthDate(date))}>
        Назад
      </StandardButton>
      <StandardButton onClick={() => setDate(getCurrMonthDate())}>
        Сегодня
      </StandardButton>
      <StandardButton onClick={() => setDate(getNextMonthDate(date))}>
        Вперед
      </StandardButton>
    </div>
    <CalendarInfo date={date} />
    <div className={s.calendar}>
      <CalendarHeader dayNames={dayNames} />
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
