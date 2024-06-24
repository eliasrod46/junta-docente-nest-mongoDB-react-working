import { Route, Routes } from "react-router-dom";
import { Teachers } from "../pages/Teachers";

export function TeacherRoutesList() {
  return (
    <Routes>
      <Route path="/junta/teachers" element={<Teachers />} />
      {/* Soft 404 */}
      {/* <Route path="/*" element={<h1>NotFound</h1>} /> */}
    </Routes>
  );
}
