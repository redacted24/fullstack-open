const Input = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault()
        props.setNewNote('')
        const noteProfile = {
            id: props.notes + 1,
            content: props.newNote,
            important: true
        }
        props.setNotes(props.notes.concat(noteProfile))
    }
    const handleNoteChange = (event) => {
        props.setNewNote(event.target.value)
        console.log(event.target.value)
    }
    return(
        <div>
            <h2>Add a Note</h2>
            Enter: 
            <form onSubmit = {handleSubmit}>
                <input value = {props.newNote} onChange = {handleNoteChange}></input>
                <button type='submit'>Save</button>
                <label for = "important">
                    My value
                    <input type = 'checkbox' name = 'important'></input>
                </label>
            </form>
        </div>
    )
}

export default Input
