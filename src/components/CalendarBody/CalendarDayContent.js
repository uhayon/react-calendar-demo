import React from 'react';

import RemindersList from '../RemindersList';
import { today } from '../../utils/calendar';
import styles from './CalendarBody.module.scss';

const CalendarDayContent = ({ onDayClick, isFromCurrentMonth, date, reminders }) => {
  return (
    <div 
      className={`${styles.calendarItem} ${!isFromCurrentMonth ? styles.inactive : ''}`}
      onClick={onDayClick} >
      <div className={`${styles.dayNumber} ${date.diff(today, 'days') === 0 ? styles.today : ''}`}>
        <span>{date.date()}</span>
      </div>
      <RemindersList reminders={reminders} />
    </div>
  );
}

export default CalendarDayContent;