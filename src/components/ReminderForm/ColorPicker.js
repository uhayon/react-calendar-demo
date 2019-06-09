import React from 'react';

import styles from './ReminderForm.module.scss';

const ColorPicker = ({ onColorClick, selectedColor, colors }) => {
  return (
    <div className={styles.colorsContainer}>
      {
        colors.map(color => (
          <div 
            key={color} 
            style={{backgroundColor: color}} 
            className={`${styles.colorItem} ${selectedColor === color ? styles.active : ''}`}
            onClick={() => onColorClick(color)}
          />
        ))
      }
    </div>
  )
};

export default ColorPicker;