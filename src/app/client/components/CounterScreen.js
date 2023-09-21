import React from "react";

import "../styles.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../features/counterSlice";

const CounterScreen = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button
          className="btn-action"
          onClick={() => {
            dispatch(increment());
          }}
        >
          INCREASE
        </button>
      </div>
      <div>
        <button
          className="btn-action"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          DECREASE
        </button>
      </div>
      <div>
        <button
          className="btn-action"
          onClick={() => {
            dispatch(
              incrementByAmount({
                increaseByAmount: 5,
              })
            );
          }}
        >
          INCEASE BY 5
        </button>
      </div>
      <div style={{ padding: "20px" }}>{count}</div>
    </div>
  );
};

export default CounterScreen;
