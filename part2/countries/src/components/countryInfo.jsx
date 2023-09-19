import { useEffect } from 'react'
import backendService from '../services/backend'

const CountryInfo = ({ countries, search, setSearch, weather, setWeather }) => {
  // Declaring a variable containing all filtered countries
  const filteredCountries = countries.filter(el => el.name.common.toLowerCase().includes(search.toLowerCase()))
  console.log("Number of countries:", filteredCountries.length)

  // Event Handler for Show Button Click
  const handleShowClick = (name) => {
    setSearch(name)
  }

  // What Happens in the search bar?
  if (!search) {
    return null
  } else if (filteredCountries.length > 10) {
    return(
      <div>
        <p>Too many matches, please specify your filter.</p>
      </div>
    )
  } else if (filteredCountries.length === 1) {
    const country = filteredCountries[0]
    console.log(country)
    useEffect(() => {
      backendService
        .getWeatherData(country.latlng[0], country.latlng[1])
        .then((response) => {
          console.log('Weather Data Successfully Fetched!')
          console.log(response)
          setWeather(response)
        })
        .catch(() => {
          console.log('Error while fetching data')
        })
    },[])
    console.log('First render')
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
        <h4>Weather:</h4>
        <p>Temperature:</p>
        <img src = {country.flags.png}></img>
      </div>
    )
  }

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
