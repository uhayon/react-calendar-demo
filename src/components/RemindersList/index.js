import React from 'react';
import ReminderItem from './ReminderItem';

const RemindersList = ({ reminders }) => {
  if (!reminders.length) {
    return <p>No reminders for this day</p>;
  };

  return (
    <div>
      {
        reminders.map(reminder => <ReminderItem {...reminder} />)
      }
    </div>
  )
};

export default RemindersList;