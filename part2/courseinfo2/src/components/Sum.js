const Sum = ({parts}) => {

  const Total = parts.reduce((acc, el) => acc + el.exercises, 0)
  console.log("Course Total Exercises:" + Total)
  
  return(
    <p><strong>Total number of exercises: {Total}</strong></p>
  )
}

export default Sum