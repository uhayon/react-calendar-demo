import React from 'react';

import styles from './CalendarBody.module.scss';

const CalendarDay = ({ date, isFromCurrentMonth, remimders }) => {
  return (
    <div className={`${styles.calendarItem} ${!isFromCurrentMonth ? styles.inactive : ''}`}>
      {date.date()}
    </div>
  );
}

export default CalendarDay;