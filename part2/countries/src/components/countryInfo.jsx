const CountryInfo = ({ countries, search }) => {
  // Declaring a variable containing all filtered countries
  const filteredCountries = countries.filter(el => el.name.common.toLowerCase().includes(search.toLowerCase()))
  console.log("Number of countries:", filteredCountries.length)
  if (!search) {
    return null
  } else if (filteredCountries.length > 10) {
    return(
      <div>
        <p>Too many matches, please specify your filter.</p>
      </div>
    )
  } else if (filteredCountries.length === 1) {
    console.log(filteredCountries)
    return(
      <div>
        <h2>{filteredCountries[0].name.common}</h2>
        <p>Capital: {filteredCountries[0].capital}</p>
      </div>
    )
  }

  return(
    <div>
      {filteredCountries.map(el => <p key = {el.name.common}>{el.name.common}</p>)}
    </div>
  )
}

export default CountryInfo 