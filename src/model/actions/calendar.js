import {
  SET_NEXT_MONTH,
  SET_PREVIOUS_MONTH
} from '../constants';

export const setNextMonth = () => {
  return { type: SET_NEXT_MONTH };
};

export const setPreviousMonth = () => {
  return { type: SET_PREVIOUS_MONTH };
};