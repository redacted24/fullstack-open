import { useState, useEffect } from 'react'
import noteService from './services/notes'
import Note from './components/Note'
import Notification from './components/Notification'

const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }

  return ( 
    <div style = {footerStyle}>
      <br/>
      <em>Note app, Department of Computer Science, University of Helsinki 2023</em>
    </div>
  )
}

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  // Fetch Data from Server
  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, []) // Second parameter, which is an empty array, makes useEffect() load only once.

  // Event Handler for Adding a Note
  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    }
  
    // Remember to use concat, so as to not mutate the original note array.
    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
    console.log('Note added.')
  }

  // Very important event handler! So much stuff packed into one function. Definitely revisit!
  const toggleImportanceOf = (id) => {
    console.log(notes)
    const note = notes.find(n => n.id === id)
    const changedNote = {...note, important : !note.important}
    console.log(changedNote, 'was changed')

    // Put request. Remember, setNotes need to have the entire array of Notes. So the small callback function attacheed to the setNotes creates a new array, where if the id doesn't match, we put the same note, and if the array matches, we put the updated array (initialNotes.data)
    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(error => {
        setErrorMessage(
          `Note '${note.content}' was already removed from the server `
        )
        // Set notes array to everything excluding the error note.
        
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter(n => n.id !== id))
      })
  }
  
  // Handler for input field
  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  // Determines which notes to show based on if show important is true or false
  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage}/>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>      
      <ul>
        {notesToShow.map(note => 
          <Note 
            key={note.id} 
            note={note}
            toggleImportance ={() => toggleImportanceOf(note.id)}
           />
        )}
      </ul>
      <form onSubmit={addNote}>
      <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form> 
      <Footer/>
    </div>
  )
}

export default App
