const App = () => {
	const course = 'Half Stack application development'
	const part1 = {
		name: 'Fundamentals of React',
		exercises: 10
	}
	const part2 = {
		name: 'Using props to pass data',
		exercises: 7
	}
	const part3 = {
		name: 'State of a component',
		exercises: 14
	}
	console.log(part1)
	console.log(part2)
	console.log(part3)
	return (
		<>
			<Header course = {course}/>
			<Content part1 = {part1.name} part2 = {part2.name} part3 = {part3.name} exercise1 = {part1.exercises} exercise2 = {part2.exercises} exercise3 = {part3.exercises}/>
			<Total exercises1 = {part1.exercises} exercises2 = {part2.exercises} exercises3 = {part3.exercises}/>
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
