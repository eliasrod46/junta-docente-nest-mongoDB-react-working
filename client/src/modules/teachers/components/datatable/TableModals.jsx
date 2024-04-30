import { onInputChange } from "./handlerLogicFunction.js";
import { InputText } from "primereact/inputtext";

export const InputModal = ({ id, teacher, setTeacher }) => {
  return (
    <InputText
      id={id}
      value={teacher.name}
      onChange={(e) => onInputChange(e, id, teacher, setTeacher)}
      required
      autoFocus
      className="text-md p-1 rounded-lg"
    />
  );
};

export const ShowErrors = ({ id, errors }) => {
  return (
    <ul>
      {errors.map((error, i) => {
        return (
          error.path === id && (
            <li key={i}>
              <small className="p-error">{error.msg}</small>
            </li>
          )
        );
      })}
    </ul>
  );
};

export const LabelModal = ({ id, label }) => {
  return (
    <label htmlFor={id} className="font-bold block">
      {label}
    </label>
  );
};
