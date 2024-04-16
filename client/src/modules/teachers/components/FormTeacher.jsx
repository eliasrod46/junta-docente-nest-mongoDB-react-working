import { classNames } from "primereact/utils";
import { InputText } from "primereact/inputtext";

export const FromTeacher = ({ teacher, errors, submitted, onInputChange }) => {
  return (
    <>
      <h2>Teacher Detail</h2>
      {/* dni */}
      <div className="my-5">
        <label htmlFor="dni" className="font-bold block">
          DNI
        </label>
        <InputText
          id="dni"
          type="number"
          value={teacher.dni}
          onChange={(e) => onInputChange(e, "dni")}
          required
          autoFocus
          className={classNames({ "p-invalid": submitted && !teacher.dni })}
        />
        <ul>
          {errors.map((error, i) => {
            return (
              error.path === "dni" && (
                <li key={i}>
                  <small className="p-error">{error.msg}</small>
                </li>
              )
            );
          })}
        </ul>
      </div>

      {/* lastname */}
      <div className="my-5">
        <label htmlFor="lastname" className="font-bold block">
          Apellido
        </label>
        <InputText
          id="lastname"
          value={teacher.lastname}
          onChange={(e) => onInputChange(e, "lastname")}
          required
          autoFocus
          className={classNames({
            "p-invalid": submitted && !teacher.lastname,
          })}
        />
        <ul>
          {errors.map((error, i) => {
            return (
              error.path === "lastname" && (
                <li key={i}>
                  <small className="p-error">{error.msg}</small>
                </li>
              )
            );
          })}
        </ul>
      </div>

      {/* name */}
      <div className="my-5">
        <label htmlFor="name" className="font-bold block">
          Nombre
        </label>
        <InputText
          id="name"
          value={teacher.name}
          onChange={(e) => onInputChange(e, "name")}
          required
          autoFocus
          className={classNames({ "p-invalid": submitted && !teacher.name })}
        />
        <ul>
          {errors.map((error, i) => {
            return (
              error.path === "name" && (
                <li key={i}>
                  <small className="p-error">{error.msg}</small>
                </li>
              )
            );
          })}
        </ul>
      </div>
    </>
  );
};
