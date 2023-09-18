const CountryInfo = ({ countries, search, setSearch }) => {
  // Declaring a variable containing all filtered countries
  const filteredCountries = countries.filter(el => el.name.common.toLowerCase().includes(search.toLowerCase()))
  console.log("Number of countries:", filteredCountries.length)
  const handleShowClick = () => {
    setSearch()
  }

  // What Happens in the search bar?
  if (!search) {
    return null
  } else if (filteredCountries.length > 10) {
    return(
      <div>
        <p>Too many matches, please specify your filter.</p>
      </div>
    )
  } else if (filteredCountries.length === 1) {
    const country = filteredCountries[0]
    console.log(country)
    return(
      <div>
        <h2>{country.name.common}</h2>
        <p><strong>Capital:</strong> {country.capital[0]} <br/>
        <strong>Population:</strong> {country.population} <br/>
        <strong>Area:</strong> {country.area} km^2</p>
        <a href = {country.maps.googleMaps}>Map</a>
        <p>{country.unMember ? "Part of the United Nations" : "This country is not part of the United Nations"}</p>
        <h4>Languages:</h4>
        <ul>
          {Object.values(country.languages).map(el => <li key = {el}>{el}</li>)}
        </ul>
        <img src = {country.flags.png}></img>
      </div>
    )
  }

  return(
    <div>
      {filteredCountries.map(el => 
      <p key = {el.name.common}>
        {el.name.common}
        <button onClick = {handleShowClick}>show</button>
      </p>
      )}
    </div>
  )
}

export default CountryInfo 
