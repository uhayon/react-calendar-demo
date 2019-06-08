import React from 'react';
import { connect } from 'react-redux';

import { today } from '../../utils/calendar';
import Modal from '../Modal';
import RemindersList from '../RemindersList';

import styles from './CalendarBody.module.scss';

class CalendarDay extends React.Component {
  state = { modalOpen: false };

  onDayClick = () => {
    this.openModal();
  }

  openModal = () => {
    this.setState({ modalOpen: true });
  }

  closeModal = () => {
    this.setState({ modalOpen: false });
  }

  render() {
    const { date, isFromCurrentMonth, remimders } = this.props;

    return (
      <>
        <div onClick={this.onDayClick} className={`${styles.calendarItem} ${!isFromCurrentMonth ? styles.inactive : ''}`}>
          <div className={`${styles.dayNumber} ${date.diff(today, 'days') === 0 ? styles.today : ''}`}>{date.date()}</div>
        </div>
        {
          this.state.modalOpen && 
          <Modal onDismiss={this.closeModal} showOverlay>
            <RemindersList date={date} reminders={remimders} />
          </Modal>
        }
      </>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const { reminders } = state;
  const { date } = ownProps;
  const thisDayHasReminders = reminders[date.year()] && reminders[date.year()][date.month()] && reminders[date.year()][date.month()][date.date()];

  return {
    reminders: thisDayHasReminders ? reminders[date.year()][date.month()][date.date()] : []
  }
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(CalendarDay);