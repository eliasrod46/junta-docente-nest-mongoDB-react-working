import "./App.css";
import { Route, Routes } from "react-router-dom";

import { TACOS } from "./mocks/tacos.js";

import { Home } from "./pages/Home.jsx";
import { SearchPage } from "./pages/SearchPage.jsx";
import { TacoIndex } from "./pages/TacoIndex.jsx";
import { Tacos } from "./pages/Tacos.jsx";
import { TacoDetails } from "./pages/TacoDetails.jsx";
import { NavBar } from "./components/NavBar.jsx";

function App() {
  return (
    <>
      <h1>SERA?</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-page" element={<SearchPage tacos={TACOS} />} />
        <Route path="/taco/:id" element={<Tacos />}>
          <Route index element={<TacoIndex />} />
          <Route path="details" element={<TacoDetails />} />
        </Route>
        {/* Soft 404 */}
        <Route path="*" element={<h1>NotFound</h1>} />
        {/* hard 404 */}
        {/* <Route path="*" element={<h1>redirect to 404 ferom server</h1>} /> */}
      </Routes>
    </>
  );
}

export default App;
