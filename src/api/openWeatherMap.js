import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  params: {
    appid: '71537e9c0483dc4aa421eb4f7e66cdd5'
  }
});

const executeRequest = async ({ url, options }) => {
  try {
    const response = await axiosClient.get(url, options);
    const [mainWeather] = response.data.weather;
    return mainWeather.main;
  } catch (ex) {
    return '';
  }
}

export const getForecast = async city => {
  const response = await executeRequest({
    url: '/weather',
    options: {
      params: {
        q: city
      }
    }
  });
  return response;
}