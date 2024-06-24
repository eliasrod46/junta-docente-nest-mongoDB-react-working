import { useContext } from "react";
import { TitlesContext } from "../contexts/TitlesContext";

//this hook recive and returns all functions of context
export const useTitles = () => {
  const titles = useContext(TitlesContext);

  //verify if use this hook inside of provider
  if (titles === undefined) {
    throw new Error("useTitles must be used within a ShiftsProvider");
  }

  return titles;
};
