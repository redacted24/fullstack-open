const SearchBar = ({search, setSearch}) => {
  
  // Handle the Input Bar
  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  return(
    <div className="center inputField">
      <strong>Find Countries:</strong><input value = {search} onChange = {handleSearchChange}></input>
    </div>
  )
}

export default SearchBar
