import React, { useState } from "react";

const StatisticLine = ({ text, value }) => {
  console.log(text, value);
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  console.log(good, neutral, bad);
  if (good + neutral + bad === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <tr>
              <td>No feedback given</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticLine text={"good"} value={good} />
            <StatisticLine text={"neutral"} value={neutral} />
            <StatisticLine text={"bad"} value={bad} />

            <tr>
              <td>all</td>
              <td> {good + neutral + bad} </td>
            </tr>
            <tr>
              <td>average</td>
              <td>
                {((good * 1 + bad * -1) / (good + neutral + bad)).toFixed(1)}
              </td>
            </tr>
            <tr>
              <td>positive</td>
              <td>{((good / (good + neutral + bad)) * 100).toFixed(1)}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
