import { today, getNextMonth, getPreviousMonth } from '../../utils/calendar';
import {
  SET_NEXT_MONTH,
  SET_PREVIOUS_MONTH
} from '../constants';

const initialState = {
  selectedMonth: today.month(),
  selectedYear: today.year()
};

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_NEXT_MONTH:
      return { ...state, ...getNextMonth({ month: state.selectedMonth, year: state.selectedYear }) };
    case SET_PREVIOUS_MONTH:
      return { ...state, ...getPreviousMonth({ month: state.selectedMonth, year: state.selectedYear }) };
    default:
      return state;
  }
};