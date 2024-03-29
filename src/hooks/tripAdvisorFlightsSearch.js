import React, { useState, useEffect } from 'react';
import axios, {isCancel, AxiosError} from 'axios';

export function tripAdvisorFlightsSearch() {

    const [weatherInfo, setWeatherInfo] = useState()
    const [errorMessage, setErrorMessage] = useState()

    async function refreshWeatherInfo(city) {
        const url = `https://open-weather13.p.rapidapi.com/city/${city}`

        const options = {
            method: 'GET',
            url: url,
            headers: {
                'X-RapidAPI-Key': 'c8fb40be85mshd03aacb72b3a811p1b147cjsnc42df57ae8dc',
                'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
            }
        };

        try {
	    const response = await axios.request(options);
            setWeatherInfo(response.data)
        } catch (error) {
            setErrorMessage(error.message)
        }

    }

    return {
        weatherInfo,
        errorMessage,
        refreshWeatherInfo
    }
}
