import { useState } from 'react'
import Numbers from './components/Numbers'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1, number: '345-123-4567'},
    { name: 'Peizhe Guan', id: 2, number: '911-911-1991'}
  ]) 
  // State handling the input value.
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  // Button Press Event Handler.
  const addName = (event) => {
    event.preventDefault()

    // Creation of a new profile (name + id).
    const newProfile = {
      name: newName,
      id: persons.length + 1,
      number: newNumber
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
    else if (newNumber === '') {
      alert('Please enter a number.')
    }
    else {
      console.log("New Profile:", updatedPersons)
      setPersons(updatedPersons)
      setNewName('')
      setNewNumber('')
    }

  }
  // Input Event Handler
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const handleButtonClick = () => {
    setNewFilter('')
  }

  // App Return
  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with:<input value = {newFilter} onChange = {handleFilterChange}></input>
      <button type='button' onClick = {handleButtonClick}>Reset</button>
      <h2>Add a New</h2>
      <form onSubmit = {addName}>
        <div>
          name: <input value = {newName} onChange = {handleNameChange}/>
        </div>
        <div>
          number: <input value = {newNumber} onChange = {handleNumberChange}></input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <Numbers persons = {persons} newFilter = {newFilter}/>
    </div>
  )
}

export default App