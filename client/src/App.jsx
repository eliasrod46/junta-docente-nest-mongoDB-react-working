import { Header } from "./components/Header/Header";
import { RoutesList } from "./RoutesList";

function App() {
  return (
    <main className="bg-gray-500 h-screen pt-1">
      <Header />

      <RoutesList />
    </main>
  );
}

export default App;
