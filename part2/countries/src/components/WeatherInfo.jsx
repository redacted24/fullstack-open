import backendService from '../services/backend'

const WeatherInfo = ({ weather }) => {
  if (!weather) {
    return null
  }
  return(
    <div>
        <h4>Weather:</h4>
        <p>Temperature: {weather.main['temp']} Celsius</p>
        <img alt = "Weather Icon" src = {backendService.iconUrl(weather.weather[0]['icon'])}></img>
        <p>Wind: {weather.wind["speed"]} m/s</p>
    </div>
  )
}

export default WeatherInfo