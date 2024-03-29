import React, { useState } from 'react';
import axios from 'axios';

const TripAdvisorFlightsSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get('https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchAirport', {
        params: { q: query },
        headers: {
          'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com',
          'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY' // Replace with your RapidAPI key
        }
      });
      setResults(response.data.data);
      setError(null);
    } catch (err) {
      console.error('Error searching for airports:', err);
      setResults([]);
      setError('Error searching for airports. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Search for Airports</h2>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Enter airport name" />
      <button onClick={handleSearch}>Search</button>
      {error && <p>{error}</p>}
      <ul>
        {results.map((airport, index) => (
          <li key={index}>{airport.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TripAdvisorFlightsSearch;
