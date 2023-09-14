import noteService from '../services/Backend'
const Numbers = (props) => {
  // Handling the Deletion of a Profile
  const handleDeleteClick = (id) => {
    if (window.confirm('Are you sure you want to delete this?')) {
      noteService
        .deleteData(id)
        .then(() => console.log(`Note ${id} has been successfully deleted.`))
      props.setPersons(props.persons.filter(el => el.id !== id))
    } else {
      console.log("No change has been made.")
    }
  }

  // Filtering the data
  const filtered = props.persons.filter((person) => person.name.toLowerCase().includes(props.newFilter.toLowerCase()))
  const filteredShow = filtered.map((person) => 
    <p key = {person.id}>{person.name} {person.number}
      <button onClick = {() => handleDeleteClick(person.id)}>delete</button>
    </p>
    ).reverse()
  return(
    <div>
      <h2>Numbers</h2>
      {filteredShow}
    </div>
  )
}

export default Numbers

