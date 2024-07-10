// トップページ
// pages/index.js
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
export default function Home() {
  const [currentFloor, setCurrentFloor] = useState(1);
  const [targetFloor, setTargetFloor] = useState(null);
  useEffect(() => {
    if (targetFloor !== null && targetFloor !== currentFloor) {
      const timer = setTimeout(() => {
        setCurrentFloor(prev => (prev < targetFloor ? prev + 1 : prev - 1));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentFloor, targetFloor]);
  return (
    <div className={styles.container}>
      <h1>Elevator Simulator</h1>
      <div className={styles.elevator}>
        <p>Current Floor: {currentFloor}</p>
        <div className={styles.buttons}>
          {[1, 2, 3, 4, 5, 6].map(floor => (
            <button key={floor} onClick={() => setTargetFloor(floor)}>
              {floor}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
