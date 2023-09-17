import { useState, useEffect } from 'react'
import SearchBar from './components/searchBar'
import CountryInfo from './components/countryInfo'
import backendService from './services/backend'

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  // Initial Data Fetch
  useEffect(() => {
    backendService
    .getData(search)
    .then((response) => {
      console.log(response)
      console.log('Data successfully fetched!')
      setCountries(response)
    })
    .catch(() => {
      console.log('Error: ' + search + ' is not a valid country.');
    })
  }, [])

  return(
    <>
      <SearchBar search = {search} setSearch = {setSearch}/>
      <CountryInfo countries = {countries} search = {search} />
    </>
  )
}

export default App
