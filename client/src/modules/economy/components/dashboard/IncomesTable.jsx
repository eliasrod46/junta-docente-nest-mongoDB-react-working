import React, { useState, useEffect } from "react";
import { useAccountMovements } from "../hooks/useAccountMovements";
const COLUMNS = ["Año", "Mes", "Fecha", "Monto", "Categoria", "Descripcion"];
export function IncomesTable() {
  const [actionDate, setActionDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  });
  const [rows, setRows] = useState([]);
  const { incomes, getAllIncomes, saveIncome, updateIncome, deleteIncome } =
    useAccountMovements();

  useEffect(() => {
    getAllIncomes(actionDate);
  }, []);

  useEffect(() => {
    setRows(incomes);
  }, [incomes]);

  // manejador busqueda general
  const handleChange = (e) => {
    const { value } = e.target;

    // Toma una copia del arreglo original  (data) en lugar de rows
    let updatedList = DATOS.filter((dato) => {
      return (
        value === "" ||
        dato.nombre.toLowerCase().includes(value.toLowerCase()) ||
        dato.apellido.toLowerCase().includes(value.toLowerCase()) ||
        dato.dni.toLowerCase().includes(value.toLowerCase())
      );
    });
    // Actualiza los valores renderizados
    setRows(updatedList);
  };

  const handleChangeDate = (e) => {
    const { name, value } = e.target;
    setActionDate((prevDate) => ({
      ...prevDate,
      [name]: value,
    }));
  };

  const handleClickDate = () => {
    getAllIncomes(actionDate);
  };

  //====>Return<====
  return (
    <div className="text-center">
      <h1 className="text-center">hola</h1>
      <div className="">
        <div>
          <span>Buscar:</span>
          <input type="text" onChange={handleChange} />
        </div>
        <div>
          <span>Año:</span>
          <input
            type="number"
            name="year"
            min="2021"
            max="2024"
            step="1"
            onChange={handleChangeDate}
          />
          <span>Mes:</span>
          <input
            type="number"
            name="month"
            min="1"
            max="12"
            step="1"
            onChange={handleChangeDate}
          />
          <button onClick={handleClickDate}>Cambiar Fecha</button>
        </div>
      </div>
      <table className="mx-auto">
        <thead>
          <tr>
            {COLUMNS.map((column, i) => {
              return <th key={i}>{column}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            return (
              <tr key={i}>
                <td>{row.year}</td>
                <td>{row.month}</td>
                <td>{row.date}</td>
                <td>{row.mount}</td>
                <td>{row.category}</td>
                <td>{row.decription}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
