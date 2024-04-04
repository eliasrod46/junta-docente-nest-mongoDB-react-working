import "./TacoDetails.css";
import { useParams } from "react-router-dom";
import { TACOS } from "../mocks/tacos.js";

export const TacoDetails = () => {
  const { id } = useParams();
  const taco = TACOS.find((taco) => Number(id) === taco.id);

  console.log("el id");
  console.log(id);
  console.log("el id");

  return <p>{taco.detail}</p>;
};
