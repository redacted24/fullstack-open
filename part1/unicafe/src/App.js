import { useState } from 'react'

const Header = ({text}) => {
  console.log({text})
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
  
  return(
    <>
      <Header text="give feedback"/>
    </>
  )
}
export default App;
