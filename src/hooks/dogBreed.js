import React, { useState, useEffect } from 'react';
import axios, {isCancel, AxiosError} from 'axios';

const API_KEY = "live_9FzuR02PQTRO7Z3HIRzOstLHwrQQlil95jsWSJchKbnxutUnKgSfnu5mRfFkh1oX"

export function useDogBreed() {
    const [dogInfo, setDogInfo] = useState(null);
    const [errorMessage, setErrorMessage] = useState()

  const refreshDogInfo = async (breed) => {
    try {
      const response = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${breed}&api_key=${API_KEY}`);
      if (response.data.length > 0) {
        const breedId = response.data[0].id;
        const imageResponse = await axios.get(`https://api.thedogapi.com/v1/images/search?breed_id=${breedId}&api_key=YOUR_API_KEY`);
        setDogInfo(imageResponse.data[0]);
        setErrorMessage('');
      } else {
        setErrorMessage('Breed not found');
      }
    } catch (err) {
      console.error('Error fetching dog data:', err);
      setErrorMessage('Error fetching dog data');
    }
  };

    return {
        dogInfo,
        errorMessage,
        refreshDogInfo
    }
}
