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
	console.log(parts[0])
	console.log(parts[1])
	console.log(parts[2])
	return (
		<>
			<Header course = {course}/>
			<Content part1 = {parts[0].name} part2 = {parts[1].name} part3 = {parts[2].name} exercise1 = {parts[0].exercises} exercise2 = {parts[1].exercises} exercise3 = {parts[2].exercises}/>
			<Total exercises1 = {parts[0].exercises} exercises2 = {parts[1].exercises} exercises3 = {parts[2].exercises}/>
		</>
	)
}

const Header = (header) => {
	console.log("Header Component Loaded")
	return (
		<div>
			<h1>{header.course}</h1>
		</div>
	)
}

const Content = (content) => {
	console.log("Content Component Loaded")

	return (
		<div>
			<Part partName = {content.part1} partNumber = {content.exercise1}/>
			<Part partName = {content.part2} partNumber = {content.exercise2}/>
			<Part partName = {content.part3} partNumber = {content.exercise3}/>
		</div>
	)
}

const Part = (part) => {
	console.log("Part1 Loaded")

	return (
		<div>
			<p>{part.partName} {part.partNumber}</p>
		</div>
	)
}

const Total = (total) => {
	console.log("Total Component Loaded")

	return (
		<div>
			<p>Total Number of exercises: {total.exercises1 + total.exercises2 + total.exercises3}</p>
		</div>
	)
}

export default App;
