import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Teachers } from "./modules/teachers/pages/Teachers";

export function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<h1>la raiz de todo</h1>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/teachers" element={<Teachers />} />
      {/* Soft 404 */}
      <Route path="*" element={<h1>NotFound</h1>} />
    </Routes>
  );
}
