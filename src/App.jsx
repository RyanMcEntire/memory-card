import { useState } from 'react';
import Cards from './components/CardDisplay';
import RoundOver from './components/RoundOver';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [status, setStatus] = useState('playing');

  return (
    <div>
      <div>App</div>
      <Cards />
      <RoundOver />
    </div>
  );
}

export default App;
