import React from 'react';

import ColorPicker from './ColorPicker';
import styles from './ReminderForm.module.scss';

const Input = ({ type, onChange, value, options }) => {
  switch (type) {
    case 'multilineText':
      return <textarea className={styles.field} cols='30' rows='10' value={value} onChange={onChange} maxLength='30' />;
    case 'colorPicker':
      return <ColorPicker colors={options} onColorClick={onChange} selectedColor={value} />;
    case 'timePicker':
      return (
        <select value={value} onChange={onChange} className={styles.field}>
          {
            options.map(option => <option key={option} value={option}>{option}</option>)
          }
        </select>
      )
    default:
      return <input className={styles.field} type={type} value={value} onChange={onChange} />;
  }
}

const Field = ({ title, type, value, onChange, options }) => {
  return (
    <label className={styles.fieldLabel}>
      {title}
      <Input type={type} value={value} onChange={onChange} options={options} />
    </label>
  )
};

export default Field;