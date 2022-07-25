import { useContext } from "react";
import { ColorContext } from "./ColorContext";

function ColorList() {
  const { setEnteredName } = useContext(ColorContext);
  const { setEnteredColor } = useContext(ColorContext);
  const { Arr, setArr } = useContext(ColorContext);
  const { setIsEditing } = useContext(ColorContext);
  const { setEditingIndex } = useContext(ColorContext);

  const deleteHandler = (index) => {
    var result = window.confirm("Want to delete?");
    if (result) {
      let clonedArr = [...Arr];
      clonedArr.splice(index, 1);
      setArr(clonedArr);
    }
  };

  const updateHandler = (item, index) => {
    setEnteredName(item.name);
    setEnteredColor(item.color);
    setIsEditing(true);
    setEditingIndex(index);
  };
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Color</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {Arr.length > 0 &&
          Arr.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{`${item.color}`}</td>
                <td>
                  <button onClick={() => updateHandler(item, index)}>
                    Update
                  </button>
                  |<button onClick={() => deleteHandler(index)}>Delete</button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default ColorList;
