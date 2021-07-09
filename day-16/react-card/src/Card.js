import React from "react";
import meme from "./mem.png";
const Card = () => {
  return (
    <div className="flex flex-column shadow-1 w-20 h-20">
      <img src={meme} alt="" />
      <h2>React Card</h2>
      <p>your main THA is to make meme cards</p>
    </div>
  );
};

export default Card;
