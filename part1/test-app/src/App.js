import { useState } from 'react'

const App = () => {
  const [clicks, setClicks] = useState ({
    left: 0,
    right: 0,
  })

  const [allClicks, setAll] = useState([])

  const  [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = clicks.left + 1
      setClicks({...clicks, left: updatedLeft})
      setTotal(updatedLeft + clicks.right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = clicks.right + 1
      setClicks({...clicks, right: updatedRight})
      setTotal(updatedRight + clicks.left)
  }

  const handleReset = () => {
    setClicks({left: 0, right: 0})
    setAll([])
    console.log(allClicks)
    setTotal(0)
    
  }


  return (
    <div>
      {clicks.left}
      <button onClick = {handleLeftClick}>Left</button>
      <button onClick = {handleRightClick}>Right</button>
      {clicks.right}
      <p>{allClicks.join('')}</p>
      <p>Total: {total}</p>
      <button onClick = {handleReset}>Reset</button>
{/* lmao xd  */}
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
