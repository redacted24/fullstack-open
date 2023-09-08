import axios from 'axios'
import Notes from './components/Notes'
import Input from './components/Input'
import ShowImportant from './components/ShowImportant'
import { useState, useEffect } from 'react'

const App = (props) => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  // Pull Data from JSON server
  useEffect(() => {
    // console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        // console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])

  // console.log('render', notes.length, 'notes')
  // console.log(notes)

  return (
    <div>
      <Input notes = {notes} setNotes = {setNotes} newNote = {newNote} setNewNote = {setNewNote}/>
      <ShowImportant setShowAll = {setShowAll} showAll = {showAll}/>
      <Notes showAll = {showAll} notes = {notes}/>
    </div>
  )
}

export default App 
