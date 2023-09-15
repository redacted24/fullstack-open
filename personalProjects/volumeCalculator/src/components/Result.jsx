import { sum } from '../components/input'
const Result = ({showResult}) => {
    if (showResult === true) {
        return (
        <div>
            <h2>Result</h2>
            <p>The volume of the parallelepiped is:</p>
            <p>{sum}</p>
        </div>
    )} else {
        return(
            <div></div>
        )
    }
}

export default Result
