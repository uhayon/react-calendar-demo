import React from 'react';
import { connect } from 'react-redux';

import { sortReminders } from '../../utils/reminders';
import Modal from '../Modal';
import DayRemindersModal from '../DayRemindersModal';
import CalendarDayContent from './CalendarDayContent'

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
    const { date, isFromCurrentMonth, reminders } = this.props;

    return (
      <>
        <CalendarDayContent 
          onDayClick={this.onDayClick}
          isFromCurrentMonth={isFromCurrentMonth}
          reminders={reminders}
          date={date}
        />
        {
          this.state.modalOpen && 
          <Modal onDismiss={this.closeModal} showOverlay>
            <DayRemindersModal date={date} />
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

  const foundReminders = thisDayHasReminders ? reminders[date.year()][date.month()][date.date()] : {};

  return {
    reminders: sortReminders(foundReminders)
  }
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(CalendarDay);