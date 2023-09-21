"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/reduxStore";
import CounterScreen from "./components/CounterScreen";

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ height: "100vh" }}>
        <CounterScreen />
      </div>
    </Provider>
  );
};

export default App;
