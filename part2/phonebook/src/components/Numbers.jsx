const Numbers = (props) => {
  const filtered = props.persons.filter((person) => person.name.toLowerCase().includes(props.newFilter.toLowerCase()))
  const filteredShow = filtered.map((person) => <p key = {person.id}>{person.name} {person.number}</p>).reverse()

  return(
    <div>
      <h2>Numbers</h2>
      {filteredShow}
    </div>
  )
}

export default Numbers