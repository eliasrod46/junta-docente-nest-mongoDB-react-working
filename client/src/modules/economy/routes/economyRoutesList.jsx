import { Route, Routes } from "react-router-dom";
// pages
import { Dashboard } from "../pages/dashboard";
import { Ingresos } from "../pages/Ingresos";
import { Expenses } from "../pages/Expenses";
import { AddExpense } from "../pages/AddExpense";
import { GestionCategorias } from "../pages/admin/GestionCategorias";
// providers
import { CategoriesProvider } from "../contexts/CategoriesContext";

export function EconomyRoutesList() {
  return (
    <CategoriesProvider>
      <Routes>
        <Route path="/economia/ingresos" element={<Ingresos />} />
        <Route path="/economia/dashboard" element={<Dashboard />} />
        <Route path="/economia/egresos" element={<Expenses />} />
        <Route path="/economia/egresos/agregar" element={<AddExpense />} />
        {/* admin routes */}
        <Route
          path="/economia/admin/categorias"
          element={<GestionCategorias />}
        />
      </Routes>
    </CategoriesProvider>
  );
}
