import DataTable from "react-data-table-component";

import { useTeachers } from "../hooks/useTeachers";

//---- de aca para abajo todo ok
const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Year",
    selector: (row) => row.year,
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
];

export function TeachersTableTwo() {
  //====================>hooks
  const { teachers, getAllTeachers, saveTeacher, deleteTeacher } =
    useTeachers();
  //====>Return<====
  return (
    <>
      <h1>estoy aqui</h1>
      <DataTable columns={columns} data={data} pagination />
    </>
  );
}
