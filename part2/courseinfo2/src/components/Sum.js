const Sum = ({number}) => {

  let sum = 0
  number.forEach(element => sum += element.exercises)
  console.log("Course Total Exercises:" + sum)
  
  return(
    <p><strong>Total number of exercises: {sum}</strong></p>
  )
}

export default Sum