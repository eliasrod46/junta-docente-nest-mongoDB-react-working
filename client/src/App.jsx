import { Header } from "./components/Header/Header";
import { RoutesList } from "./RoutesList";
import { TeachersProvider } from "./modules/teachers/contexts/TeachersContext";
import "./App.css";

function App() {
  return (
    <main className="bg-cover bg-[url('./assets/fondo.jpg')] h-screen p-2">
      <div>
        <Header />
        <TeachersProvider>
          <RoutesList />
        </TeachersProvider>
      </div>
    </main>
  );
}

export default App;

//
