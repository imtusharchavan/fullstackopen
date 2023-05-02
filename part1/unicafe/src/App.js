import { useState } from 'react';


const Statistics = (props) => {
  return (
    <div>
      <h1>statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.all}</p>
      <p>average {(((1) * props.good) + ((0) * props.neutral) + ((-1) * props.bad)) / props.all}</p>
      <p>positive {(props.good / props.all) * 100} %</p>
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
      <button onClick={setToGood}>
        good
      </button>
      <button onClick={setToNeutral}>
        neutral
      </button>
      <button onClick={setToBad}>
        bad
      </button>
      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
        <Statistics good={good} neutral={neutral} bad={bad} all={all} />
      )}
    </div>
  );
}

export default App;