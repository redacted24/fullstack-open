import Compute from '../computation/Compute'

let sum

const Input = ({
    vectorA, setVectorA,
    vectorB, setVectorB,
    vectorC, setVectorC,
    vectorD, setVectorD,
    showResult, setShowResult
}) => {
    const vectors = [
        {letter: 'A', components: []},
        {letter: 'B', components: []},
        {letter: 'C', components: []},
        {letter: 'D', components: []}
    ]
    const uV = vectors
    // What Happens when you Click Compute Button
    const handleFormSubmit = (event) => {
        event.preventDefault()
        uV[0].components = parseInt(vectorA)
        uV[1].components = parseInt(vectorB)
        uV[2].components = parseInt(vectorC)
        uV[3].components = parseInt(vectorD)
        sum = Compute(uV)
        console.log(sum)
        setShowResult(true)
        console.log(uV)
        console.log('Calculating...')
    }
    const handleChangeA = (event) => {
        console.log(event.target.value)
        setVectorA(event.target.value)
    }
    const handleChangeB = (event) => {
        console.log(event.target.value)
        setVectorB(event.target.value)
    }
    const handleChangeC = (event) => {
        console.log(event.target.value)
        setVectorC(event.target.value)
    }
    const handleChangeD = (event) => {
        console.log(event.target.value)
        setVectorD(event.target.value)
    }

    return(
        <div>
            <form onSubmit = {handleFormSubmit}>
                A: <input value = {vectorA} onChange = {handleChangeA}></input> <p></p>
                B: <input value = {vectorB} onChange = {handleChangeB}></input> <p></p>
                C: <input value = {vectorC} onChange = {handleChangeC}></input> <p></p>
                D: <input value = {vectorD} onChange = {handleChangeD}></input> <p></p>
                <button type='submit'>Compute</button>
            </form>
        </div>
    )
}

export default Input
export {sum}
