import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt, faStickyNote, faChartBar, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import Modal from '../Modal';
import ReminderForm from '../ReminderForm';
import { removeReminder } from '../../model/actions';

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

  onDeleteReminder = () => {
    const { removeReminder, reminder } = this.props;
    removeReminder(reminder);
  }

  render() {
    const { text, color, time, city, date, forecast } = this.props.reminder;

    return (
      <>
        <div className={styles.reminderItem} style={{backgroundColor: color}} onClick={this.onShowReminderForm}>
          <button className={styles.deleteReminder} onClick={this.onDeleteReminder}>
            <FontAwesomeIcon icon={faTrashAlt} />
            Delete
          </button>
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

const mapStateToProps = null;
const mapDispatchToProps = { removeReminder };

export default connect(mapStateToProps, mapDispatchToProps)(ReminderItem);