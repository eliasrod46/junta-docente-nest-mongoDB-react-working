import React, { useState, useEffect } from "react";
import { useTeachers } from "../hooks/useTeachers";

const COLUMNS = ["#", "Dni", "Apellido", "Nombre", "Acciones"];
import { InfoButton, SecondaryButton } from "../../../../components/Buttons";

export function TeachersTable() {
  const [rows, setRows] = useState([]);
  const {
    teachers,
    getAllTeachers,
    saveTeacher,
    deleteTeacher,
    updateTeacher,
  } = useTeachers();

  useEffect(() => {
    getAllTeachers();
  }, []);

  useEffect(() => {
    setRows(teachers);
  }, [teachers]);

  // manejador busqueda general
  const handleChange = (e) => {
    const { value } = e.target;

    if (value != false) {
      // Toma una copia del arreglo original  (data) en lugar de rows
      let updatedList = rows.filter((row) => {
        return (
          value === "" ||
          row.year.toLowerCase().includes(value.toLowerCase()) ||
          row.type.toLowerCase().includes(value.toLowerCase()) ||
          row.date.toLowerCase().includes(value.toLowerCase()) ||
          row.time.toLowerCase().includes(value.toLowerCase())
        );
      });

      // Actualiza los valores renderizados
      setRows(updatedList);
    } else {
      getAllShifts();
    }
  };

  //====>Return<====
  return (
    <div className="text-center ">
      {/* Table header */}
      <div className="flex flex-col md:flex-row items-center pb-5 md:pb-1  ">
        <div>
          <InfoButton>Agregar</InfoButton>
        </div>
        <div className="flex flex-col w-3/12 mx-auto placeholder pb-5">
          <span>Buscar:</span>
          <input
            className="p-1 outline-none border border-gray-500 rounded-xl"
            type="text"
            onChange={handleChange}
            placeholder="work in porgress"
          />
        </div>
        <div>
          <SecondaryButton>Importar</SecondaryButton>
        </div>
      </div>

      {/* Large View */}
      <table className="mx-auto w-10/12 lg:w-8/12 bg-black bg-opacity-85 rounded hidden md:table">
        <thead className="border-b-4 border-gray-300">
          <tr>
            {COLUMNS.map((column, i) => {
              return (
                <th
                  className="text-gray-300 p-1 text-lg font-bold font-mono"
                  key={i}
                >
                  {column}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="">
          {rows.map((row, i) => {
            return (
              <tr className="border-b border-gray-300" key={i}>
                <td className="text-gray-300 text-md font-light p-1">
                  {i + 1}
                </td>
                <td className="text-gray-300 text-md font-light p-1">
                  {row.dni}
                </td>
                <td className="text-gray-300 text-md font-light p-1">
                  {row.lastname}
                </td>
                <td className="text-gray-300 text-md font-light p-1">
                  {row.name}
                </td>
                <td className="text-gray-300 text-md font-light p-1">
                  acciones
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Mobile View */}
      <seccion className="mx-auto bg-black bg-opacity-85 rounded block md:hidden">
        {rows.map((row, i) => {
          return (
            <div className="border-b border-gray-300 py-2" key={i}>
              <span className="text-gray-300 text-md font-light block">
                {i + 1}
              </span>
              <span className="text-gray-300 text-md font-light block">
                {COLUMNS[1]}: {row.dni}
              </span>
              <span className="text-gray-300 text-md font-light block">
                {COLUMNS[2]}: {row.lastname}
              </span>
              <span className="text-gray-300 text-md font-light block">
                {COLUMNS[3]}: {row.name}
              </span>
              <span className="text-gray-300 text-md font-light block">
                acciones
              </span>
            </div>
          );
        })}
      </seccion>
    </div>
  );
}
