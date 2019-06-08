import React from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';

import styles from './RemindersList.module.scss';

class RemindersList extends React.Component {
  state = { visible: true };

  renderTitle = () => {
    const { date, reminders } = this.props;
    const remindersCount = reminders.length;
    const remindersText = remindersCount === 1 ? 'reminder' : 'reminders';

    return `${date.format('MM/DD/YYYY')} (${remindersCount} ${remindersText})`;
  }

  render() {
    const { reminders } = this.props;

    if (!this.state.visible) {
      return <Modal onDismiss={() => this.setState({ visible: true })}>sadasd</Modal>;
    }

    return (
      <div className={styles.remindersList}>
        <h3>{this.renderTitle()}</h3>
        <div>
          {
            reminders && reminders.length ?
            'Hay reminders' :
            <p>No reminders for this day</p>
          }
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

  return {
    reminders: thisDayHasReminders ? reminders[date.year()][date.month()][date.date()] : []
  }
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(RemindersList);