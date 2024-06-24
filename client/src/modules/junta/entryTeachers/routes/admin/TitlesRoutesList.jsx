import { Route, Routes } from "react-router-dom";
import { Titles } from "../../pages/Titles";

export function TitlesRoutesList() {
  return (
    <Routes>
      <Route path="/junta/admin/titulos" element={<Titles />} />
    </Routes>
  );
}
