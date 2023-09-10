import { useState } from 'react'
import axios from 'axios'

const Input = (props) => {
    const [checked, setChecked] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault()
        if (props.newNote == '') {
          alert(`Please enter a note.`)
        } else {
        props.setNewNote('')
        // New note Profile
        const noteProfile = {
            content: props.newNote,
            important: props.isImportant
        }
        props.setNotes(props.notes.concat(noteProfile))
        setChecked(false)
        axios
          .post('http://localhost:3001/notes', noteProfile)
          .then(response => {
             console.log('Data sent', response)
             props.setNotes(props.notes.concat(response.data))
          })}

    }
    const handleNoteChange = (event) => {
        props.setNewNote(event.target.value)
        console.log(event.target.value)
    }
    const handleImportantChange = () => {
        setChecked(!checked)
        props.setImportant(!props.isImportant)
    }
    return(
        <div>
            <h2>Add a Note</h2>
            Enter: 
            <form onSubmit = {handleSubmit}>
                <input value = {props.newNote} onChange = {handleNoteChange}></input>
                <button type='submit'>Save</button>
                <p></p>
                <label>
                    Set Important
                    <input checked = {checked} type = 'checkbox' onChange = {handleImportantChange}></input>
                </label>
            </form>
        </div>
    )
}

export default Input
