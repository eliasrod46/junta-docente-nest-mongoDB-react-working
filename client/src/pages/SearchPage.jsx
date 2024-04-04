import "./SearchPage.css";
import { Link } from "react-router-dom";
import { TACOS } from "../mocks/tacos.js";

export const SearchPage = ({ tacos }) => {
  return (
    <div>
      <h1>SearchPage</h1>
      <ul>
        {TACOS.map((taco) => {
          return (
            <li key={taco.id}>
              <Link to={`/taco/${taco.id}`}>{taco.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
