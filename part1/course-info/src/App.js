const App = () => {
	const course = {
		name: 'Half Stack application development',
		parts: [
		{
			name: 'Fundamentals of React',
			exercises: 10
		},
		{
			name: 'Using props to pass data',
			exercises: 7
		},
		{
			name: 'State of a component',
			exercises: 14
		}
	]
}

	const Header = (props) => {
		console.log("Header Component Loaded")
		return (
			<div>
				<h1>{props.name}</h1>
			</div>
		)
	}
	
	const Content = (props) => {
		console.log("Content Component Loaded")
		console.log(props)
		return (
			<div>
				<p>{props.parts[0].name} {props.parts[0].exercises}</p>
				<p>{props.parts[1].name} {props.parts[1].exercises}</p>
				<p>{props.parts[2].name} {props.parts[2].exercises}</p>
			</div>
		)
	}
	
	const Total = (props) => {
		console.log("Total Component Loaded")
		return (
			<div>
				<p>Total Number of exercises: {props.juan[0].exercises + props.juan[1].exercises + props.juan[2].exercises}</p>
			</div>
		)
	}

	return (
		<>
			<Header name = {course.name}/>
			<Content parts = {course.parts}/>
			<Total juan = {course.parts}/>
		</>
	)
}


export default App;
