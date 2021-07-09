import React from "react";

const Card = ({ title, kcal }) => {
  return (
    <div className="card flex flex-column h-90 w-80 ma2">
      <h1>{title}</h1>
      <h4>You have consumed {kcal} today</h4>
    </div>
  );
};

export default Card;
