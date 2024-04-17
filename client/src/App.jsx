import { Header } from "./components/Header/Header";
import { RoutesList } from "./RoutesList";
import { TeachersProvider } from "./modules/teachers/contexts/TeachersContext";

function App() {
  return (
    <main className="bg-violet-400 h-screen p-2">
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
