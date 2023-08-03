const App = () => {
  const age = 10
  const name = "Henry"
  return (
    <div>
      <h1>Greetings!</h1>
      <Hello name="George"/>
      <Hello name="Alicia"/>
      <Hello name={name} age={age}/>
    </div>
  );
}

const Hello = (props) => {
  console.log(props)

  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </div>
  )
}

export default App;
