import { Route, Routes } from "react-router-dom";

export function IngredientsRoutesList() {
  return (
    <Routes>
      <Route path="/ingredientes" element={<h1> sera ingredient</h1>} />
    </Routes>
  );
}
