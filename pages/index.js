// トップページ
// pages/index.js
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [currentFloor, setCurrentFloor] = useState(1);
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    if (queue.length > 0) {
      const targetFloor = queue[0];

      if (currentFloor !== targetFloor) {
        const timer = setTimeout(() => {
          setCurrentFloor(prev => (prev < targetFloor ? prev + 1 : prev - 1));
        }, 1000);
        return () => clearTimeout(timer);

      } else {
        setQueue(prev => prev.slice(1));
      }

    }
  }, [currentFloor, queue]);
  const addToQueue = (floor) => {
    if (!queue.includes(floor)) {
      setQueue(prev => [...prev, floor]);
    }
  };
  return (
    <div className={styles.container}>
      <h1>Elevator Simulator</h1>
      <div className={styles.elevator}>
        <p>Current Floor: {currentFloor}</p>
        <div className={styles.buttons}>
          {[1, 2, 3, 4, 5, 6].map(floor => (
            <button key={floor} onClick={() => addToQueue(floor)}>
              {floor}
            </button>
          ))}
        </div>
        <p>Queue: {queue.join(', ')}</p>
      </div>
    </div>
  );
}
