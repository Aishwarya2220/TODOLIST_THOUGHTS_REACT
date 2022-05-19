import { useState } from "react";

function ToDo() {
  const [listItem, addToList] = useState([]);
  const [textEntered, updateText] = useState("");

  function takeText(event) {
    return updateText(event.target.value);
  }
  function addTotodo() {
    const initialState = [...listItem];
    initialState.push(textEntered);
    return addToList(initialState);
  }
  function deleteFromTodo(index) {
    const initialState = [...listItem];
    console.log(index);
    initialState.splice(index, 1);
    return addToList(initialState);
  }

  return (
    <div>
      <h1>MY THOUGHTS</h1>
      <input className="textbox" type="text" onChange={takeText} />
      <button className="btn-grad" onClick={addTotodo}>
        Add
      </button>
      <ul className="maincontainer">
        {listItem.map((item, index) => {
          return (
            <div>
              <div className="list">
                <div className="item">
                  <li key={index}>{item}</li>
                </div>
                <div className="item">
                  <button
                    className="deletebtn"
                    onClick={() => deleteFromTodo(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
export default ToDo;
