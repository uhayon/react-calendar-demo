import moment from 'moment';
import * as actions from '../model/actions';
import * as types from '../model/constants';
import reducer from '../model/reducers/reminderReducer';

describe('Create a reminder', () => {
  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({})
  });

  it('Should handle ADD_REMINDER', () => {
    const today = moment();
    const reminder = {
      city: 'Buenos Aires',
      forecast: 'Sunny',
      text: 'This text is from a test case',
      color: 'red',
      time: '14:30',
      date: today
    };

    const expectedState = {
      [today.year()]: {
        [today.month()]: {
          [today.date()]: {
            '14:30': reminder
          }
        }
      }
    };

    expect(
      reducer({}, {
        type: types.ADD_REMINDER,
        payload: reminder
      })
    ).toEqual(expectedState)
  });
})