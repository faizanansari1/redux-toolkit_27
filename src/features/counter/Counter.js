import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRenderNumber } from "./counterSlice";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
  resateCounter,
} from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const counter = useSelector(selectCount);
  const dispatch = useDispatch();
  if (counter.isLoading) {
    return <div>Loadding....</div>;
  }

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{counter.value}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => dispatch(resateCounter())}
        >
          Resate Counter
        </button>

        <button
          className={styles.asyncButton}
          onClick={() => dispatch(fetchRenderNumber())}
        >
          Fetch async button
        </button>
      </div>
    </div>
  );
}
