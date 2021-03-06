import moment from 'moment';
import _ from 'lodash';

export const today = moment(new Date()).hours(0).minutes(0).seconds(0).milliseconds(0);

export const months = moment.months();

export const daysNames = {
  shortNames: moment.weekdaysShort(),
  fullNames: moment.weekdays()
}

export const getMonthWeeks = ({ month, year }) => {
  const daysRange = [];
  let currentDate = moment(new Date(year, month, 1, 0, 0, 0));
  let lastDayOfRange = currentDate.clone().add(1, 'month').subtract(1, 'days');

  while (currentDate.day() > 0) currentDate.subtract(1, 'days');
  
  while (lastDayOfRange.day() < 6) lastDayOfRange.add(1, 'days');

  while (currentDate.diff(lastDayOfRange, 'days') <= 0) {
    daysRange.push({
      date: currentDate.clone(),
      isFromCurrentMonth: currentDate.month() === month
    });
    currentDate.add(1, 'days');
  };

  return _.chunk(daysRange, 7);
}

export const getPreviousMonth = ({ month, year }) => {
  return month > 0 ? { selectedMonth: --month, selectedYear: year } : { selectedMonth: 11, selectedYear: --year } ;
}

export const getNextMonth = ({ month, year }) => {
  return month < 11 ? { selectedMonth: ++month, selectedYear: year } : { selectedMonth: 0, selectedYear: ++year } ;
}