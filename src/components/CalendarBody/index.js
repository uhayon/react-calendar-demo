import React from 'react';
import { connect } from 'react-redux';

import { getMonthWeeks } from '../../utils/calendar';

import CalendarWeekRow from './CalendarWeekRow';
import styles from './CalendarBody.module.scss';

const CalendarBody = ({ weeks, reminders }) => {
  return (
    <div className={styles.calendarBody}>
      {
        weeks.map((week, weekNumber) => <CalendarWeekRow key={weekNumber} week={week} reminders={reminders} />)
      }
    </div>
  );
};

const mapStateToProps = ({ calendar, reminders }) => {
  const { selectedMonth, selectedYear} = calendar;
  return {
    weeks: getMonthWeeks({ month: selectedMonth, year: selectedYear }),
    reminders: reminders[selectedYear] && reminders[selectedYear][selectedMonth] ? reminders[selectedYear][selectedMonth] : []
  };
}

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(CalendarBody);