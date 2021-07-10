import React from "react";

const Card = ({ idx, title, kcal, data, setData }) => {
  function handleClick(index) {
    let newData = data.filter((val, idx) => {
      return idx !== index;
    });
    setData([...newData]);
  }
  return (
    <div className="card flex flex-column h-90 w-80 ma2">
      <h1>{title}</h1>
      <h4>You have consumed {kcal} today</h4>
      <button onClick={() => handleClick(idx)}>delete</button>
    </div>
  );
};

export default Card;
