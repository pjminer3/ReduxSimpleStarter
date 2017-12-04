<<<<<<< HEAD
export function selectBook(book) {
  // selectBook is is an actionCreator that needs to return an action: an object with a 'type' property
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  }
}

=======
import axios from 'axios';

const API_KEY = 'a7c6330c6bae9e3cb15a782c927abe06';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); // returns a promise

  return {
    type: FETCH_WEATHER,
    payload: request, // passing promise 
  }
}
>>>>>>> Working API request and back up to speed
