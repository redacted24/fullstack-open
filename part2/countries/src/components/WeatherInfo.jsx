import backendService from '../services/backend'
import { useEffect } from 'react'

const WeatherInfo = ({ country, weather, setWeather, setErrorMessage }) => {
  // Always put hooks at the top of your component! Don't put in conditionals
  useEffect(() => {
    console.log("Weather Effect Load")
    backendService
      .getWeatherData(country.latlng[0], country.latlng[1])
      .then((response) => {
        console.log('✅ Weather Data Successfully Fetched!')
        setWeather(response)
      })
      .catch(() => {
        console.log('❌ Weather Data Could Not Be Successfully Fetched')
        setErrorMessage('Error in fetching weather data')
        setTimeout(() => setErrorMessage(null), 3000)
      })
    console.log('Clearing previous weather data...')
    return setWeather(null)
  },[])

  if (!weather) {
    return null
  }
  return(
    <div className='weather'>
        <h4>Weather:</h4>
        <p>Temperature: {weather.main['temp']} Celsius</p>
        <img alt = "Weather Icon" src = {backendService.iconUrl(weather.weather[0]['icon'])}></img>
        <p>Wind: {weather.wind["speed"]} m/s</p>
    </div>
  )
}

export default WeatherInfo
