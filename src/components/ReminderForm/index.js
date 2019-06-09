import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import Field from './Field';
import { addReminder, editReminder } from '../../model/actions/index';
import { reminderTimes } from '../../utils/reminders';
import colors from './colors.json';
import styles from './ReminderForm.module.scss';

class ReminderForm extends React.Component {
  state = this.props.reminder ? { ...this.props.reminder } : { text: '', color: '', city: '', time: '00:00', date: this.props.date || moment() };

  onInputChange = (property, value) => {
    this.setState({ [property]: value });
  }

  onSubmitForm = event => {
    event.preventDefault();
    const { isCreation, addReminder, editReminder, onConfirmSuccess } = this.props;
    isCreation ? addReminder(this.state) : editReminder(this.state);
    onConfirmSuccess();
  }

  render() {
    const { text, color, city, time, date } = this.state;

    return (
      <div className={styles.reminderForm}>
          <h2>{this.props.isCreation ? 'Create Reminder' : 'Edit Reminder'}</h2>
          <form className={styles.form} onSubmit={this.onSubmitForm}>
            <Field title='Date' value={date.format('YYYY-MM-DD')} onChange={event => this.onInputChange('date', moment(event.target.value))} type='date' />
            <Field title='Time' value={time} onChange={event => this.onInputChange('time', event.target.value)} type='timePicker' options={reminderTimes} />
            <Field title='Text' value={text} onChange={event => this.onInputChange('text', event.target.value)} type='multilineText' />
            <Field title='City' value={city} onChange={event => this.onInputChange('city', event.target.value)} type='text' />
            <Field title='Color' value={color} onChange={color => this.onInputChange('color', color)} options={colors} type='colorPicker' />
            <button className={styles.reminderConfirm}>Confirm</button>
          </form>
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  if (ownProps.originalReminder) {
    return {
      reminder: ownProps.originalReminder,
      isCreation: false
    }
  }

  return { isCreation: true };
};

const mapDispatchToProps = { addReminder, editReminder };

export default connect(mapStateToProps, mapDispatchToProps)(ReminderForm);