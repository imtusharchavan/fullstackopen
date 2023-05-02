import { useState } from 'react';

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}


const StatisticLine = (props) => {
  return (
    <p>{props.text} {props.value}</p>
  )
}


const Statistics = ({good, neutral, bad, all}) => {
  return (
    <div>
      <h1>statistics</h1>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={all} />
      <StatisticLine text='average' value={(((1) * good) + ((0) * neutral) + ((-1) * bad)) / all} />
      <StatisticLine text='positive' value={(good / all) * 100 + ' %'} />
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setToGood = () => setGood(good + 1);

  const setToNeutral = () => setNeutral(neutral + 1);

  const setToBad = () => setBad(bad + 1);

  const all = good + neutral + bad

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={setToGood} text='good' />
      <Button handleClick={setToNeutral} text='neutral' />
      <Button handleClick={setToBad} text='bad' />
      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
        <Statistics good={good} neutral={neutral} bad={bad} all={all} />
      )}
    </div>
  );
}

export default App;