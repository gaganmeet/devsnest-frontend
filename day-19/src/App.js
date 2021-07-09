import { useState } from "react";
import "./App.css";

function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);

  return (
    <div className="App">
      <button
        className="btn"
        onClick={() => setCounter1((counter1) => counter1 + 1)}
      >
        {counter1}
      </button>
      <button
        className="btn"
        onClick={() => setCounter2((counter2) => counter2 + 1)}
      >
        {counter2}
      </button>
      <button
        className="btn"
        onClick={() => setCounter3((counter3) => counter3 + 1)}
      >
        {counter3}
      </button>
      <button
        className="btn"
        onClick={() => setCounter4((counter4) => counter4 + 1)}
      >
        {counter4}
      </button>
    </div>
  );
}

export default App;
