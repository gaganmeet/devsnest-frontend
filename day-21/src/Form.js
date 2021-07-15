import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";
const Form = ({ food, setFood, id, setEdit }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (id !== undefined) {
      onSubmitEdit(data);
      return;
    }
    id = nanoid();
    data = { id, ...data };
    setFood(food.concat(data));
  };
  const onSubmitEdit = (data) => {
    let newData = [];
    for (let obj of food) {
      if (obj.id === id) {
        obj.name = data.name;
        obj.kcal = data.kcal;
      }
      newData.push(obj);
    }
    setFood(newData);
    setEdit({
      id: null,
      name: "",
      kcal: "",
    });
  };
  return (
    <div className="form-container ba bw1 br4 pa4 ma4">
      <form
        className="flex flex-column h3 items-center justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <input
            className="ma1 pa1 br2"
            type="text"
            {...register("name")}
            placeholder="food item"
          />
          <input
            className="ma1 pa1 br2"
            type="number"
            {...register("kcal")}
            placeholder="calories"
          />
        </div>
        <div>
          <input className="w5 ma1 pa2 br-pill form-btn" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
