const App = () => {
	const course = 'Half Stack application development'
	const part1 = 'Fundamentals of React'
	const exercises1 = 10
	const part2 = 'Using props to pass data'
	const exercises2 = 7
	const part3 = 'State of a component'
	const exercises3 = 14



	return (
		<>
			<Header course = {course}/>
			<Content part1 = {part1} part2 = {part2} part3 = {part3} exercise1 = {exercises1} exercise2 = {exercises2} exercise3 = {exercises3}/>
			<Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3}/>
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
