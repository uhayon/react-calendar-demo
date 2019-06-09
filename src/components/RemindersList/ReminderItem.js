import React from 'react';

const ReminderItem = ({ text, color, time, city }) => {
  return (
    <div style={{backgroundColor: color}}>
      <p>{time}</p>
      <p>{text}</p>
    </div>
  )
};

export default ReminderItem;