const SearchBar = ({search, setSearch}) => {
  
  // Handle the Input Bar
  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  return(
    <div className="center inputField">
      Find Countries: <input value = {search} onChange = {handleSearchChange}></input>
    </div>
  )
}

export default SearchBar