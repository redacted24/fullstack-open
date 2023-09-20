import { useEffect } from 'react'
import backendService from '../services/backend'
import WeatherInfo from './WeatherInfo'

const CountryInfo = ({ countries, search, setSearch, weather, setWeather, setErrorMessage, errorMessage }) => {
  // Declaring a variable containing all filtered countries
  const filteredCountries = countries.filter(el => el.name.common.toLowerCase().includes(search.toLowerCase()))
  console.log("Countries loaded:", filteredCountries.length)

  // Event Handler for Show Button Click
  const handleShowClick = (name) => {
    setSearch(name)
  }

  // What Happens in the search bar?
  if (!search) {
    return null
  } 
  
  // If there are too many matches in the search bar
  else if (filteredCountries.length > 10) {
    return(
      <div className='manyMatches fontsize20'>
        <p>Too many matches, please specify your filter.</p>
      </div>
    )
  } 
  
  // If there is only one country in the array of filtered countries:
  else if (filteredCountries.length === 1) {
    const country = filteredCountries[0]
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
      return setWeather(null)
    },[])

    return(
      <div>
        <h2>{country.name.common}</h2>
        <p><strong>Capital:</strong> {country.capital[0]} <br/>
        <strong>Population:</strong> {country.population} <br/>
        <strong>Area:</strong> {country.area} km^2</p>
        <a href = {country.maps.googleMaps}>Map</a>
        <p>{country.unMember ? "Part of the United Nations" : "This country is not part of the United Nations"}</p>
        <h4>Languages:</h4>
        <ul>
          {Object.values(country.languages).map(el => <li key = {el}>{el}</li>)}
        </ul>
        <WeatherInfo weather = {weather}/>
        <img src = {country.flags.png} alt = 'Flag of the country'></img>
      </div>
    )
  }

  // Default Country List Return with button to show the country
  return(
    <div>
      {filteredCountries.map(el => 
      <p key = {el.name.common}>
        {el.name.common}
        <button onClick = {() => handleShowClick(el.name.common)}>show</button>
      </p>
      )}
    </div>
  )
}

export default CountryInfo 
