import "./App.css";
import { AuthProvider } from "./modules/auth/contexts/authContext";
import { Header } from "./components/Header/Header";
import { IndexRoutesList } from "./routes/IndexRoutesList";
// foodRecipes module routes
// import { IngredientsRoutesList } from "./modules/foodRecipes/routes/IngredientRoutesList";
// auth module routes
import { AuthRoutesList } from "./modules/auth/routes/authRoutesList";
// economy module routes
import { EconomyRoutesList } from "./modules/economy/routes/economyRoutesList";
// junta module routes
import { JuntaRoutesList } from "./modules/junta/JuntaRoutesList";

function App() {
  return (
    <main className="bg-cover bg-[url('./assets/fondo.jpg')] h-screen p-2 overflow-y-auto">
      <AuthProvider>
        <div>
          <Header />
          {/* auth routes */}
          <AuthRoutesList />
          {/* index routes */}
          <IndexRoutesList />
          {/* economy routes */}
          <EconomyRoutesList />
          {/* junta routes */}
          <JuntaRoutesList />

          {/* foodRecipes module
        foodRecipes module routes
        <IngredientsRoutesList /> */}
        </div>
      </AuthProvider>
    </main>
  );
}

export default App;
