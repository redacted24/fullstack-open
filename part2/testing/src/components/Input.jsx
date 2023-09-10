import { useState } from 'react'
import axios from 'axios'

const Input = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault()

        // If statement to check if the input is empty or not.
        if (props.newNote == '') {
          alert(`Please enter a note.`)
        } else {
        props.setNewNote('')

        // New note Profile
        const noteProfile = {
            content: props.newNote,
            important: props.isImportant
        }

        // Post to the server.
        axios
          .post('http://localhost:3001/notes', noteProfile)
          .then(response => {
             console.log('Data sent', response)
             props.setNotes(props.notes.concat(response.data))
          })}
    }

    // Input Field Handler
    const handleNoteChange = (event) => {
        props.setNewNote(event.target.value)
        console.log(event.target.value)
    }

    // Component return
    return(
        <div>
            <h2>Add a Note</h2>
            Enter: 
            <form onSubmit = {handleSubmit}>
                <input value = {props.newNote} onChange = {handleNoteChange}></input>
                <button type='submit'>Save</button>
                <p></p>
            </form>
        </div>
    )
}

export default Input
