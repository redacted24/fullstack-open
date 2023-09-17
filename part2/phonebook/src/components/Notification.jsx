const Notification = ({ message, error }) => {
  if (message === null) {
    return null
  }
  console.log(error)
  return (
    <div className= {error ? "error" : "addNotification"}>
      {message}
    </div>
  )
}

export default Notification