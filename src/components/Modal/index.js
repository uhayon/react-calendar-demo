import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.scss';

const Modal = ({ children, onDismiss, showOverlay }) => {
  return ReactDOM.createPortal(
    <div onClick={onDismiss} className={`${styles.modalContainer} ${showOverlay ? styles.overlay : ''}`}>
      <div onClick={event => event.stopPropagation()} className={styles.modal}>
        <button onClick={onDismiss} className={styles.closeButton}>X</button>
        {children}
      </div>
    </div>,
    document.getElementById('rootModal')
  );
};

export default Modal;