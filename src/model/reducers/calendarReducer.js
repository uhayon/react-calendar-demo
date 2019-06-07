import {
  CHANGE_MONTH,
  CHANGE_YEAR
} from '../constants';

const currentDate = new Date();
const initialState = {
  currentDate,
  selctedMonth: currentDate.getMonth(),
  selectedYear: currentDate.getFullYear()
}