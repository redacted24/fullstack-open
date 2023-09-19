import { useState, useEffect } from 'react'
import SearchBar from './components/searchBar'
import CountryInfo from './components/countryInfo'
import backendService from './services/backend'

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [weather, setWeather] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  // Initial Data Fetch
  useEffect(() => {
    backendService
    .getData()
    .then((response) => {
      console.log(response)
      console.log('Data successfully fetched!')
      setCountries(response)
    })
    // Make an Error Message Component
    .catch(() => {
      console.log('Data could not be fethed');
    })
  }, [])

  return(
    <>
      <SearchBar search = {search} setSearch = {setSearch}/>
      <CountryInfo weather = {weather} setWeather = {setWeather} countries = {countries} search = {search} setSearch = {setSearch}/>
    </>
  )
}

export default App
