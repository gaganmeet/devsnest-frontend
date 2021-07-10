import { useState } from "react";
import "./App.css";
import Card from "./Card";
function App() {
  const calories = [
    {
      title: "Pizza",
      kcal: 56,
    },
    {
      title: "Burger",
      kcal: 69,
    },
    {
      title: "Coke",
      kcal: 500,
    },
    {
      title: "Brownie",
      kcal: 180,
    },
    {
      title: "Fried Rice",
      kcal: 90,
    },
    {
      title: "Pani Puri",
      kcal: 10,
    },
  ];
  const [data, setData] = useState(calories);

  return (
    <div className="App flex flex-column justify-center items-center">
      <h1>Calories</h1>
      <div className="cards h-25 w-25 shadow-1">
        {data.map((d, index) => (
          <div className="flex flex-row">
            <Card
              key={index}
              idx={index}
              title={d.title}
              kcal={d.kcal}
              data={data}
              setData={setData}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
