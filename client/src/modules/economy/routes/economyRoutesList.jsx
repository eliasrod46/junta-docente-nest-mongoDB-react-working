import { Route, Routes } from "react-router-dom";
// pages
import { Dashboard } from "../pages/dashboard";
import { Ingresos } from "../pages/Ingresos";
import { Expenses } from "../pages/Expenses";
import { GestionCategorias } from "../pages/admin/GestionCategorias";
// providers
import { CategoriesProvider } from "../contexts/CategoriesContext";
import { AccountMovementsProvider } from "../contexts/AccountMovementsContext";

export function EconomyRoutesList() {
  return (
    <CategoriesProvider>
      <AccountMovementsProvider>
        <Routes>
          <Route path="/economia/dashboard" element={<Dashboard />} />
          <Route path="/economia/ingresos" element={<Ingresos />} />
          <Route path="/economia/egresos" element={<Expenses />} />
          {/* admin routes */}
          <Route
            path="/economia/admin/categorias"
            element={<GestionCategorias />}
          />
        </Routes>
      </AccountMovementsProvider>
    </CategoriesProvider>
  );
}
