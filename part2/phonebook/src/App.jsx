import { useState, useEffect } from 'react'
import axios from 'axios'
import Numbers from './components/Numbers'
import Phonebook from './components/Phonebook'
import NewProfile from './components/NewProfile'

const App = () => {
  // State handling the input value.
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  // Button Press Event Handler.
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('data fetched: ', response)
        setPersons(response.data)
      })
  }, [])
  const addName = (event) => {
    event.preventDefault()

    // Creation of a new profile (name + id).
    const newProfile = {
      name: newName,
      number: newNumber
    }

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
      // Save to server
      axios
        .post(`http://localhost:3001/persons/`, newProfile)
        .then(response => setPersons(response.data))
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
      <Phonebook newFilter = {newFilter} handleFilterChange = {handleFilterChange} handleButtonClick = {handleButtonClick}/>
      <NewProfile newNumber = {newNumber} newName = {newName} addName = {addName} handleNameChange = {handleNameChange} handleNumberChange = {handleNumberChange}/>
      <Numbers persons = {persons} newFilter = {newFilter}/>
    </div>
  )
}

export default App
