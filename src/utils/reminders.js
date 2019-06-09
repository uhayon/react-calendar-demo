import moment from 'moment';
import { getForecast } from '../api/openWeatherMap';

const _reminderTimes = () => {
  const times = [];
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 4; j++) {
      const minutes = j * 15;
      times.push(moment().hours(i).minutes(minutes).format('HH:mm'));
    }
  }

  return times;
};
export const reminderTimes = _reminderTimes();

export const sortReminders = reminders => {
  return Object.keys(reminders).sort().reduce(
    (orderedReminders, reminderTime) => {
      orderedReminders.push(reminders[reminderTime]);
      return orderedReminders;
    }, []
  );
}

export const searchForecast = async city => {
  const response = await getForecast(city);
  return response;
}