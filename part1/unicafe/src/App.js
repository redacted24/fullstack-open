import { useState } from 'react'

const Buttons = ({handleClick, text, number}) => <button onClick = {handleClick}>{text} {number}</button>

const StatisticsLine = (props) => {
  return (
    <td>
      {props.text} {props.value}
    </td>
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
      <table>
        <tbody>
          <tr>
            <StatisticsLine text="good"/>
            <StatisticsLine value={props.good}/>
          </tr>
          <tr>
            <StatisticsLine text="neutral"/>
            <StatisticsLine value={props.neutral}/>
          </tr>
          <tr>
            <StatisticsLine text="bad"/>
            <StatisticsLine value={props.bad}/>
          </tr>
          <tr>
            <StatisticsLine text="all"/>
            <StatisticsLine value={props.all}/>
          </tr>
          <tr>
            <StatisticsLine text="average"/>
            <StatisticsLine value={average}/>
          </tr>
          <tr>
            <StatisticsLine text="positive"/>
            <StatisticsLine value={positive + "%"}/>
          </tr>
        </tbody>
      </table>
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
  const updateAll = () => {
    const updatedAll = all + 1
    setall(updatedAll)
    console.log("all count:" + updatedAll)
  }
  const handleGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    updateAll()
    console.log("Good count:" + updatedGood)
  }
  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    updateAll()
    console.log("Neutral count:" + updatedNeutral)
  }
  
  const handleBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    updateAll()
    console.log("Bad count:" + updatedBad)
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
