const Part = ({ part }) => {
  return (
    <div>
      <p>{part.name} {part.exercises}</p>
    </div>
  );
}


const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part =>
        <Part key={part.id} part={part} />
      )}
    </div>
  );
}


const Header = ({course}) => {
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  );
}


const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum += part.exercises, 0);
  return (
    <p>
      <strong>total of {total} exercises</strong>
    </p>
  );
}


const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default Course;