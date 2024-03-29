import React, { useState, useEffect } from 'react';
import axios, {isCancel, AxiosError} from 'axios';

const API_KEY = "5fe77f8c30944cd8972195827242903"

export function useWeather() {
    const [weatherInfo, setWeatherInfo] = useState()
    const [errorMessage, setErrorMessage] = useState()

  const refreshWeatherInfo = async (city) => {
    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
      setWeatherInfo(response.data);
      setErrorMessage('');
    } catch (err) {
      console.error('Error fetching weather data:', err);
      setErrorMessage('Error fetching weather data');
    }
  };

    return {
        weatherInfo,
        errorMessage,
        refreshWeatherInfo
    }
}
