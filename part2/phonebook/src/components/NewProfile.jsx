const NewProfile = (props) => {
  return(
    <div>
      <h2>Add a New</h2>
      <form onSubmit = {props.addName}>
        <div>
          name: <input value = {props.newName} onChange = {props.handleNameChange}/>
        </div>
        <div>
          number: <input value = {props.newNumber} onChange = {props.handleNumberChange}></input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default NewProfile