import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Calendar from './components/calendar/Calendar';
import { getDate } from './store/calendar/selectors';
import getCalendar from './services/calendar/generator';
import dayNames from './services/calendar/dayNames';

function App({ date }) {
  return (
    <div className='App'>
      <Calendar calendar={getCalendar(date)} dayNames={dayNames} />
    </div>
  );
}

const mSTP = state => ({
  date: getDate(state)
});

export default connect(mSTP)(App);
