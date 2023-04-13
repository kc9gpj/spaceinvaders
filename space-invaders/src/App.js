import React, { useState, useEffect } from 'react';
import { Player } from './Player';

const BOARD_WIDTH = 400;
const BOARD_HEIGHT = 600;
const PLAYER_WIDTH = 40;
const PLAYER_HEIGHT = 40;
const ENEMY_WIDTH = 40;
const ENEMY_HEIGHT = 40;
const BULLET_WIDTH = 5;
const BULLET_HEIGHT = 10;

function App() {
  const [playerPosition, setPlayerPosition] = useState({ x: BOARD_WIDTH / 2, y: BOARD_HEIGHT - PLAYER_HEIGHT });
  const [enemies, setEnemies] = useState([]);
  const [bullets, setBullets] = useState([]);

  useEffect(() => {
    const newEnemies = [];
    for (let i = 0; i < 10; i++) {
      newEnemies.push({
        x: i * (ENEMY_WIDTH + 10) + 10,
        y: 50,
      });
    }
    setEnemies(newEnemies);
  }, []);

  function handleKeyDown(event) {
    console.log('key pressed');
    const speed = 10;
    switch (event.key) {
      case 'ArrowLeft':
        setPlayerPosition((prev) => ({ ...prev, x: prev.x - speed }));
        break;
      case 'ArrowRight':
        setPlayerPosition((prev) => ({ ...prev, x: prev.x + speed }));
        break;
      case ' ':
        const newBullets = [...bullets];
        newBullets.push({
          x: playerPosition.x + PLAYER_WIDTH / 2 - BULLET_WIDTH / 2,
          y: playerPosition.y - BULLET_HEIGHT,
        });
        setBullets(newBullets);
        break;
      default:
        break;
    }
  }
  

  useEffect(() => {
    console.log('updating bullets');
    const intervalId = setInterval(() => {
      setBullets((prevBullets) =>
        prevBullets.filter((bullet) => bullet.y > 0).map((bullet) => ({ ...bullet, y: bullet.y - 10 }))
      );
    }, 50);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App" onKeyDown={handleKeyDown} tabIndex={0}>
      <svg width={BOARD_WIDTH} height={BOARD_HEIGHT}>
        <Player position={playerPosition}></Player>
        {enemies.map((enemy, index) => (
          <rect key={index} x={enemy.x} y={enemy.y} width={ENEMY_WIDTH} height={ENEMY_HEIGHT} fill="red" />
        ))}
        {bullets.map((bullet, index) => (
          <rect key={index} x={bullet.x} y={bullet.y} width={BULLET_WIDTH} height={BULLET_HEIGHT} fill="green" />
        ))}
      </svg>
    </div>
  );
}

export default App;
