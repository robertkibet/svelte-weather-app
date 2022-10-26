export const getLocationWeather = (latitude = 47.0, longitude = 23.0) => {
  return fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m`
  )
    .then((res) => res.json())
    .then((json) => json)
    .catch((error) => {
      console.error(error);
    });
};
