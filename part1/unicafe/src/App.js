import { useState } from 'react';


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
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {(((1) * good) + ((0) * neutral) + ((-1) * bad)) / all}</p>
      <p>positive {(good / all) * 100} %</p>
    </div>
  );
}

export default App;