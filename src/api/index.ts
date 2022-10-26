import {writable} from "svelte/store";

export const getLocationWeather = async (latitude = 47.0, longitude = 23.0) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?appid=07438d41f35d24ca8ebb29e808744518&lat=${latitude}&lon=${longitude}`;

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (e) {
    throw e;
  }
};

export const storedData = writable({
  loading: false,
  error: null,
  data: {},
});
