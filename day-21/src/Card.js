import React from "react";
import Form from "./Form";
const Card = ({ id, name, kcal, food, setFood }) => {
  const [edit, setEdit] = React.useState({
    id: null,
    name: "",
    kcal: "",
  });
  const handleDelete = () => {
    const newList = food.filter((fd) => fd.id !== id);
    setFood(newList);
  };
  const handleEdit = () => {
    setEdit({ id: id, name: name, kcal: kcal });
  };
  if (edit.id) {
    return <Form food={food} setFood={setFood} id={id} setEdit={setEdit}/>;
  }
  return (
    <div className="card ba bw1 br4 pa3 ma4 w-80 flex flex-column justify-around items-start">
      <h2>{name}</h2>
      <p>You have consumed {kcal} calories</p>
      <div className=" flex flex-row">
        <button onClick={handleDelete} className="btn form-btn br-pill pa2 ma2">
          Delete
        </button>
        <button onClick={handleEdit} className="btn edit-btn br-pill pa2 ma2">
          Edit
        </button>
      </div>
    </div>
  );
};

export default Card;
