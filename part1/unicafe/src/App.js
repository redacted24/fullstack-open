import { useState } from 'react'

const Buttons = ({handleClick, text, number}) => <button onClick = {handleClick}>{text} {number}</button>

const StatisticsLine = (props) => {
  return (
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  )
}

const Statistics = (props) => {
  const positive = (props.good/props.all)*100
  const average = (props.good-props.bad)/props.all
  if (props.all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return(
    <div>
      <h2>statistics</h2>
      <StatisticsLine text="good" value={props.good}/>
      <StatisticsLine text="neutral" value={props.neutral}/>
      <StatisticsLine text="bad" value={props.bad}/>
      <StatisticsLine text="all" value={props.all}/>
      <StatisticsLine text="average" value={average}/>
      <StatisticsLine text="positive" value={positive + "%"}/>
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

  return(
    <>
      <Header text = "give feedback"/>
      <Buttons handleClick = {handleGood} text = "Good"/>
      <Buttons handleClick = {handleNeutral} text = "Neutral"/>
      <Buttons handleClick = {handleBad} text = "Bad"/>
      <Statistics good = {good} bad = {bad} neutral = {neutral} all = {all}/>
    </>
  )
}

export default App;
