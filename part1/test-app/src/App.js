import { useState } from 'react'

const App = () => {
  const [clicks, setClicks] = useState ({
    left: 0,
    right: 0,
  })
  const Button = ({handleClick, text}) => <button onClick = {handleClick}>{text}</button>

  const [allClicks, setAll] = useState([])
  const History = (props) => {
    if (props.allClicks.length === 0) {
      return (
        <div>
          The app is used by pressing buttons.
        </div>
      )
    }
    return (
      <div>
        button press history: {props.allClicks.join('')}
      </div>
    )
  }


  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = clicks.left + 1
      setClicks({...clicks, left: updatedLeft})
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = clicks.right + 1
      setClicks({...clicks, right: updatedRight})
  }

  const handleReset = () => {
    setClicks({left: 0, right: 0})
    setAll([])
    console.log(allClicks)    
  }


  return (
    <div>
      {clicks.left}
      <Button handleClick = {handleLeftClick} text = {"Left"}/>
      <Button handleClick = {handleRightClick} text = {'Right'}/>
      {clicks.right}
      <History allClicks = {allClicks}/>
      <button onClick = {handleReset}>Reset</button>
    </div>
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
