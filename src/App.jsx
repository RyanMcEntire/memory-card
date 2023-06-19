import { useState } from 'react';
import CardDisplay from './components/CardDisplay';
import RoundOver from './components/RoundOver';
import './index.css';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [status, setStatus] = useState('playing');

  return (
    <div className="bg-deepPurple p-6 text-slate-300">
      <div className="flex justify-between max-w-7xl">
        <div>
          <div className="font-bold text-3xl">Memory Card Game</div>
          <div>
            Click a unique card each round until all 12 cards are clicked. Start
            over if you click the same card twice.
          </div>
        </div>
        <div className="flex flex-col me-12">
          <div className="place-self-end">Current Score: {score}</div>
          <div className="place-self-end">Best Score: {bestScore}</div>
        </div>
      </div>
      <CardDisplay
        onCorrect={() => setScore(score + 1)}
        score={score}
        setScore={setScore}
      />
      <RoundOver />
    </div>
  );
}

export default App;
