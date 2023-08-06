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
			<p>{content.part1} {content.exercise1}</p>
			<p>{content.part2} {content.exercise2}</p>
			<p>{content.part3} {content.exercise3}</p>
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
