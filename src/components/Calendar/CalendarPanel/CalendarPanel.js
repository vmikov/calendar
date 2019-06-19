import React from 'react';
import CalendarDay from '../CalendarDay';

const CalendarPanel = ({ calendar, editor }) => (
  <>
    {calendar.map(item => (
      <CalendarDay
        key={item.date.getTime()}
        isCurrent={item.isCurrent}
        monthType={item.monthType}
        date={item.date}
        data={item.data}
        editor={editor}
      />
    ))}
  </>
);

export default CalendarPanel;
