import React from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import ReminderForm from '../ReminderForm';
import RemindersList from '../RemindersList';
import { sortReminders } from '../../utils/reminders';

import styles from './DayRemindersModal.module.scss';

class DayRemindersModal extends React.Component {
  state = { visible: true };

  renderTitle = () => {
    const { date, reminders } = this.props;
    const remindersCount = reminders.length;
    const remindersText = remindersCount === 1 ? 'reminder' : 'reminders';

    return `${date.format('MM/DD/YYYY')} (${remindersCount} ${remindersText})`;
  }

  onDismissReminderForm = () => {
    this.setState({ visible: true })
  }

  render() {
    const { reminders } = this.props;

    if (!this.state.visible) {
      return (
        <Modal onDismiss={this.onDismissReminderForm}>
          <ReminderForm date={this.props.date} onConfirmSuccess={this.onDismissReminderForm} />
        </Modal>
      );
    }

    return (
      <div className={styles.dayRemindersModal}>
        <h3>{this.renderTitle()}</h3>
        <div>
          <RemindersList reminders={reminders} />
        </div>
        <button className={styles.addButton} onClick={() => this.setState({ visible: false })}>+</button>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DayRemindersModal);