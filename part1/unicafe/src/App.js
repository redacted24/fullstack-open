import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  const Buttons = ({handleClick, text, number}) => <button onClick = {handleClick}>{text} {number}</button>

  const Statistics = () => {
    return(
      <div>
        <h2>statistics</h2>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
      </div>
    )
  }

  const Header = ({text}) => {
    return(
      <div>
        <h1>{text}</h1>
      </div>
    )
  }

  return(
    <>
      <Header text = "give feedback"/>
      <Buttons handleClick = {handleGood} text = "Good"/>
      <Buttons handleClick = {handleNeutral} text = "Neutral"/>
      <Buttons handleClick = {handleBad} text = "Bad"/>
      <Statistics/>
    </>
  )
}
export default App;
