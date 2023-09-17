const Notification = ({ message }) => {
  if (message === null) {
    return null
  }
  return (
    <div className="addNotification">
      {message}
    </div>
  )
}

export default Notification