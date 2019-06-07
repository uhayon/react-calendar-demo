import { combineReducers } from 'redux';
import calendarReducer from './calendarReducer';
import reminderReducer from './reminderReducer';

export default combineReducers({
  calendar: calendarReducer,
  reminders: reminderReducer
});