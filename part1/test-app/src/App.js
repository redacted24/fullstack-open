const App = () => {
	const friendsList = [
		{name: "Peizhe", age: 17}
	]
	console.log("App Component Loaded")
	return (
		<>
			<Friends name = {friendsList[0].name} age = {friendsList[0].age}/>
		</>
	)

}

const Friends = (item) => {
	console.log("App Component Loaded")
	return (
		<div>
			<p>My friend is {item.name} and they are {item.age} years old.</p>
		</div>
	)
}

export default App;
