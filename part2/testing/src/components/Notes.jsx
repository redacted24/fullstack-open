const Notes = (props) => {
  return(
    <div>
      {props.notes.map((el) => <p key={el.id}>{el.content}</p>)}
    </div>
  )
}

export default Notes
