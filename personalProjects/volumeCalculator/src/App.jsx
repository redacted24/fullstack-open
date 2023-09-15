import { useState } from 'react'
import Input from './components/input'
import Header from './components/Header'

const App =() => {
  const [vectorA, setVectorA] = useState([])
  const [vectorB, setVectorB] = useState([])
  const [vectorC, setVectorC] = useState([])
  const [vectorD, setVectorD] = useState([])

  return (
    <>
      <h1>Parallelepiped Volume Calculator</h1>
      <Header />
      <Input/>
    </>
  )
}


export default App
