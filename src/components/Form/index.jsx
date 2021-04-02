import { useState } from "react";
import WrapperError from "../Error";
import Subtitle from "../Subtitle";
import "./style.scss";
const Form = ({ Searchcategory }) => {
  const [category, Setcategory] = useState("");
  const [error, SetError] = useState(false);
  const handleOnCategory = (e) => {
    const { value } = e.target;
    Setcategory(value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (category.trim() === "") {
      SetError(true);
      return;
    }
    SetError(false);
    Searchcategory(category);
  };
  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <Subtitle subtitle="Ingresa una categoria a buscar" />
      {error ? <WrapperError text="debes ingresar una categoria" /> : null}
      <div className="wrapperInputs">
        <input
          placeholder="ingresa una categoria a buscar"
          value={category}
          onChange={handleOnCategory}
          className="input"
        />
        <button className="button" type="submit">
          Buscar
        </button>
      </div>
    </form>
  );
};

export default Form;
