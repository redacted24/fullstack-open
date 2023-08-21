import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [score, setScore] = useState(0)

  const handleGood = () => {
    const updatedGood = good + 1
    const GoodScore = score + 1
    setGood(updatedGood)
    setScore(GoodScore)
    console.log("Good count:" + updatedGood, "Score count:" + GoodScore)
  }
  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    const NeutralScore = score
    setNeutral(updatedNeutral)
    setScore(NeutralScore)
    console.log("Neutral count:" + updatedNeutral, "Score count:" + NeutralScore)
  }

  const handleBad = () => {
    const updatedBad = bad + 1
    const BadScore = score - 1
    setBad(updatedBad)
    setScore(BadScore)
    console.log("Bad count:" + updatedBad, "Score count:" + BadScore)
  }

  const Buttons = ({handleClick, text, number}) => <button onClick = {handleClick}>{text} {number}</button>

  const Statistics = () => {
    return(
      <div>
        <h2>statistics</h2>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>score: {score}</p>
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
