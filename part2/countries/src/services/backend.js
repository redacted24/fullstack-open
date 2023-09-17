import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'
const countryUrl = 'https://studies.cs.helsinki.fi/restcountries/api/name'

const getData = () => {
  console.log('Fetching initial data...')
  const request = axios.get(`${baseUrl}`)
  return request.then(response => response.data)
}

export default { getData }