import {
  CHANGE_MONTH,
  CHANGE_YEAR
} from '../constants';

const currentDate = new Date();
const initialState = {
  currentDate,
  selctedMonth: currentDate.getMonth(),
  selectedYear: currentDate.getFullYear()
};

export default (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_MONTH:
      return { ...state, selctedMonth: action.payload };
    case CHANGE_YEAR:
      return { ...state, selectedYear: action.payload };
    default:
      return state;
  }
};