import React, { useState } from "react";

export function Form() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", values);
  };

  date, mount, category, decription;

  return (
    <div>
      <h1>Formulario simple</h1>
      <form onSubmit={handleSubmit}>
        {/* name   */}
        <div>
          <label>
            Nombre:
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
          </label>
        </div>
        {/* email */}
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </label>
        </div>
        {/* genere */}
        <div>
          <label>
            Femenino
            <input
              type="radio"
              name="gender"
              value="F"
              onChange={handleChange}
            />
          </label>
          <label>
            Masculino
            <input
              type="radio"
              name="gender"
              value="M"
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Enviar</button>
      </form>
      <div>
        <h2>Valores del formulario</h2>
        <p>Nombre: {values.name}</p>
        <p>Email: {values.email}</p>
        <p>Género: {values.gender}</p>
      </div>
    </div>
  );
}

export default Form;
