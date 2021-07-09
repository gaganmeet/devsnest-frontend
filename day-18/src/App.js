import "./App.css";
import Row from "./Row";
function App() {
  const chess = [];
  for (let i = 0; i < 8; i++) {
    chess.push(<Row key={i} />);
  }

  return (
    <div className="App">
      <div className="container">{chess}</div>
    </div>
  );
}

export default App;
