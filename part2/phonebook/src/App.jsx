import { useState } from 'react'
import Numbers from './components/Numbers'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      id: 1}
  ]) 
  // State handling the input value.
  const [newName, setNewName] = useState('')

  // Button Press Event Handler.
  const addName = (event) => {
    event.preventDefault()

    // Creation of a new profile (name + id).
    const newProfile = {
      name: newName,
      id: persons.length + 1,
    }
    const updatedPersons = persons.concat(newProfile)

    // Mapping out the names of the persons array, in order to compare with the input.
    const namesArray = persons.map((element) => element.name)
    console.log(namesArray)

    // Checking if the entered name already exists, or if the name entered is blank.
    if (namesArray.includes(newName) === true) {
      alert(`${newName} is already in the phonebook.`)
    } 
    else if (newName === '') {
      alert('Please enter a name.')
    }
    else {
      setPersons(updatedPersons)
    }
    setNewName('')


  }
  // Input Event Handler
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  // App Return
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