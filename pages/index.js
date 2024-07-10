// トップページ
// pages/index.js
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [currentFloor, setCurrentFloor] = useState(1);
  return (
    <div className={styles.container}>
      <h1>Elevator Simulator</h1>
      <div className={styles.elevator}>
        <p>Current Floor: {currentFloor}</p>
        <div className={styles.buttons}>
          {[1, 2, 3, 4, 5, 6].map(floor => (
            <button key={floor} onClick={() => setCurrentFloor(floor)}>
              {floor}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
