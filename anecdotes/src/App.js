import { useState } from 'react'

const App = () => {
  const [selected, setSelected] = useState(0);
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ];
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length));
  const [max, setMax] = useState(0);
  const getRandomAnecdote = () => {
    const val = Math.floor(Math.random() * anecdotes.length);
    setSelected(val);
  };

  const voteAnecdote = () => {
    const temp = [...votes];
    temp[selected] += 1
    let max = -Infinity;
    let position = 0;
    for (let i = 0; i < anecdotes.length; i++) {
      if (votes[i] > max) {
        max = votes[i];
        position = i
      }
    }
    setMax(position);
    setVotes(temp);
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}<br />
      has {votes[selected]} votes<br />
      <button onClick={ () => voteAnecdote() }>vote</button>
      <button onClick={ () => getRandomAnecdote() } >next anecdote</button>
      <h1>Anecdote with the most votes</h1>
      {anecdotes[max]}<br />
      has {votes[max]}
    </div>
  );
};

export default App;