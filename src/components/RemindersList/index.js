import React from 'react';
import ReminderItem from './ReminderItem';

import styles from './RemindersList.module.scss';

const RemindersList = ({ reminders }) => {
  if (!reminders.length) {
    return null;
  };

  return (
    <div className={styles.remindersList}>
      {
        reminders.map(reminder => <ReminderItem key={reminder.time} reminder={reminder} />)
      }
    </div>
  )
};

export default RemindersList;