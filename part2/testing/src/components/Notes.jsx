const Notes = (props) => {
  const toggleImportanceOf = (id) => {
    console.log(`importance of ${id} needs to be toggled`)
  }

  if (props.showAll === true) {
    return(
      <div>
        <h2>Notes</h2>
        {props.notes.map((el) => 
        <ul>
          <li key={el.id}>{el.content}<button></button></li>
        </ul>)}
      </div>
    )
  } else {
    const filteredNotes = props.notes.filter((el) => el.important === true)

    return(
      <div>
        <h2>Notes</h2>
        {filteredNotes.map((element) => <p key = {element.id}>{element.content}</p>).reverse()}
      </div>
    )
  }
}

export default Notes
