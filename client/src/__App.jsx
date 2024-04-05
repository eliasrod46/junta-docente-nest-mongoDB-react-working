import "./App.css";
import { useRoutes } from "react-router-dom";

import { Home } from "./pages/Home.jsx";
import { SearchPage } from "./pages/SearchPage.jsx";
import { TacoIndex } from "./pages/TacoIndex.jsx";
import { Tacos } from "./pages/Tacos.jsx";
import { TacoDetails } from "./pages/TacoDetails.jsx";
import { NavBar } from "./components/NavBar.jsx";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search-page",
    element: <SearchPage />,
  },
  {
    path: "/taco/:id",
    element: <Tacos />,
    children: [
      {
        path: "index",
        element: <TacoIndex />,
      },
      {
        path: "details",
        element: <TacoDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>NotFound</h1>,
  },
];

function App() {
  const element = useRoutes(routes);
  return (
    <>
      <h1>SERA?</h1>
      <NavBar />
      {element}
    </>
  );
}

export default App;
