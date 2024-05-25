import React, { useState } from 'react';
import styles from '../Components/style1.module.css';

const Inc_Dec = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={styles.incDecMain}>
        <h2 className={styles.heading}>React Web</h2>
        <p className={styles.counter}>Count: {count}</p>
        <div>
          <button className={styles.action} onClick={() => { if (count > 0) setCount(count - 1); }}>Decrement</button>
          <button className={styles.action} onClick={() => { setCount(count + 1); }}>Increment</button>
          <br />
          <button className={styles.action} onClick={() => { setCount(0); }}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default Inc_Dec;
