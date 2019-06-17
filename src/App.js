import React from 'react';
import './App.css';
import Calendar from './components/calendar/Calendar';
import getCalendar from './services/calendar/engine';
import dayNames from './services/calendar/dayNames';

function App() {
  return (
    <div className='App'>
      <Calendar calendar={getCalendar()} dayNames={dayNames} />
    </div>
  );
}

export default App;
