import { Route, Routes } from "react-router-dom";

export function IndexRoutesList() {
  return (
    <Routes>
      <Route path="/" element={<h1>la raiz de todo</h1>} />
      <Route path="/dashboard" element={<h1>la dashboard de todo</h1>} />
      
    </Routes>
  );
}
