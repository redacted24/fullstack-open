const Numbers = (props) => {
  const people = props.persons.map((person) => <p key = {person.id}>{person.name}</p>)
  return(
    <div>
      <h2>Numbers</h2>
      {people.reverse()}
    </div>
  )
}

export default Numbers