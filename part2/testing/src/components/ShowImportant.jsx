const ShowImportant = ({setShowAll, showAll}) => {
    const handleClick = () => {
        setShowAll(!showAll)
    }
    return(
        <div>
            <h2>Show Important</h2>
            <button onClick = {() => setShowAll(!showAll)}>Show {showAll ? 'important' : 'all'}</button>
        </div>
    )
}

export default ShowImportant
