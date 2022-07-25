import "./App.css";
import { useState } from "react";
import { ColorContext } from "./ColorContext";
import AddColor from "./AddColor";
import ColorList from "./ColorList";
import ColorCounter from "./ColorCounter";

function App() {
  const [enteredName, setEnteredName] = useState("");
  const [enteredColor, setEnteredColor] = useState("");
  const [Arr, setArr] = useState([]);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredColorTouched, setEnteredColorTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(-1);
  return (
    <ColorContext.Provider
      value={{
        enteredName,
        setEnteredName,
        enteredColor,
        setEnteredColor,
        Arr,
        setArr,
        enteredNameTouched,
        setEnteredNameTouched,
        enteredColorTouched,
        setEnteredColorTouched,
        formIsValid,
        setFormIsValid,
        isEditing,
        setIsEditing,
        editingIndex,
        setEditingIndex,
      }}
    >
      <div className="App">
        <AddColor />
        <ColorList />
        <ColorCounter />
      </div>
    </ColorContext.Provider>
  );
}

export default App;
