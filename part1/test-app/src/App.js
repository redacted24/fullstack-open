import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)
  const plusOne = () => {
    setCounter(counter + 1)
  }
  const plusTwo = () => {
    setCounter(counter + 2)
  }
  const setZero = () => {
    setCounter(0)
  }
  return (
    <>
      <p>{counter}</p>
      <div>
        <button onClick={plusOne}>Add one!</button>
        <button onClick={plusTwo}>Add two!</button>
        <button onClick={setZero}>Reset</button>
      </div>
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
