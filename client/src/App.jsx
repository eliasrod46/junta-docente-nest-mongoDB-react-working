import "./App.css";
import { Header } from "./components/Header/Header";
import { IndexRoutesList } from "./routes/IndexRoutesList";
// providers
// import { TeachersProvider } from "./modules/junta/teachers/contexts/TeachersContext";
// import { ShiftsProvider } from "./modules/junta/entryTeachers/contexts/ShiftsContext";
// import { TitlesProvider } from "./modules/junta/entryTeachers/contexts/TitlesContext";
// junta module routes
// import { ShiftRoutesList } from "./modules/junta/entryTeachers/routes/ShiftRoutesList";
// import { TeacherRoutesList } from "./modules/junta/teachers/routes/TeacherRoutesList";
// import { TitlesRoutesList } from "./modules/junta/entryTeachers/routes/admin/TitlesRoutesList";
// foodRecipes module routes
// import { IngredientsRoutesList } from "./modules/foodRecipes/routes/IngredientRoutesList";
// economy module routes
import { EconomyRoutesList } from "./modules/economy/routes/economyRoutesList";

function App() {
  return (
    <main className="bg-cover bg-[url('./assets/fondo.jpg')] h-screen p-2 overflow-y-auto">
      <div>
        <Header />

        
        <IndexRoutesList />

        {/* economy module */}
        {/* economy module routes */}
        <EconomyRoutesList />

        {/* junta module
        junta module proviers 
        <TeachersProvider>
        <ShiftsProvider>
        <TitlesProvider>
        junta module routes
        <TeacherRoutesList />
        <ShiftRoutesList />
        <TitlesRoutesList />
        </TitlesProvider>
        </ShiftsProvider>
        </TeachersProvider> */}

        {/* foodRecipes module
        foodRecipes module routes
        <IngredientsRoutesList /> */}
      </div>
    </main>
  );
}

export default App;
