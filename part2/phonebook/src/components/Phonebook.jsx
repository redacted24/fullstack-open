const Phonebook = (props) => {
  return(
    <div>
      <h2>Phonebook</h2>
      filter shown with:<input value = {props.newFilter} onChange = {props.handleFilterChange}></input>
      <button type='button' onClick = {props.handleButtonClick}>Reset</button>
    </div>
  )
}

export default Phonebook
