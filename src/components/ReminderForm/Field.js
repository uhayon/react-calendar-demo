import React from 'react';

import ColorPicker from './ColorPicker';
import styles from './ReminderForm.module.scss';

const Input = ({ type, onChange, value, options, errorState, disabled }) => {
  switch (type) {
    case 'multilineText':
      return <textarea className={`${styles.field} ${errorState ? styles.fieldError : ''}`} cols='30' rows='10' value={value} onChange={onChange} maxLength='30' disabled={disabled} />;
    case 'colorPicker':
      return <div style={{padding: '1em'}} className={`${styles.field} ${errorState ? styles.fieldError : ''}`}><ColorPicker colors={options} onColorClick={onChange} selectedColor={value} errorState={errorState} disabled={disabled} /></div>;
    case 'timePicker':
      return (
        <select value={value} onChange={onChange} className={styles.field} disabled={disabled} >
          {
            options.map(option => <option key={option} value={option}>{option}</option>)
          }
        </select>
      )
    default:
      return <input className={`${styles.field} ${errorState ? styles.fieldError : ''}`} type={type} value={value} onChange={onChange} disabled={disabled} />;
  }
}

const Field = ({ title, type, value, onChange, options, errorState, disabled }) => {
  return (
    <label className={styles.fieldLabel}>
      {title}
      <Input type={type} value={value} onChange={onChange} options={options} errorState={errorState} disabled={disabled} />
    </label>
  )
};

export default Field;