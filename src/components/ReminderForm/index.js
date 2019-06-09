import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import Field from './Field';
import { addReminder, editReminder, removeReminder } from '../../model/actions/index';
import { reminderTimes } from '../../utils/reminders';
import colors from './colors.json';
import styles from './ReminderForm.module.scss';

class ReminderForm extends React.Component {
  // state = this.props.reminder ? { ...this.props.reminder } : { text: '', color: '', city: '', time: '00:00', date: this.props.date || moment() };
  constructor(props) {
    super(props);
    const formValues = this.props.reminder ? { ...this.props.reminder } : { text: '', color: '', city: '', time: '00:00', date: this.props.date || moment() };

    this.state = {
      formValues,
      formErrors: {
        text: false,
        color: false,
        city: false
      }
    }
  }

  onInputChange = (property, value) => {
    this.setState(prevState => ({
      formValues: {
        ...prevState.formValues,
        [property]: value
      }
    }));
  }

  fieldsValid = () => {
    const { formValues: { text, city, color } } = this.state;
    const formErrors = { 
      city: city.trim() === '',
      text: text.trim() === '',
      color: color.trim() === ''
    };

    const formValid = Object.keys(formErrors).reduce((valid, key) => valid && !formErrors[key], true);

    if (!formValid) {
      this.setState({ formErrors });
    }

    return formValid;
  }

  onSubmitForm = event => {
    event.preventDefault();
    this.setState({
      formErrors: { 
        text: false,
        color: false,
        city: false
      }
    }, () => {
      if (this.fieldsValid()) {
        const { isCreation, addReminder, editReminder, removeReminder, onConfirmSuccess } = this.props;
  
        if (isCreation) {
          addReminder(this.state.formValues);
        } else {
          removeReminder(this.props.originalReminder);
          editReminder(this.state.formValues);
        }
        onConfirmSuccess();
      }
    })
  }

  render() {
    const { formErrors, formValues } = this.state;
    const { text, color, city, time, date } = formValues;

    return (
      <div className={styles.reminderForm}>
          <h2>{this.props.isCreation ? 'Create Reminder' : 'Edit Reminder'}</h2>
          <form className={styles.form} onSubmit={this.onSubmitForm}>
            <Field title='Date' value={date.format('YYYY-MM-DD')} onChange={event => this.onInputChange('date', moment(event.target.value))} type='date' disabled={this.props.originalReminder !== undefined} />
            <Field title='Time' value={time} onChange={event => this.onInputChange('time', event.target.value)} type='timePicker' options={reminderTimes} />
            <Field title='Text' value={text} onChange={event => this.onInputChange('text', event.target.value)} type='multilineText' errorState={formErrors.text} />
            <Field title='City' value={city} onChange={event => this.onInputChange('city', event.target.value)} type='text' errorState={formErrors.city} />
            <Field title='Color' value={color} onChange={color => this.onInputChange('color', color)} options={colors} type='colorPicker' errorState={formErrors.color} />
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

const mapDispatchToProps = { addReminder, editReminder, removeReminder };

export default connect(mapStateToProps, mapDispatchToProps)(ReminderForm);