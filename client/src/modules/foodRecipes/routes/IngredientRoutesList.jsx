import { Route, Routes } from "react-router-dom";
import { Shifts } from "./modules/entryTeachers/pages/Shifts";

export function IngredientsRoutesList() {
  return (
    <Routes>
      <Route path="/turnos" element={<Shifts />} />
    </Routes>
  );
}
