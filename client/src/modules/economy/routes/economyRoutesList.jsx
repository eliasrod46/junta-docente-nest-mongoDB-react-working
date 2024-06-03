import { Route, Routes } from "react-router-dom";
// pages
import { Dashboard } from "../pages/dashboard";
import { Ingresos } from "../pages/Ingresos";
import { Egresos } from "../pages/Egresos";
import { GestionCategorias } from "../pages/admin/GestionCategorias";
// providers
import { CategoriesProvider } from "../contexts/CategoriesContext";

export function EconomyRoutesList() {
  return (
    <CategoriesProvider>
      <Routes>
        <Route path="/economia/ingresos" element={<Ingresos />} />
        <Route path="/economia/egresos" element={<Egresos />} />
        <Route path="/economia/dashboard" element={<Dashboard />} />
        <Route
          path="/economia/admin/categorias"
          element={<GestionCategorias />}
        />
      </Routes>
    </CategoriesProvider>
  );
}
