import { Route, Routes } from "react-router-dom";
import { Shifts } from "./modules/entryTeachers/pages/Shifts";

export function ShiftRoutesList() {
  return (
    <Routes>
      <Route path="/turnos" element={<Shifts />} />
    </Routes>
  );
}
