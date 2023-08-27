import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick = {props.handleClick}>{props.text}</button>
  )
}

const AnecdoteView = ({anecdotes, selected, votes}) => {
  console.log("Anecdote #" + selected)
  return (
    <div>
      <p>{anecdotes[selected]} (has {votes[selected]} votes)</p>
    </div>
  )
}

const HighestVote = ({copy, bestAnecdote, anecdotes, clicks}) => {
  if (clicks === 0) {
    return (
      <div></div>
    )
  }

  return (
    <div>
      <h2>Highest Rated Anecdote</h2>
      <p><strong>with {copy[bestAnecdote]} votes</strong> out of {clicks} votes...</p>
      <p></p>
      <em>{anecdotes[bestAnecdote]}</em>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(8).fill(0))
  const [clicks, setClicks] = useState(0)
  const [bestAnecdote, setBestAnecdote] = useState(null)
  const copy = [...votes]
  let maxValue = 0
  let maxValuePosition = 0

  const Refresh = () => {
    const min = Math.ceil(0)
    const max = Math.floor(8)
    setSelected(Math.floor(Math.random() * (max-min) + min))
    console.log(votes)
  }

  const Voting = () => {
    copy[selected] += 1
    setVotes(copy)
    setClicks(clicks + 1)
    console.log(copy)
    for (let i = 0; i < copy.length; i++) {
      if (copy[i] > maxValue) {
        maxValue = copy[i]
        maxValuePosition = i
      }
    }
    setBestAnecdote(maxValuePosition)
    console.log("Max Votes: " + maxValue + " position: " + maxValuePosition)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <AnecdoteView anecdotes = {anecdotes} selected = {selected} votes = {votes}/>
      <Button handleClick = {Refresh} text = "next anecdote"/>
      <Button handleClick = {Voting} text = "vote"/>
      <HighestVote anecdotes = {anecdotes} clicks = {clicks} bestAnecdote = {bestAnecdote} copy = {copy}/>
    </div>
  )
}



export default App