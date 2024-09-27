import { useState, useRef } from "react";
import { MdAddTask } from "react-icons/md";
function AddTodo({ onAddButton }) {
  // Using useRef ------>
  const todoNameElement = useRef();
  const tododueDateElement = useRef();

  const handleAddButton = () => {
    const itemName = todoNameElement.current.value;
    const dueDate = tododueDateElement.current.value;
    // console.log(`${itemName} due date ${dueDate}`);
    todoNameElement.current.value = "";
    tododueDateElement.current.value = "";
    onAddButton(itemName, dueDate);
  }; //<------useRef----->

  // Using useState ------>

  // let [itemName, setItemName] = useState("");
  // let [dueDate, setDueDate] = useState("");

  // const handleItemName = (event) => {
  //   setItemName(event.target.value);
  //   // console.log(event.target.value);
  // };
  // const handleDueDate = (event) => {
  //   setDueDate(event.target.value);
  // };

  // const handleAddButton = () => {
  //   // console.log(itemName, dueDate);
  //   onAddButton(itemName, dueDate);
  //   setItemName("");
  //   setDueDate("");
  // };
  return (
    <div className="container text-center py-2 ">
      <div className="row">
        <div className="col-5">
          <input
            ref={todoNameElement}
            // value={itemName}
            // onChange={(event) => handleItemName(event)}
            type="text"
            placeholder="Enter TODO here"
          />
        </div>
        <div className="col-4">
          <input
            ref={tododueDateElement}
            // value={dueDate}
            // onChange={(event) => handleDueDate(event)}
            type="datetime-local"
            placeholder="Enter Due Date"
          />
        </div>
        <div className="col-3">
          <button
            onClick={() => handleAddButton()}
            type="button"
            className="btn btn-success my-button"
          >
            <MdAddTask />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
