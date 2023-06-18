import { useEffect, useState } from 'react';
import { cards } from '../assets/cards';
import Card from './Card';

export default function CardDisplay() {
  const [cardOrder, setCardOrder] = useState([]);
  const [picked, setPicked] = useState([]);

  useEffect(() => {
    setCardOrder(shuffleArray([...cards]));
  }, []);

  const reshuffleCards = () => {
    setCardOrder(shuffleArray([...cards]));
  };

  const pickCard = (e) => {
    if (picked.includes(e.target.name)) {
      setPicked([...(picked + e.target.name)]);
    }
  };

  function roundOver() {}

  function manageTurn(e) {
    pickCard(e) ? reshuffleCards() : roundOver();
  }

  return (
    <div className="flex flex flex-wrap">
      {cardOrder.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          krName={card.krName}
          img={card.img}
          onClick={manageTurn}
        />
      ))}
    </div>
  );
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
