import { Header } from "./components/Header/Header";
import { RoutesList } from "./RoutesList";
import { TeachersProvider } from "./modules/teachers/contexts/TeachersContext";

function App() {
  return (
    <main className="bg-green-100 h-screen p-5">
      <div className="bg-gray-500 p-3 h-screen rounded-2xl">
        <Header />
        <TeachersProvider>
          <RoutesList />
        </TeachersProvider>
      </div>
    </main>
  );
}

export default App;
