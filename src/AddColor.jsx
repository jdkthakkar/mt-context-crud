import { useContext, useEffect, useRef } from "react";
import { ColorContext } from "./ColorContext";

function AddColor() {
  const { enteredName, setEnteredName } = useContext(ColorContext);
  const { enteredColor, setEnteredColor } = useContext(ColorContext);
  const { Arr, setArr } = useContext(ColorContext);
  const { enteredNameTouched, setEnteredNameTouched } =
    useContext(ColorContext);
  const { enteredColorTouched, setEnteredColorTouched } =
    useContext(ColorContext);
  const { setFormIsValid } = useContext(ColorContext);
  const { isEditing, setIsEditing } = useContext(ColorContext);
  const { editingIndex, setEditingIndex } = useContext(ColorContext);
  const formRef = useRef("");

  const enteredNameIsValid = enteredName.trim() !== "";
  const enteredColorIsValid = enteredColor.trim() !== "";

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const colorInputIsInvalid = !enteredColorIsValid && enteredColorTouched;

  useEffect(() => {
    if (enteredNameIsValid && enteredColorIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredNameIsValid, enteredColorIsValid]);

  const nameInputChangeHandeler = (event) => {
    setEnteredName(event.target.value);
  };

  const colorInputChangeHandeler = (event) => {
    setEnteredColor(event.target.value);
  };

  const nameInputBlurHandeler = (event) => {
    setEnteredNameTouched(true);
  };

  const colorInputBlurHandeler = (event) => {
    setEnteredColorTouched(true);
  };
  const formSubmissionhandler = (event) => {
    event.preventDefault();

    if (isEditing) {
      let clonedArr = [...Arr];
      clonedArr[editingIndex] = { name: enteredName, color: enteredColor };
      setArr(clonedArr);
      setIsEditing(false);
      setEditingIndex(-1);
    } else {
      const allNames = Arr.map((obj) => obj.name);

      if (allNames.includes(enteredName)) {
        alert("Name already exists");
      } else {
        setArr([...Arr, { name: enteredName, color: enteredColor }]);
        console.log("new Arr added" + JSON.stringify(Arr));
      }
    }

    setEnteredName("");
    setEnteredColor("");
    setEnteredNameTouched(false);
    setEnteredColorTouched(false);

    formRef.current.reset();
  };

  const formClearHandler = () => {
    setIsEditing(false);
    setEditingIndex(-1);
    setEnteredName("");
    setEnteredColor("");
    setEnteredNameTouched(false);
    setEnteredColorTouched(false);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} action="" onSubmit={formSubmissionhandler}>
      <label htmlFor="Name">Name</label> &nbsp;
      {/* <p>Two way binding :- {enteredName}</p> */}
      <input
        type="text"
        name="name"
        className=""
        id="name"
        value={enteredName}
        onChange={nameInputChangeHandeler}
        onBlur={nameInputBlurHandeler}
      ></input>
      {nameInputIsInvalid && (
        <p style={{ color: "red" }}>Name Must not be empty.</p>
      )}
      &nbsp;&nbsp;
      <label htmlFor="Name">Color</label> &nbsp;
      <select
        name="color"
        className=""
        onChange={colorInputChangeHandeler}
        onBlur={colorInputBlurHandeler}
        value={enteredColor}
      >
        <option value="">Select Color</option>
        <option value="Red">Red</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
      </select>
      {colorInputIsInvalid && (
        <p style={{ color: "red" }}>Please select the color.</p>
      )}
      &nbsp;&nbsp;
      <button type="submit">Save</button> &nbsp;&nbsp;
      <button type="button" onClick={formClearHandler}>
        Clear
      </button>{" "}
      &nbsp;&nbsp;
    </form>
  );
}

export default AddColor;
