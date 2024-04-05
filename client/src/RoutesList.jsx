import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Teachers } from "./pages/Teachers";

export function RoutesList() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/teachers" element={<Teachers />} />
      {/* Soft 404 */}
      <Route path="*" element={<h1>NotFound</h1>} />
    </Routes>
  );
}
