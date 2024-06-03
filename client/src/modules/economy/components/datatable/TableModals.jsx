import { onInputChange } from "./handlerLogicFunction.js";
import { InputText } from "primereact/inputtext";

export const InputModal = ({ id, element, setElement }) => {
  return (
    <InputText
      id={id}
      value={element[id]}
      onChange={(e) => onInputChange(e, id, element, setElement)}
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
              <small className="text-red-500 font-bold text-md">
                * {error.msg}
              </small>
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
