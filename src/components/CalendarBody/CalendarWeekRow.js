import React from 'react';

import CalendarDay from './CalendarDay';
import styles from './CalendarBody.module.scss';

const CalendarWeekRow = ({ week }) => {
  return (
    <div className={styles.calendarWeekRow}>
      {
        week.map(({ date, isFromCurrentMonth }) => (
          <CalendarDay 
            key={`${date.date()}_${date.month()}_${date.year()}`}
            date={date}
            isFromCurrentMonth={isFromCurrentMonth}
          />
        ))
      }
    </div>
  )
};

export default CalendarWeekRow;