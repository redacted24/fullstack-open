import { useState } from 'react'
import Input from './components/input'
import Header from './components/Header'
import Result from './components/Result'
import Compute from './computation/Compute'

const App =({uV}) => {
  const [vectorA, setVectorA] = useState('')
  const [vectorB, setVectorB] = useState('')
  const [vectorC, setVectorC] = useState('')
  const [vectorD, setVectorD] = useState('')
  const [showResult, setShowResult] = useState(false)
  const sum = Compute(uV)
  console.log(Compute)
  return (
    <>
      <h1>Parallelepiped Volume Calculator</h1>
      <Header />
      <Input 
      vectorA = {vectorA} 
      setVectorA = {setVectorA}
      vectorB = {vectorB} 
      setVectorB = {setVectorB}
      vectorC = {vectorC} 
      setVectorC = {setVectorC}
      vectorD = {vectorD} 
      setVectorD = {setVectorD}
      showResult = {showResult}
      setShowResult = {setShowResult}/>
      <Result Compute = {Compute} showResult = {showResult} setShowResult = {setShowResult}/>
    </>
      
  )
}


export default App
