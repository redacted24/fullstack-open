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

const updateData = (id, newProfile) => {
  const request = axios.put(`${baseUrl}/${id}`, newProfile)
  return request.then(response => response.data)
}

const deleteData = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`).catch(() => `Error in Deletion`)
  return request.then()
}



export default { fetchData, postData, deleteData, updateData }
