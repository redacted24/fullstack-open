import axios from 'axios'
import Notes from './components/Notes'
import Input from './components/Input'
import ShowImportant from './components/ShowImportant'
import { useState, useEffect } from 'react'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [isImportant, setImportant] = useState(false)

  // Pull Data from JSON server
  useEffect(() => {
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        setNotes(response.data)
      })
  }, [])

  return (
    <div>
      <Input setImportant = {setImportant} isImportant = {isImportant} notes = {notes} setNotes = {setNotes} newNote = {newNote} setNewNote = {setNewNote}/>
      <ShowImportant setShowAll = {setShowAll} showAll = {showAll}/>
      <Notes showAll = {showAll} notes = {notes}/>
    </div>
  )
}

export default App 
