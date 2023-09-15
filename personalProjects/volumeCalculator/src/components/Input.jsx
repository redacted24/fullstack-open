const Input = () => {
    const vectors = ['A', 'B', 'C', 'D']
    console.log(vectors)
    const handleFormSubmit = (event) => {
        event.preventDefault()
        console.log('test')
    }

    return(
        <div>
            <form onSubmit = {handleFormSubmit}>
                {vectors.map(el => 
                    <div key={el}>
                        {el}: <input></input>
                    </div>
                )}
                <button type='submit'>Compute</button>
            </form>
        </div>
    )
}

export default Input
