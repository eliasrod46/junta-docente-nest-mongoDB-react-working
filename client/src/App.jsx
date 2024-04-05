import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Teachers } from "./pages/Teachers";

function App() {
  return (
    <>
      <Dashboard />
      <h1>Junta Rama Primaria</h1>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/teachers" element={<Teachers />} />

        {/* Soft 404 */}
        <Route path="*" element={<h1>NotFound</h1>} />
      </Routes>
    </>
  );
}

export default App;
