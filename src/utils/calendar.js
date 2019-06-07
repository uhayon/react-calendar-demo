import moment from 'moment';
import _ from 'lodash';

export const today = new Date();


export const months = moment.months();

export const daysNames = {
  shortNames: moment.weekdaysShort(),
  fullNames: moment.weekdays()
}

const getMomentDate = ({ month, year, day = 1 }) => {
  return moment(new Date(year, month, day, 0, 0, 0));
}

export const getMonthWeeks = ({ month, year }) => {
  const daysRange = [];
  let firstDayOfRange = getMomentDate({ month, year });
  let lastDayOfRange = firstDayOfRange.clone().add(1, 'month').subtract(1, 'days');

  while (firstDayOfRange.day() > 0) firstDayOfRange.subtract(1, 'days');
  
  while (lastDayOfRange.day() < 6) lastDayOfRange.add(1, 'days');

  while (firstDayOfRange.diff(lastDayOfRange, 'days') <= 0) {
    daysRange.push(firstDayOfRange);
    firstDayOfRange.add(1, 'days');
  };

  return _.chunk(daysRange, 7);
}