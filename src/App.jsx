import { useState, useEffect } from 'react';
import CardDisplay from './components/CardDisplay';
import './index.css';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => document.body.classList.add('bg-deepPurple'));

  const handleEndRound = () => {
    setScore((prevScore) => {
      setBestScore((prevBestScore) => Math.max(prevBestScore, prevScore));
      return 0;
    });
  };

  return (
    <div className=" p-6 text-slate-300">
      <div className="flex justify-between max-w-7xl">
        <div>
          <div className=" text-7xl font-serif">LOONA Memory</div>
          <div className='m-3'>
            Click a unique card each round until all 12 cards are clicked. Start
            over if you click the same card twice.
          </div>
        </div>
        <div className="flex flex-col me-12">
          <div className="place-self-end">Current Score: {score}</div>
          <div className="place-self-end">Best Score: {bestScore}</div>
          <div className="text-2xl place-self-end text-lightBrown">{isPlaying ? '' : 'Try Again!'}</div>
        </div>
      </div>
      <CardDisplay
        onCorrect={() => { 
          setScore(score + 1);
          setIsPlaying(true)
        }}
        score={score}
        onEndRound={() => {
          handleEndRound();
          setIsPlaying(false)
        
        }}
      />
    </div>
  );
}

export default App;
