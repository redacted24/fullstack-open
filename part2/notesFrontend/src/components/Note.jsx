const Note = ({ note, toggleImportance }) => {

  // Checking if the note is important, to decide what label to display on the "Make important" button.
  const label = note.important
    ? 'make not important' : 'make important'

  return (
    <li>
      {note.content}
      <button onClick = {toggleImportance}>{label}</button>
    </li>
  )
}

export default Note