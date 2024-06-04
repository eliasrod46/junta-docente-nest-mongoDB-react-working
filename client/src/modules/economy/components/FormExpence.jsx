import React, { useEffect, useState, use } from "react";
import { useCategories } from "../hooks/useCategories";

import { InputTextarea } from "primereact/inputtextarea";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";

export function Form() {
  const { categories, getAllCategories } = useCategories();
  const [common, setCommon] = useState([]);
  const [general, setGeneral] = useState([]);
  const [values, setValues] = useState({
    date: "",
    mount: "",
    category: "",
    generalCategory: "",
    description: "",
  });

  useEffect(() => {
    getAllCategories();

    const opciones = { year: "numeric", month: "2-digit", day: "2-digit" };
    const fechaFormateada = new Date().toLocaleDateString("es-AR", opciones);
    setValues({
      ...values,
      date: fechaFormateada,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "date") {
      const fechaFormateada = value.split("-").reverse().join("/");
      setValues({
        ...values,
        date: fechaFormateada,
      });
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };
  useEffect(() => {
    setGeneral(categories.filter((category) => category.level == "general"));

    setCommon(categories.filter((category) => category.level == "common"));
  }, [categories]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", values);
  };

  return (
    <div>
      <h1>Formulario simple</h1>
      <form onSubmit={handleSubmit}>
        {/* date   */}
        <div>
          <label>
            Fecha:
            <input type="date" onChange={handleChange} id="date" name="date" />
          </label>
        </div>
        {/* mount   */}
        <div>
          <label>
            Monto:
            <input
              type="number"
              onChange={handleChange}
              id="mount"
              name="mount"
            />
          </label>
        </div>
        {/* category */}
        <div>
          <label>
            Categoria:
            <input
              type="text"
              id="category"
              onChange={handleChange}
              name="category"
              list="categories"
            />
            <datalist id="categories">
              {common.map((category) => {
                return <option key={category.id} value={category.name} />;
              })}
            </datalist>
          </label>
        </div>

        {/* general category */}
        <div>
          <label>
            Categoria General:
            <input
              type="text"
              id="generalCategory"
              name="generalCategory"
              list="generalCategories"
              onChange={handleChange}
            />
            <datalist id="generalCategories">
              {general.map((category) => {
                return <option key={category.id} value={category.name} />;
              })}
            </datalist>
          </label>
        </div>
        {/* general category */}
        <div>
          <label>
            Descripcion:
            <input
              type="text"
              id="description"
              name="description"
              onChange={handleChange}
            />
          </label>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Form;
