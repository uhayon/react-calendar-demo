import {
  ADD_REMINDER
} from '../constants';

const initalState = {};

export default (state = initalState, action) => {
  switch(action.type) {
    case ADD_REMINDER:
      const { date, reminder } = action.payload;
      const selectedYearReminders = { ...state[date.year()] } || {};
      const selectedMonthReminders = { ...selectedYearReminders[date.month()] } || {};
      const selectedDayReminders = selectedMonthReminders[date.date()] || [];

      selectedDayReminders.push(reminder);
      return { 
        ...state, 
        [date.year()]: {
          ...selectedYearReminders,
          [date.month()]: {
            ...selectedMonthReminders,
            [date.date()]: selectedDayReminders
          }
        }
      };

    default:
      return state;
  }
}