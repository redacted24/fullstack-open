import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'
const api_key = '5eb8e57a0b619e489bba85c002f65267'

const weatherUrl = (lat, lon) => `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`

const getData = () => {
  console.log('Fetching initial data...')
  const request = axios.get(`${baseUrl}`)
  return request.then(response => response.data)
}

const getWeatherData = (lat, lon) => {
  console.log('Fetching weather data...')
  const request = axios.get(weatherUrl(lat, lon))
  return request.then(response => response.data)
}

export default { getData, getWeatherData }