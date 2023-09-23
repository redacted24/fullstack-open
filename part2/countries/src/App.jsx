import { useState, useEffect } from 'react'
import SearchBar from './components/searchBar'
import CountryInfo from './components/countryInfo'
import backendService from './services/backend'
import ErrorMessage from './components/ErrorMessage'

// Put Show button to link directly to Information page

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [weather, setWeather] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)  

  // Initial Data Fetch
  useEffect(() => {
    console.log('Country data Effect Load')
    backendService
    .getData()
    .then((response) => {
      console.log(response)
      console.log('✅ Country data successfully fetched!')
      setCountries(response)
    })
    // Make an Error Message Component
    .catch(() => {
      console.log('❌ Country data could not be fetched')
      setErrorMessage('Error in fetching country data')
      setTimeout(() => setErrorMessage(null), 3000)
    })
  }, [])

  return(
    <>
      <SearchBar search = {search} setSearch = {setSearch}/>
      <ErrorMessage state = {errorMessage}/>
      <CountryInfo errorMessage = {errorMessage} setErrorMessage = {setErrorMessage} weather = {weather} setWeather = {setWeather} countries = {countries} search = {search} setSearch = {setSearch}/>
    </>
  )
}

export default App
