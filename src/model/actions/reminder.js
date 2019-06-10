import {
  ADD_REMINDER,
  EDIT_REMINDER,
  REMOVE_REMINDER,
  REMOVE_ALL_DAY_REMINDERS
} from '../constants';

export const addReminder = reminder => {
  return { type: ADD_REMINDER, payload: reminder };
}

export const editReminder = reminder => {
  return { type: EDIT_REMINDER, payload: reminder };
}

export const removeReminder = reminder => {
  return { type: REMOVE_REMINDER, payload: reminder };
}

export const removeAllDayReminders = date => {
  return { type: REMOVE_ALL_DAY_REMINDERS, payload: date };
}