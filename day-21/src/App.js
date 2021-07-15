import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Form from "./Form";
import Card from "./Card";
function App() {
  const [food, setFood] = useState([
    {
      id: nanoid(),
      name: "apple",
      kcal: 50,
    },
  ]);
  return (
    <div className="App flex justify-start flex-column items-center">
      <h1>Calorie Tracker</h1>
      <Form food={food} setFood={setFood} />
      {food.map((data, index) => (
        <Card
          key={index}
          id={data.id}
          name={data.name}
          kcal={data.kcal}
          food={food}
          setFood={setFood}
        />
      ))}
    </div>
  );
}

export default App;
