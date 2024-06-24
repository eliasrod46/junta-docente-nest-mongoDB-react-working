import React, { useState, useEffect } from "react";
export function SimpleTable({ columns, data }) {
  useEffect(() => {
    // console.log(columns);
    // console.log(data);
  }, []);
  //====>Return<====
  return (
    <div className="bg-white bg-opacity-30 rounded-md p-2">
      {data && columns ? (
        <table className="mx-auto">
          <thead className="border-b-2 border-black">
            <tr>
              {columns.map((column, i) => {
                return (
                  <th className="rounded-md px-4 py-2" key={i}>
                    {column}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => {
              return (
                <tr className="border-b border-black" key={i}>
                  <td>{row.category}</td>
                  <td className="rounded-md px-4 py-2 text-center">
                    {row.real}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>errorcito</p>
      )}
    </div>
  );
}
