import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setall] = useState(0)

  const handleGood = () => {
    const updatedGood = good + 1
    const Goodall = all + 1
    setGood(updatedGood)
    setall(Goodall)
    console.log("Good count:" + updatedGood, "all count:" + Goodall)
  }
  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    const Neutralall = all + 1
    setNeutral(updatedNeutral)
    setall(Neutralall)
    console.log("Neutral count:" + updatedNeutral, "all count:" + Neutralall)
  }

  const handleBad = () => {
    const updatedBad = bad + 1
    const Badall = all + 1
    setBad(updatedBad)
    setall(Badall)
    console.log("Bad count:" + updatedBad, "all count:" + Badall)
  }

  const Buttons = ({handleClick, text, number}) => <button onClick = {handleClick}>{text} {number}</button>

  const Average = () => {
    let average = (good-bad)/all
    if (all === 0) {
      return (
        <p>Average: please click a button</p>
      )
    }
    return (
      <p>Average: {average}</p>
    )
  }

  const Positive = () => {
    let positive = (good/all)*100
    if (all === 0) {
      return (
        <p>positive: please click a button</p>
      )
    }
    return (
      <p>positive: {positive}</p>
    )
  }

  const Statistics = () => {
    return(
      <div>
        <h2>statistics</h2>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all: {all}</p>
        <Average/>
        <Positive/>
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
