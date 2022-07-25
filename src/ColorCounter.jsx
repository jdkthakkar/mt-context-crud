import { useContext } from "react";
import { ColorContext } from "./ColorContext";

function ColorCounter() {
  const { Arr } = useContext(ColorContext);
  return (
    <div>
      <p>Red: {Arr.filter((obj) => obj.color === "Red").length}</p>
      <p>Green: {Arr.filter((obj) => obj.color === "Green").length}</p>
      <p>Blue: {Arr.filter((obj) => obj.color === "Blue").length}</p>
    </div>
  );
}

export default ColorCounter;
