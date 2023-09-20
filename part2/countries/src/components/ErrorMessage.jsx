const ErrorMessage = ({ state }) => {
  if (!state) {
    return null
  }
  return(
    <div className="errorMessage">{state}</div>
  )
}

export default ErrorMessage