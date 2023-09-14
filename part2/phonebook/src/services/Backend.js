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

const deleteData = (id) => {
  const request = axios
  .delete(`${baseUrl}/${id}`)
  .catch(() => `Error in Deletion`)
  
  console.log(`Profile number: ${id} has been sucessfully deleted`)
  return request.then()
}

export default { fetchData, postData, deleteData }
