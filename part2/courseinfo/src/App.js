const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}


const Part = ({part}) => {
  return (
    <div>
      <p>{part.name} {part.exercises}</p>
    </div>
  )
}


const Content = ({parts}) => {
  return (
    <div>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
      <Part part={parts[3]} />
    </div>
  )
}


const Total = ({parts}) => {
  return (
    <p>
      <strong>total of {parts[0].exercises + parts[1].exercises + parts[2].exercises + parts[3].exercises} exercises</strong> 
    </p>
  )
}


const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}


export default App;
