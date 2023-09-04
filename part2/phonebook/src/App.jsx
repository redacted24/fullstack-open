import { useState } from 'react'
import Numbers from './components/Numbers'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      id: 1}
  ]) 

  const [newName, setNewName] = useState('')

  const addName = (event) => {
    const newProfile = {
      name: newName,
      id: persons.length + 1,
    }
    event.preventDefault()
    setPersons(persons.concat(newProfile))
    setNewName('')
    console.log('name added', event.target)
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addName}>
        <div>
          name: <input value = {newName} onChange = {handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <Numbers persons = {persons}/>
    </div>
  )
}

export default App