import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt, faStickyNote, faChartBar } from '@fortawesome/free-solid-svg-icons';

import Modal from '../Modal';
import ReminderForm from '../ReminderForm';

import styles from './RemindersList.module.scss';

class ReminderItem extends React.Component {
  state = { modalOpen: false };

  onShowReminderForm = event => {
    event.stopPropagation();
    this.setState({ modalOpen: true });
  }

  onHideReminderForm = () => {
    this.setState({ modalOpen: false });
  }

  render() {
    const { text, color, time, city, date, forecast } = this.props.reminder;

    return (
      <>
        <div className={styles.reminderItem} style={{backgroundColor: color}} onClick={this.onShowReminderForm}>
          <p>
            <FontAwesomeIcon icon={faClock} />
            <span>{time}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faStickyNote} />
            <span>{text}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>{city}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faChartBar} />
            <span>{forecast !== '' ? forecast : 'No forecast available'}</span>
          </p>
        </div>
        {
          this.state.modalOpen && 
          <Modal onDismiss={this.onHideReminderForm} showOverlay>
            <ReminderForm originalReminder={this.props.reminder} date={date} onConfirmSuccess={this.onHideReminderForm} />
          </Modal>
        }
      </>
    );
  }
};

export default ReminderItem;