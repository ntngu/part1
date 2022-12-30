import { useState } from 'react'

const StatisticLine = (props) => {
  const text = props.text;
  const value = props.value;

  if (text === "positive") {
    return (
      <tr>
        <td>{text}</td>
        <td>{value} %</td>
      </tr>
    )
  } else {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    );
  }
}

const Statistics = (props) => {
  const good = props.good;
  const neutral = props.neutral;
  const bad = props.bad;
  const total = good + neutral + bad;
  const average = (good + bad * -1) / total;
  const positive = (good) / total * 100;

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <StatisticLine text="good" value={ good } /> 
          <StatisticLine text="neutral" value={ neutral } />
          <StatisticLine text="bad" value={ bad } />
          <StatisticLine text="all" value={ total } />
          <StatisticLine text="average" value={ average } />
          <StatisticLine text="positive" value={ positive } />
        </table>
        
      </div>
    );
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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
      <div>
        <button onClick={ () => handleGood() }>good</button>
        <button onClick={ () => handleNeutral() } >neutral</button>
        <button onClick={ () => handleBad() }>bad</button>
      </div>
      <Statistics good={ good } neutral={ neutral } bad={ bad } />
    </div>
  )
}

export default App