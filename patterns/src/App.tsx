import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Singleton from "./design-patterns/singleton";

function App() {
  const s1 = Singleton.getInstance();
  const [count, setCount] = useState(() => {
    return s1.getCount();
  });

  function fetchCount() {
    setCount(() => {
      return s1.getCount();
    });
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React {count}</h1>
      <button
        onClick={() => {
          s1.incrementCount(1);
          fetchCount();
        }}
      >
        Fetch and Increment
      </button>
      <button
        onClick={() => {
          s1.decrementCount(1);
          fetchCount();
        }}
      >
        Fetch and Decrement
      </button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
