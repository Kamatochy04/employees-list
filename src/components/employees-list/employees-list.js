import { useSelector } from "react-redux";

import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = () => {
  const employes = useSelector((state) => state.employes.employes);
  return (
    <ul className="app-list list-group">
      {employes.map(({ name }) => (
        <EmployeesListItem name={name} />
      ))}
    </ul>
  );
};

export default EmployeesList;
