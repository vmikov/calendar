import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Calendar from './components/Calendar';
import { getDate } from './store/calendar/selectors';
import { getData } from './store/data/selectors';
import getCalendar from './services/generator';
import dayNames from './services/dayNames';

function App({ date, data }) {
  return (
    <div className='App'>
      <Calendar calendar={getCalendar(date, data)} dayNames={dayNames} />
    </div>
  );
}

const mSTP = state => ({
  date: getDate(state),
  data: getData(state)
});

export default connect(mSTP)(App);
