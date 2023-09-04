import Header from './Header'
import Content from './Content'
import Sum from './Sum'

const Course = ({course}) => {
	return (
		<div>
			<Header courseName = {course.name}/>
			<Content course = {course}/>
			<Sum number = {course.parts}/>
		</div>
	)
}

export default Course