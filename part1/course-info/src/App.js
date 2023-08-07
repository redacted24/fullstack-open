const App = () => {
	const course = 'Half Stack application development'
	const parts = [
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

	const Header = (header) => {
		console.log("Header Component Loaded")
		return (
			<div>
				<h1>{header.course}</h1>
			</div>
		)
	}
	
	const Content = (props) => {
		console.log("Content Component Loaded")
		console.log(props)
		return (
			<div>
				<p>{props.content[0].name} {props.content[0].exercises}</p>
				<p>{props.content[1].name} {props.content[1].exercises}</p>
				<p>{props.content[2].name} {props.content[2].exercises}</p>
			</div>
		)
	}
	
	const Total = (props) => {
		console.log("Total Component Loaded")
		return (
			<div>
				<p>Total Number of exercises: {props.content[0].exercises + props.content[1].exercises + props.content[2].exercises}</p>
			</div>
		)
	}

	return (
		<>
			<Header course = {course}/>
			<Content content = {parts}/>
			<Total content = {parts}/>
		</>
	)
}





export default App;
