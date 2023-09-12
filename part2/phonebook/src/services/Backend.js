import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const fetchData = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const postData = newProfile => {
  const request = axios.post(baseUrl, newProfile)
  return request.then(response => response.data)
}

export default { fetchData, postData }
