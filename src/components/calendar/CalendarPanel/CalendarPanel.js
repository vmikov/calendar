import React from 'react';
import CalendarDay from '../CalendarDay';

const CalendarPanel = ({ calendar }) => (
  <>
    {calendar.map(item => (
      <CalendarDay
        key={item.date.getTime()}
        isCurrent={item.isCurrent}
        monthType={item.monthType}
        day={item.date.getDate()}
        notes={item.notes}
      />
    ))}
  </>
);

export default CalendarPanel;
