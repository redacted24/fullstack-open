import { useState } from 'react'

const Buttons = ({handleClick, text, number}) => <button onClick = {handleClick}>{text} {number}</button>

const Average = (props) => {
  let average = (props.good-props.bad)/props.all
  if (props.all === 0) {
    return (
      <p>Average: please click a button</p>
    )
  }
  return (
    <p>Average: {average}</p>
  )
}

const Positive = (props) => {
  let positive = (props.good/props.all)*100
  if (props.all === 0) {
    return (
      <p>positive: please click a button</p>
    )
  }
  return (
    <p>positive: {positive} %</p>
  )
}

const Statistics = (props) => {
  return(
    <div>
      <h2>statistics</h2>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all: {props.all}</p>
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

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setall] = useState(0)

  const handleGood = () => {
    const updatedGood = good + 1
    const Goodall = all + 1
    console.log(updatedGood)
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
      <Statistics/>
    </>
  )
}

export default App;
