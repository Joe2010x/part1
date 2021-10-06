import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];
  let len = anecdotes.length;
  const [selected, setSelected] = useState(Math.floor(Math.random() * len));
  const [points, setPoint] = useState(Array(len).fill(0));
  const [test, setTest] = useState(false);
 // console.log(points);
  const [maxVote, setMaxVote] = useState({
    index: 0,
    number: 0,
  });

  const handleNext = () => {
    let randSel = Math.floor(Math.random() * len);
    console.log(len, randSel);
    setSelected(randSel);
  };

  const handleVote = () => {
    const copy = { ...points };
    // increment the property 2 value by one
    copy[selected] = copy[selected] + 1;

    console.log(selected, copy[selected]);

    for (let i = 0; i < len; i++) {
      if (copy[i] > maxVote.number) {
        maxVote.number = copy[i];
        maxVote.index = i;
        console.log(i, copy[i]);
        setMaxVote({ index: i, number: copy[i] });
      }
    }

    console.log(maxVote);
    setPoint(copy);
    setTest(true);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNext}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      {test ? (
        <div>
          <p>{anecdotes[maxVote.index]}</p>
          <p>has {maxVote.number} votes</p>
        </div>
      ) : (
        <p>not voted yet</p>
      )}
    </div>
  );
};

export default App;
