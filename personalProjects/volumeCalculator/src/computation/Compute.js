import Input from '../components/input'

const Compute = (uV) => {
    if (!uV) return null
    console.log(uV)
    const sum = uV[0].components + uV[1].components + uV[2].components + uV[3].components
    return sum
}

export default Compute
