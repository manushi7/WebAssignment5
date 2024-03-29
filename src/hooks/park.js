import React, { useState, useEffect } from 'react';
import axios, {isCancel, AxiosError} from 'axios';

const API_KEY = "rCvx9VQ8Jgc4IggROXRQWxpjhCYkaUFbZE4mp3vK"

export function usePark() {
    const [thingsToDo, setThingsToDo] = useState([]);
    const [errorMessage, setErrorMessage] = useState()

  const refreshParkInfo = async (stateCode) => {
    try {
      const response = await axios.get(`https://developer.nps.gov/api/v1/thingstodo?stateCode=${stateCode}&api_key=${API_KEY}`);
      setThingsToDo(response.data.data);
      setErrorMessage('');
    } catch (err) {
      console.error('Error fetching things to do:', err);
      setErrorMessage('Error fetching things to do');
    }
  };

    return {
        thingsToDo,
        errorMessage,
        refreshParkInfo
    }
}
