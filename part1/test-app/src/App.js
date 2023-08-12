import { useState } from 'react'

const App = () => {

  const [ counter, setCounter ] = useState(0)

  const plusOne = () => {setCounter(counter + 1)}
  const plusTwo = () => {setCounter(counter + 2)}
  const minusOne = () => {setCounter(counter - 1)}
  const setZero = () => {setCounter(0)}

  return (
    <>
      <div>
        <Display counter = {counter}/>
        <Button handleClick = {plusOne} text='Plus one'/>
        <Button handleClick = {plusTwo} text='Plus two'/>
        <Button handleClick = {minusOne} text='Minus one'/>
        <Button handleClick = {setZero} text='Reset'/>
      </div>
    </>
  )
}

const Display = ({counter}) => {
  console.log("Display Component-Rerendered.")
  return (<div>{counter}</div>)
}

const Button = ({handleClick, text}) => {
  console.log("Button Component-Rerendered.")
  return (
    <button onClick={handleClick}>{text}</button>
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
