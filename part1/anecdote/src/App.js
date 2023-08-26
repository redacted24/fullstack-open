import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick = {props.handleClick}>{props.text}</button>
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
  const arr = Array(8).fill(0)
  const [votes, setVotes] = useState(arr)

  const Refresh = () => {
    const min = Math.ceil(0)
    const max = Math.floor(8)
    setSelected(Math.floor(Math.random() * (max-min) + min))
    console.log("Anecdote selected: " + selected)
    console.log(votes)
  }
  

  const Voting = () => {
    setVotes([...votes, votes[selected] += 1])
    console.log("Voting for anecdote number: " + selected)
    console.log(selected + " now has " + votes[selected] + " votes")
    console.log(votes)
  }

  return (
    <div>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes.</p>
      <Button handleClick = {Refresh} text = "next anecdote"/>
      <Button handleClick = {Voting} text = "vote"/>
    </div>
  )
}

export default App