// using https://mui.com/x/react-data-grid/

import { useTeachers } from "../hooks/useTeachers";

import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

export function TeachersTableThree() {
  //====================>hooks
  const { teachers, getAllTeachers, saveTeacher, deleteTeacher } =
    useTeachers();

  React.useEffect(() => {
    getAllTeachers();
  }, []);

  const columns = [
    { field: "dni", headerName: "DNI", width: 150 },
    { field: "lastname", headerName: "Apellido", width: 150 },
    { field: "name", headerName: "Nombre", width: 150 },
  ];

  return (
    <Box sx={{ height: 700, width: 1 }}>
      <DataGrid
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        rows={teachers}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      />
    </Box>
  );
}
