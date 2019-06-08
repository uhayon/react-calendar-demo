import React from 'react';
import { connect } from 'react-redux';

import { getMonthWeeks, daysNames } from '../../utils/calendar';
import { useWindowWidthSmall } from '../customHooks';

import CalendarWeekRow from './CalendarWeekRow';
import styles from './CalendarBody.module.scss';

const CalendarBody = ({ weeks, reminders }) => {

  const daysTitles = useWindowWidthSmall() ? daysNames.shortNames : daysNames.fullNames;

  return (
    <div className={styles.calendarBody}>
      <div className={styles.calendarDaysTitleContainer}>
        {
          daysTitles.map(day => <div className={styles.dayTitle} key={day}>{day}</div>)
        }
      </div>
      <div className={styles.calendarWeeksContainer}>
        {
          weeks.map((week, weekNumber) => <CalendarWeekRow key={weekNumber} week={week} reminders={reminders} />)
        }
      </div>
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