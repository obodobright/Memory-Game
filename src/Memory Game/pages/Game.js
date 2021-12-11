import React from "react";
import { useState } from "react/cjs/react.development";
// import { data } from "./data";
import { Black, Gray, Green, Red, Yellow } from "./Colors";

import styles from "./styles.module.css";
import { Purple } from "./Colors";
const data = [
  {
    img: <Black />,
  },
  {
    img: <Gray />,
  },
  {
    img: <Red />,
  },
  {
    img: <Green />,
  },
  {
    img: <Yellow />,
  },
];

const Game = () => {
  const [card, setCard] = useState([]);
  const [turn, setTurn] = useState(0);
  const shuffleCard = () => {
    const shuffleCards = [...data, ...data]
      .sort(() => Math.random() - 5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCard(shuffleCards);
    setTurn(0);
  };
  console.log(card, turn);
  return (
    <div>
      <h1>Magic Match</h1>
      <button onClick={shuffleCard}>Start Game</button>
      <div className={styles.cardgrid}>
        {card.map((card) => (
          <div key={card.id}>
            <div className="card-front">{card.img}</div>
            <div className="card-back">
              <Purple />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game;
