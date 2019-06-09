import {
  ADD_REMINDER,
  EDIT_REMINDER
} from '../constants';

export const addReminder = reminder => {
  return { type: ADD_REMINDER, payload: reminder };
}

export const editReminder = reminder => {
  return { type: EDIT_REMINDER, payload: reminder };
}