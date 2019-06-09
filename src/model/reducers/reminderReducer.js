import _ from 'lodash';
import {
  ADD_REMINDER,
  EDIT_REMINDER,
  REMOVE_REMINDER
} from '../constants';

const initalState = {};

export default (state = initalState, action) => {
  switch(action.type) {
    case ADD_REMINDER:
      const selectedYearRemindersAdd = { ...state[action.payload.date.year()] } || {};
      const selectedMonthRemindersAdd = { ...selectedYearRemindersAdd[action.payload.date.month()] } || {};
      const selectedDayRemindersAdd = selectedMonthRemindersAdd[action.payload.date.date()] || {};

      selectedDayRemindersAdd[action.payload.time] = action.payload;

      return { 
        ...state, 
        [action.payload.date.year()]: {
          ...selectedYearRemindersAdd,
          [action.payload.date.month()]: {
            ...selectedMonthRemindersAdd,
            [action.payload.date.date()]: selectedDayRemindersAdd
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
    case REMOVE_REMINDER:
        const selectedYearRemindersEdit = { ...state[action.payload.date.year()] };
        const selectedMonthRemindersEdit = { ...selectedYearRemindersEdit[action.payload.date.month()] };
        const selectedDayRemindersEdit = { ...selectedMonthRemindersEdit[action.payload.date.date()] };

        return {
          ...state,
          [action.payload.date.year()]: {
            ...selectedYearRemindersEdit,
            [action.payload.date.month()]: {
              ...selectedMonthRemindersEdit,
              [action.payload.date.date()]: _.omit(selectedDayRemindersEdit, action.payload.time)
            }
          }
        }

    default:
      return state;
  }
}