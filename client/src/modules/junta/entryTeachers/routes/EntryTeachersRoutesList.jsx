import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Shifts } from "../pages/Shifts";

export function EntryTeachersRoutesList() {
  return (
    <Routes>
      <Route path="/junta/ingreso/dashboard" element={<Dashboard />} />
      <Route path="/junta/ingreso/turnos" element={<Shifts />} />
    </Routes>
  );
}
