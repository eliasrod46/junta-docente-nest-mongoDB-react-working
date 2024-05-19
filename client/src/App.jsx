import { Header } from "./components/Header/Header";
import { TeacherRoutesList } from "./TeacherRoutesList";
import { ShiftRoutesList } from "./ShiftRoutesList";
import { TeachersProvider } from "./modules/teachers/contexts/TeachersContext";
import { ShiftsProvider } from "./modules/entryTeachers/contexts/ShiftsContext";
import { IngredientsRoutesList } from "./modules/foodRecipes/routes/IngredientRoutesList";
import "./App.css";

function App() {
  return (
    <main className="bg-cover bg-[url('./assets/fondo.jpg')] h-screen p-2 overflow-y-auto">
      <div>
        <Header />
        <TeachersProvider>
          <ShiftsProvider>
            <TeacherRoutesList />
            <ShiftRoutesList />
            <IngredientsRoutesList />
          </ShiftsProvider>
        </TeachersProvider>
      </div>
    </main>
  );
}

export default App;
