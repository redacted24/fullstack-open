import axios from 'axios'
import Notes from './components/Notes'
import { useState, useEffect } from 'react'

const App = (props) => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])

  console.log('render', notes.length, 'notes')
  console.log(notes)

  return (
    <div>
      <h1>Notes</h1>
      <Notes notes = {notes}/>
    </div>
  )
}

export default App 
