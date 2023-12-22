import { useDispatch } from "react-redux";
import { useState } from "react";

import { addemployees } from "../../store/employesSlice";

import "./employees-add-form.css";

const EmployeesAddForm = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const onSubmitForm = (event) => {
    event.preventDefault();
    dispatch(addemployees({ name }));
    setName("");
  };

  return (
    <div className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form
        onSubmit={(event) => onSubmitForm(event)}
        className="add-form d-flex"
      >
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          className="form-control new-post-label"
          placeholder="Как его зовут?"
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="З/П в $?"
        />

        <button type="submit" className="btn btn-outline-light">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;
