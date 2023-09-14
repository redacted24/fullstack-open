import { useState, useEffect } from 'react'
import axios from 'axios'
import noteService from './services/Backend'
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
    noteService
      .fetchData()
      .then(response => setPersons(response))
  }, [])

  // Event Handler when pressing the button to add a Name
  const addName = (event) => {
    event.preventDefault()

    // Creation of a new profile (name + id).
    const newProfile = {
      name: newName,
      number: newNumber
    }

    // Mapping out the names of the persons array, in order to compare with the input.
    const namesArray = persons.map((element) => element.name)

    // Checking if the entered name already exists, or if the name entered is blank.
    if (namesArray.includes(newName) === true) {
      // Confirm Window for Number Update
      if (window.confirm(`${newName} is already in the phonebook. Would you like to update the phone number?`)) {
        const updateId = persons.find(el => el.name === newName).id
        console.log(`Profile id: ${updateId} is set to be updated.`)
        // updating...
        noteService
          .updateData(updateId, newProfile)
          .then((response) => {
            console.log(`Profile id: ${updateId} has been successfully updated.`)
            console.log(response)
            // Change data and re-render page
            setPersons(persons.map(el => el.name === newName ? el = response : el))
            // Reset the Input
            setNewName('')
            setNewNumber('')
          })
      }
      
    } 
    else if (newName === '') {
      alert('Please enter a name.')
    }
    else if (newNumber === '') {
      alert('Please enter a number.')
    }
    // Otherwise, save to the server
    else {
      noteService
        .postData(newProfile)
        .then(response => setPersons(persons.concat(response)))
      setNewName('')
      setNewNumber('')
      console.log(`Profile Saved.`)
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
      <Numbers setPersons = {setPersons} persons = {persons} newFilter = {newFilter}/>
    </div>
  )
}

export default App
