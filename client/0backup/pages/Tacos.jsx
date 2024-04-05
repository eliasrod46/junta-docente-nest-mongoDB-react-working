import "./Tacos.css";
import { TACOS } from "../mocks/tacos.js";
import { useParams, Link, Outlet } from "react-router-dom";

export const Tacos = () => {
  const { id } = useParams();
  const taco = TACOS.find((taco) => Number(id) === taco.id);

  return (
    <>
      <h1>Un taco llamado: {taco ? taco.name : "Sin tacos"}</h1>
      <Link to="details">ir a los detalles</Link>
      <Outlet />
    </>
  );
};
