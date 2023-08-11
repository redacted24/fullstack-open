import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  setTimeout(() => {
    setCounter(counter + 1)
  }, 1000)

  console.log("rendering...", counter)

  return (
    <>
      <p>{counter}</p>
    </>
  )
}





export default App;

// const App = (props) => {
//   const {counter} = props
//   return (
//     <div>{counter}</div>
//   )
// }

// export default App
