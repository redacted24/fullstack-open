const Content = ({course}) => {
  const Parts = course.parts.map(part => <p key = {part.id}>{part.name} {part.exercises}</p>)
  return(
    <div>
      {Parts}
    </div>
  )
}

export default Content