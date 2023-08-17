import { useState } from 'react'

const App = () => {
  const [clicks, setClicks] = useState ({
    left: 0,
    right: 0,
  })

  const handleLeftClick = () => {setClicks({...clicks, left: clicks.left + 1})}

  const handleRightClick = () => {setClicks ({...clicks, right: clicks.right + 1})}

  const handleTwoClick = () => {setClicks({left: clicks.left + 1, right: clicks.right + 1})}

  const handleRemoveClick = () => {setClicks({left: clicks.left - 1, right: clicks.right - 1})}

  return (
    <div>
      {clicks.left}
      <button onClick = {handleLeftClick}>Left</button>
{/* The Onclick is an event, and handleLeftClick is an event handler. */}
      <button onClick = {handleRightClick}>Right</button>
      {clicks.right}
      <p></p>
      <button onClick = {handleTwoClick}>Add Both</button>
      <p></p>
      <button onClick = {handleRemoveClick}>Remove from Both</button>
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
