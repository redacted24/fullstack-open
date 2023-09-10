const Notes = (props) => {
  // console.log(props.notes)
  if (props.showAll === true) {
    return(
      <div>
        <h2>Notes</h2>
        {props.notes.map((el) => <p key={el.id}>{el.content}</p>).reverse()}
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
