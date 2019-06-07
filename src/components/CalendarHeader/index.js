import React from 'react';
import { connect } from 'react-redux';

import { setNextMonth, setPreviousMonth } from '../../model/actions';
import { months } from '../../utils/calendar';
import styles from './CalendarHeader.module.scss';

const CalendarHeader = ({ selectedMonth, selectedYear, setNextMonth, setPreviousMonth }) => {
  return (
    <div className={styles.calendarHeader}>
      <button onClick={setPreviousMonth}>{`<`}</button>
      <div>{`${months[selectedMonth]} / ${selectedYear}`}</div>
      <button onClick={setNextMonth}>{`>`}</button>
    </div>
  );
};

const mapStateToProps = ({ calendar }) => {
  return {
    selectedMonth: calendar.selectedMonth,
    selectedYear: calendar.selectedYear
  }
};

const mapDispatchToProps = { setNextMonth, setPreviousMonth };

export default connect(mapStateToProps, mapDispatchToProps)(CalendarHeader);