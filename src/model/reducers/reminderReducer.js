import {
  ADD_REMINDER,
  EDIT_REMINDER
} from '../constants';

const initalState = {};

export default (state = initalState, action) => {
  switch(action.type) {
    case ADD_REMINDER:
      const selectedYearReminders = { ...state[action.payload.date.year()] } || {};
      const selectedMonthReminders = { ...selectedYearReminders[action.payload.date.month()] } || {};
      const selectedDayReminders = selectedMonthReminders[action.payload.date.date()] || {};

      selectedDayReminders[action.payload.time] = action.payload;

      return { 
        ...state, 
        [action.payload.date.year()]: {
          ...selectedYearReminders,
          [action.payload.date.month()]: {
            ...selectedMonthReminders,
            [action.payload.date.date()]: selectedDayReminders
          }
        }
      };
    case EDIT_REMINDER:
      return {
        ...state,
        [action.payload.date.year()]: {
          ...state[action.payload.date.year()],
          [action.payload.date.month()]: {
            ...state[action.payload.date.year()][action.payload.date.month()],
            [action.payload.date.date()]: {
              ...state[action.payload.date.year()][action.payload.date.month()][action.payload.date.date()],
              [action.payload.time]: action.payload
            }
          }
        }
      }
    default:
      return state;
  }
}