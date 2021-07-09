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
  return (
    <div className="App flex flex-column justify-center items-center">
      <h1>Calories</h1>
      <div className="cards h-25 w-25 shadow-1">
        {calories.map((data, index) => (
          <Card key={index} title={data.title} kcal={data.kcal} />
        ))}
      </div>
    </div>
  );
}

export default App;
