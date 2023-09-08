const ShowImportant = ({setShowAll, showAll}) => {
    const handleClick = () => {
        console.log("Show important is: " + showAll)
        setShowAll(!showAll)
    }
    return(
        <div>
            <h2>Show Important</h2>
            <button onClick = {handleClick}>Show Important</button>
        </div>
    )
}

export default ShowImportant
