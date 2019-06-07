import React from 'react';

import CalendarDay from './CalendarDay';
import styles from './CalendarBody.module.scss';

const CalendarWeekRow = ({ week, reminders }) => {
  return (
    <div className={styles.calendarWeekRow}>
      {
        week.map(({ date, isFromCurrentMonth }) => (
          <CalendarDay 
            key={`${date.date()}_${date.month()}_${date.year()}`}
            date={date}
            isFromCurrentMonth={isFromCurrentMonth}
            reminders={reminders[date.date()]}
          />
        ))
      }
    </div>
  )
};

export default CalendarWeekRow;