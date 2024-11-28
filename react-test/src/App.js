import { useState } from "react";
import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const list = [1, 2, 71, 87];
  const [count, setCount] = useState(0);
  function onClick() {
    setCount((prev) => prev + 1);
  }
  useEffect(() => {
    console.log("Rendered");
  }, []);
  return (
    <div className="App">
      <button onClick={onClick}>Increase Count</button>
      <h6>{count}</h6>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
